import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Lazy initialize Stripe to avoid build-time errors
function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not configured');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const body = await request.json();
    const { amount, recurring, locale = 'en' } = body;

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const origin = request.headers.get('origin') || 'http://localhost:3000';

    if (recurring) {
      // Create a subscription checkout session
      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: 'DOGE Belgium Monthly Support',
                description: 'Monthly donation to support independent government accountability research',
              },
              unit_amount: amount * 100, // Convert to cents
              recurring: {
                interval: 'month',
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/${locale}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/${locale}/donate?canceled=true`,
      });

      return NextResponse.json({ url: session.url });
    } else {
      // Create a one-time payment checkout session
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: 'DOGE Belgium Donation',
                description: 'One-time donation to support independent government accountability research',
              },
              unit_amount: amount * 100, // Convert to cents
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/${locale}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/${locale}/donate?canceled=true`,
      });

      return NextResponse.json({ url: session.url });
    }
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
