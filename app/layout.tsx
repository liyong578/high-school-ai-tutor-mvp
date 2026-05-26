import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "高中物化 AI 学习陪练系统",
  description: "面向高二学生的物理和化学 AI 学习陪练 MVP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
