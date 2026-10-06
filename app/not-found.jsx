import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>Страница не найдена</h1>
      <p className="intro">Возможно, такого товара нет в каталоге.</p>
      <Link href="/" className="back-link">← Вернуться в каталог</Link>
    </>
  )
}
