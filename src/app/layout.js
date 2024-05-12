import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Star Wars API",
  description: "Fetching Data from SWAPI.dev. Made by Gaston Soliz",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
