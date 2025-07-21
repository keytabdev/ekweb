import { NextRequest, NextResponse } from 'next/server';

// Placeholder user storage (in production, use a database)
const users: Array<{
  id: string;
  name: string;
  email: string;
  password: string;
  userType: string;
  createdAt: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, userType } = body;

    // Basic validation
    if (!name || !email || !password || !userType) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      );
    }

    // In production, hash the password here
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create user object
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // In production, store hashedPassword
      userType,
      createdAt: new Date().toISOString(),
    };

    // Store user (in production, save to database)
    users.push(newUser);

    // Return success without password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = newUser;
    
    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: userWithoutPassword
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 