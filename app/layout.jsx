import { Unbounded, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Unbounded({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  title: 'Young Vam Gadgets & Accessories',
  description:
    'Your surest gadgets store. Phones, laptops and accessories, plus repairs, software installation and swap deals at Shop 14.',
  openGraph: {
    title: 'Young Vam Gadgets & Accessories',
    description: 'Your dream gadget don land. We buy, sell, swap and repair.',
    images: ['/poster.jpg'],
  },
};

export const viewport = {
  themeColor: '#060a1f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
