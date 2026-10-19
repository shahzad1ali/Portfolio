import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "react-hot-toast";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700","800"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Shahzad Ali | Full-Stack Developer",
  description:
    "Explore Shahzad Ali's full-stack web and mobile projects, development services, technical skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetBrainsMono.variable}
      >
       <div className="fixed !top-0 left-0 w-full z-[9999]">
  <Header />
</div>

        <StairTransition />
        <PageTransition >
        {children}
        </PageTransition>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
