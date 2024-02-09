import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { user, password } = await request.json(); // This line can throw an error if the request body isn't properly formatted JSON

    if (user === 'code_manuel' && password === 'sts_is_awesome') {
      const response = NextResponse.json({}, { status: 200 });
      response.cookies.set({
        name: 'userId',
        value: '383',
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 1000,
      });
      return response;
    } else if (user === 'code_jonathan' && password === 'party_animal') {
      const response = NextResponse.json({}, { status: 200 });
      response.cookies.set({
        name: 'userId',
        value: '421',
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 1000,
      });
      return response;
    } else {
      return new NextResponse(JSON.stringify({ message: 'Login failed' }), {
        status: 401,
      });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Error processing request' }),
      { status: 500 }
    );
  }
}
