import { NextResponse } from "next/server";
import { runDiagnosis } from "@/lib/agents/orchestrator";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const report = await runDiagnosis({
      subject: body.subject,
      chapter: body.chapter,
      question: body.question,
      studentAnswer: body.studentAnswer
    });

    return NextResponse.json({ success: true, report });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "诊断失败，请稍后重试"
      },
      { status: 400 }
    );
  }
}
