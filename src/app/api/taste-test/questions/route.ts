import { NextResponse } from 'next/server';
import { TASTE_TEST_QUESTIONS } from '@/data/taste-test-questions';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: TASTE_TEST_QUESTIONS
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}