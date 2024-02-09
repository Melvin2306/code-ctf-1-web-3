import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies(); // Initialize the cookie store with the request
    const userIdCookie = cookieStore.get('userId'); // Retrieve the 'userId' cookie
    const userId = userIdCookie?.value;

    if (userIdCookie) {
      if (userId === '991') {
        return new NextResponse(
          JSON.stringify({ message: 'CODE_CTF{Prime_NUmBERS_ROCK}' }),
          { status: 200 }
        );
      } else {
        return new NextResponse(JSON.stringify({ message: 'wrong userId' }), {
          status: 403,
        });
      }
    } else {
      return new NextResponse(JSON.stringify({ message: 'no userId found' }), {
        status: 404,
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
