import "@/assets/styles/global.css";

import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Property Pulse",
  keywords: "rental property real estate",
  description: "A Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
