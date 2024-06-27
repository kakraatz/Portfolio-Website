import "./globals.css";
import {ThemeProvider as NextThemesProvider, useTheme} from 'next-themes';
import Header from '../components/Header';

export const metadata = {
    title: 'Kevin Kraatz | Developer',
    description: 'Kevin Kraatz - Portfolio',
    charset: 'UTF-8',
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
          <body>
            <NextThemesProvider disableTransitionOnChange>
                <div className="flex">
                    <header className="fixed left-16 top-16 z-50 bg-transparent">
                        <Header/>
                    </header>
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </NextThemesProvider>
          </body>
        </html>
    );
}
