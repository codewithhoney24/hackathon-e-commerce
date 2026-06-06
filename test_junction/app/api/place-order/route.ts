import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { auth } from '@clerk/nextjs/server';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-06-05',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Requires a token with write access
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { customerName, email, phone, address, city, totalPrice, items } = body;

    const newOrder = {
      _type: 'order',
      userId,
      customerName,
      email,
      phone,
      address,
      city,
      totalPrice,
      items: items.map((item: any) => ({
        _key: Math.random().toString(36).substring(2, 9),
        productId: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.discountPercentage 
          ? item.price - (item.price * item.discountPercentage / 100) 
          : item.price,
        imageUrl: item.imageUrl,
        selectedColor: item.selectedColor
      })),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const result = await client.create(newOrder);

    return NextResponse.json({ success: true, orderId: result._id });
  } catch (error: any) {
    console.error('Order placement error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}