import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Ninawe | AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Piyush Ninawe — AI/ML Engineer & Full Stack Developer based in India. Building intelligent, scalable and user-focused digital solutions.",
  keywords: [
    "Piyush Ninawe", "AI/ML Engineer", "Full Stack Developer", "Portfolio",
    "React", "Next.js", "Python", "Machine Learning", "Web Development", "India"
  ],
  authors: [{ name: "Piyush Ninawe" }],
  openGraph: {
    title: "Piyush Ninawe | AI/ML Engineer & Full Stack Developer",
    description: "Building intelligent, scalable and user-focused digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
