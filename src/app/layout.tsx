import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "@/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youssef Kassimi - Software Engineering Student",
  description: "Personal portfolio showcasing my skills, projects, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark:bg-[#0A0A0A]">
      <body className={`${inter.className} min-h-screen bg-background dark:bg-[#0A0A0A]`}>
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen w-full bg-background dark:bg-[#0A0A0A]">
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
