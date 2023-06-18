import "tailwindcss/tailwind.css";
import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50  p-4">{children}</body>
    </html>
  );
}
