import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);

  try {
    const contact = {
      _type: 'contact',
      ...body,
    };
    await sanityClient.create(contact);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Couldn't submit the contact details" });
  }

  return res.status(200).json({ data: body });
}
