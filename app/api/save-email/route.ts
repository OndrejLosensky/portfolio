import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { createObjectCsvWriter } from 'csv-writer';

const csvWriter = createObjectCsvWriter({
  path: path.join(process.cwd(), 'emails', 'emails.csv'),
  header: [
    { id: 'email', title: 'Email' },
  ],
  append: true, // Appends to the file if it exists
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email } = JSON.parse(req.body);

      if (!email || !email.includes('@')) {
        console.error('Invalid email:', email);
        return res.status(400).json({ message: 'Invalid email' });
      }

      console.log('Saving email:', email);
      await csvWriter.writeRecords([{ email }]);
      console.log('Email saved successfully');
      return res.status(200).json({ message: 'Email saved successfully' });
    } catch (error) {
      console.error('Error saving email:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
