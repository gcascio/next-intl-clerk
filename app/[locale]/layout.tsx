import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <ClerkProvider>
      <html lang={locale}>
        <body>
            <header>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
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
    </ClerkProvider>
  );
}
