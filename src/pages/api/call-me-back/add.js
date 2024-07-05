import clientPromise from '@/util/mongo';
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: `${process.env.NEXT_PUBLIC_EMAIL}`, //use env vars here
    pass: `${process.env.NEXT_PUBLIC_APP_PASSWORD}`, // and here
  },
});

var mailOptions = {
  from: 'namoota.zar@gmail.com',
  to: 'electricalsiavista@gmail.com',
  subject: 'New Website Call Me back',
};

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      //console.log('req.method', req.method, 'req.query', req.query);
      const client = await clientPromise;
      const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
      const collection = db.collection('callbacks');
      let data = req.body;
      data = {
        ...data,
        createdAt: new Date(),
        approved: false,
      };
      const result = await collection.insertOne(data);

      res
        .status(200)
        .json({ message: 'Testimonial added successfully', data: result });

      mailOptions.html = `<h1>Hi Siavista,</h1> <p>This is Namoota, you have received a new call me back request on your website</p> <p>Name: ${data.name}</p> <p>Phone: <a href='tel:${data.cellphoneNumber}'>${data.cellphoneNumber} </a></p>`;
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (e) {
    //console.log(e);
    res.status(405).json({ message: 'Something went wrong', error: e });
  }
}
