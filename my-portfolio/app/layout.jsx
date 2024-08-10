import "./globals.css";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react'
import { Raleway } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ActiveLinkProvider } from '../components/ActiveLinkProvider';

export const rale = Raleway({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Kevin Kraatz | Welcome',
    description: 'Kevin Kraatz - Portfolio',
    charset: 'UTF-8',
    stylesheet: './globals.css',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={rale.className} suppressHydrationWarning>
          <body>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <NextUIProvider>
                    <ActiveLinkProvider>
                        <div className="relative flex flex-col w-full text-foreground">
                            <header className="static xl:fixed w-full xl:w-fit xl:left-16 xl:top-16 -mb-72 z-50 bg-transparent">
                                <Header/>
                            </header>
                            <main className="flex-1">
                                {children}
                            </main>
                            <footer className="static xl:fixed flex flex-row w-full xl:w-fit xl:left-9 xl:bottom-32 justify-center z-50 bg-background xl:bg-transparent text-center text-sm xl:-rotate-90">
                                <Footer/>
                            </footer>
                        </div>
                    </ActiveLinkProvider>
                </NextUIProvider>
            </NextThemesProvider>
          </body>
        </html>
    );
}
