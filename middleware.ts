import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUserByEmail } from './utils/db/actions';


export function middleware(request: NextRequest) {
    const email = request.cookies.get('email');
 const isLoggedIn = getUserByEmail(email);
 if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/landingpage', request.url));
  }
  }
  