import "../global.css";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "chronark.com",
    template: "%s | chronark.com",
  },
  description: "DoomsDayPoptart",
  openGraph: {
    title: "cano.vercel.app",
    description: "DoomsDayPoptart",
    url: "https://chronark.com",
    siteName: "chronark.com",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Any head content you need */}
      </head>
      <body className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
        <div className={calSans.variable}>
          {children}
        </div>
      </body>
    </html>
  );
}
