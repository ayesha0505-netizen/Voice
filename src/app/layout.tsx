import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { AvatarProvider } from "@/context/AvatarContext";
import { StreakProvider } from "@/context/StreakContext";
import { LevelProgressProvider } from "@/context/LevelProgressContext";
import { AvatarSelectionModal } from "@/components/portal/AvatarSelectionModal";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "voice – Find Your Words. Express Yourself.",
  description:
    "voice – Find Your Words. Express Yourself. Turn speaking practice into an exciting game! Spin the wheel, discover random words, beat the timer, and express your thoughts through sentences and stories. Challenge yourself, improve your vocabulary, overcome hesitation, and build confidence with every round. Find your words. Speak your mind. Let your voice shine!",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable} style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased min-h-screen flex flex-col font-sans selection:bg-primary-fixed selection:text-on-primary-fixed">
        <AuthProvider>
          <AvatarProvider>
            <StreakProvider>
              <LevelProgressProvider>
                {children}
                <AvatarSelectionModal />
              </LevelProgressProvider>
            </StreakProvider>
          </AvatarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
