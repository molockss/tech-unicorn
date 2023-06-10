import { Product } from '../../../model/Product'

interface Props {
  products: Product[]
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="w-full bg-white rounded-md">
          <div className="p-14">
            <img
              src={product.image}
              className="w-full h-[200px] object-contain"
            />
          </div>
          <div className='py-4'>
            <h4 className='font-bold text-center'>{product.title}</h4>
            <h5 className='text-primary text-center font-medium'>${product.price}</h5>
          </div>
        </div>
      ))}
    </>
  )
}
