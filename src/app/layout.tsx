import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './index.css';
import Navbar from '@/components/Navbar';

const monteserrat = Montserrat({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Home',
    description: 'App about cards',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${monteserrat.className} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
