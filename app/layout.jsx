import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Витрина товаров',
  description: 'Учебный проект витрины на Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <Link href="/" className="logo">Витрина</Link>
          <span>Товары на каждый день</span>
        </header>
        <main>{children}</main>
        <footer>Учебный проект на Next.js</footer>
      </body>
    </html>
  )
}
