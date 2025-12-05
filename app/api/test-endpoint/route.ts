import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    method: 'GET'
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    return NextResponse.json({
      message: 'POST request received successfully!',
      timestamp: new Date().toISOString(),
      method: 'POST',
      receivedData: body
    })
  } catch (error) {
    return NextResponse.json({
      message: 'POST request received but failed to parse JSON',
      timestamp: new Date().toISOString(),
      method: 'POST',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
