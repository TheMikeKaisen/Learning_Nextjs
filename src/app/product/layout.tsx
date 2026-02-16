
export default function ProductIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <p>This is a nested layout.</p>
      </body>
    </html>
  );
}
