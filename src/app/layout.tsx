import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";

export const metadata: Metadata = {
  title: "Osmosis - Real-time Intelligence Monitoring",
  description: "Osmosis tracks public records from pension funds, corporations, governments, and nonprofits. We monitor meetings, earnings, interviews, and key documents, alerting you whenever a narrative shifts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>
        {children}
      </body>
    </html>
  );
}
