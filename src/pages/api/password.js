import clientPromise from '@/util/mongo';
import bcrypt from 'bcrypt';
export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const password = req.body.password;
      const hash =
        '$2a$12$HJ1ycOjDggCWsYy50zoKceVFDBhpA.rcKvWHAQCgTfstMh0FIN1ni';
      const match = await bcrypt.compare(password, hash);
      console.log('p-asswords matcch', match);
      res.send(match); // true
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (e) {
    //console.log(e);
    res.status(405).json({ message: 'Something went wrong', error: e });
  }
}
