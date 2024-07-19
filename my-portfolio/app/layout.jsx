import "./globals.css";
import {ThemeProvider as NextThemesProvider, useTheme} from 'next-themes';
import {Raleway} from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const rale = Raleway({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Kevin Kraatz | Developer',
    description: 'Kevin Kraatz - Portfolio',
    charset: 'UTF-8',
    stylesheet: './globals.css',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className={rale.className} suppressHydrationWarning>
          <body>
            <NextThemesProvider disableTransitionOnChange>
                <div className="flex text-foreground">
                    <header className="fixed left-16 top-16 z-50 bg-transparent">
                        <Header/>
                    </header>
                    <main className="flex-1">
                        {children}
                    </main>
                    <footer className="fixed left-16 bottom-32 z-50 bg-transparent text-center text-sm -rotate-90">
                        <Footer/>
                    </footer>
                </div>
            </NextThemesProvider>
          </body>
        </html>
    );
}
