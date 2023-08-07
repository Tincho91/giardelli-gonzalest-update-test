import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({ error: 'Error parsing form' });
    }

    // 'cv' is the key we used when appending the file to FormData
    const file = files.cv as File;

    // You can now save file.path to your database, and use fs to move the file elsewhere
    console.log(file);

    res.status(200).json({ message: 'Success' });
  });
}
