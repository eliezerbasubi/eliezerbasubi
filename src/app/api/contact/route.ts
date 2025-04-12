import { sanityClient } from '@/lib/helpers/sanity';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const contact = {
      _type: 'contact',
      ...body,
    };

    await sanityClient.create(contact);

    return Response.json({ data: body, status: 200 });
  } catch {
    return Response.json({
      error: "Couldn't submit the contact details",
      status: 500,
    });
  }
}
