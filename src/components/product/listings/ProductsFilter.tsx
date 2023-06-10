import { useGetProducts } from '../../../hooks/useGetProducts'
import { ProductGrid } from '../grid/ProductsGrid'
import { ProductCategories } from './ProductCategories'
import { ProductSearch } from './ProductSearch'

export const ProductListings = () => {
  const { products } = useGetProducts()

  return (
    <div className="flex flex-col md:flex-row gap-16">
      <div className="w-full md:max-w-[296px]">
        <ProductSearch />
        <ProductCategories />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
