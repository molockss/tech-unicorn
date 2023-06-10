import { Product } from '../../../model/Product'

interface Props {
  products: Product[]
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="w-full h-[375px] overfl">
          <img
            src={product.image}
            className="w-full h-[200px] object-contain"
          />
          <div>{product.title}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </>
  )
}
