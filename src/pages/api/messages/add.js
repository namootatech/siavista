import clientPromise from '@/util/mongo';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      //console.log('req.method', req.method, 'req.query', req.query);
      const client = await clientPromise;
      const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
      const collection = db.collection('messages');
      let data = req.body;
      data = {
        ...data,
        createdAt: new Date(),
        approved: false,
      };
      const result = await collection.insertOne(data);
      //console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`;
      // );
      res
        .status(200)
        .json({ message: 'Testimonial added successfully', data: result });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (e) {
    //console.log(e);
    res.status(405).json({ message: 'Something went wrong', error: e });
  }
}
