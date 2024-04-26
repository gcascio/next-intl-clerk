export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale}>
      <body>
        <main>
          {children}
        </main>
        <footer>
          <a href="/en">English</a>
          <br />
          <a href="/de">Deutsch</a>
        </footer>
      </body>
    </html>
  );
}
