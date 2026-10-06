import Link from 'next/link'
import { notFound } from 'next/navigation'
import products from '../../../data/products'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function generateStaticParams() {
  return products.map(product => ({ id: String(product.id) }))
}

export const dynamicParams = false

export default async function ProductPage({ params }) {
  const { id } = await params
  const product = products.find(product => String(product.id) === id)

  if (!product) notFound()

  return (
    <>
      <Link href="/" className="back-link">← Назад в каталог</Link>
      <article className="product">
        <img src={basePath + product.image} alt={product.name} width="480" height="360" />
        <div className="product-content">
          <h1>{product.name}</h1>
          <p className="price">{product.price.toLocaleString('ru-RU')} ₽</p>
          <h2>Описание товара</h2>
          <p className="description">{product.description}</p>
        </div>
      </article>
    </>
  )
}
