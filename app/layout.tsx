import type { Metadata, Viewport } from "next";
import { Mozilla_Text } from "next/font/google";
import "./globals.css";

const mozillaText = Mozilla_Text({
  variable: "--font-mozilla-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skybridge.tech"),
  title: "Skybridge — the full-stack React framework for MCP Apps | Claude & ChatGPT",
  description:
    "Skybridge is the open-source TypeScript framework for building MCP Apps. Write once, run in Claude, ChatGPT, VSCode, and any MCP client. 100K monthly downloads.",
  keywords: [
    "MCP", "MCP Apps", "Model Context Protocol", "Claude", "ChatGPT",
    "TypeScript framework", "React framework", "AI apps", "OpenAI",
    "Anthropic", "MCP server", "MCP client", "Skybridge", "Alpic",
  ],
  authors: [{ name: "Alpic" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://skybridge.tech/" },
  openGraph: {
    type: "website",
    siteName: "Skybridge",
    title: "Skybridge — the full-stack React framework for MCP Apps",
    description:
      "Open-source TypeScript framework for building MCP Apps. Write once, run in Claude, ChatGPT, VSCode, and any MCP client. 100K monthly downloads.",
    url: "https://skybridge.tech/",
    images: ["/assets/skybridge-midnight.svg"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@skybridgedev",
    title: "Skybridge — the full-stack React framework for MCP Apps",
    description:
      "Open-source TypeScript framework for building MCP Apps. Write once, run in Claude, ChatGPT, VSCode, and any MCP client.",
    images: ["/assets/skybridge-midnight.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050d0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mozillaText.variable}>
      <body>{children}</body>
    </html>
  );
}
