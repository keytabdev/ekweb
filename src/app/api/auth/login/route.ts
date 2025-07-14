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
    const { email, password } = body;

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // In production, verify password hash here
    // const isValidPassword = await bcrypt.compare(password, user.password);
    const isValidPassword = user.password === password; // Placeholder

    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // In production, generate JWT token here
    const token = `token_${Date.now()}_${user.id}`; // Placeholder token

    // Return user data without password
    const { password: userPassword, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      message: 'Login successful',
      token,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 