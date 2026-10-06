import Link from 'next/link'
import products from '../data/products'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function HomePage() {
  return (
    <>
      <h1>Каталог товаров</h1>
      <p className="intro">Выберите товар, чтобы посмотреть его полное описание.</p>
      <div className="products">
        {products.map(product => (
          <Link href={`/products/${product.id}/`} className="card" key={product.id}>
            <img src={basePath + product.image} alt={product.name} width="480" height="360" />
            <div className="card-content">
              <h2>{product.name}</h2>
              <p className="price">{product.price.toLocaleString('ru-RU')} ₽</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
