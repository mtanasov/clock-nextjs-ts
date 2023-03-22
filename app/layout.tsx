// "use client"

import "./globals.css"

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className="h-[568px] w-[320px] bg-[yellow]">
      <head />
      <body className="text-center bg-black h-[568px] w-[320px]">
        {children}
      </body>
    </html>
  );
}