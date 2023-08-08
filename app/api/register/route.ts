import bcrypt from 'bcrypt';

import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request
) {
  
  try {

    const body = await request.json();

    const {
      email,
      name,
      password
    } = body;

    if (!email || !name || !password) {
      return new NextResponse('Falta informacoes!', { status: 400 });
    };

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword
      }
    });

    return NextResponse.json(user);

  } catch (error: any) {
    console.log(error, 'ERROR_REGISTRO')

    return new NextResponse('Error interno', { status: 500 })
  }
}