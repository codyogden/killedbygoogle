import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const umamiID: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send(process.env.UMAMI_ID);
}

export default umamiID;
