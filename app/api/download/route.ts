import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { Request } from 'express'; // Import Request from 'express' for compatibility

const handler = async (req: NextApiRequest | Request, res: NextApiResponse) => {
    const { lang } = req.query as { lang: string };

    const filePath = path.join(process.cwd(), 'CV', `cv_${lang}.pdf`);

    try {
        const fileBuffer = await fs.readFile(filePath);

        res.setHeader('Content-Disposition', `attachment; filename="cv_${lang}.pdf"`);
        res.setHeader('Content-Type', 'application/pdf');
        res.status(200).send(fileBuffer);
    } catch (error) {
        res.status(404).json({ error: 'File not found' });
    }
};

export default handler;
