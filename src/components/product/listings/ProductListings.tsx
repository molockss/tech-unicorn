import { useGetProducts } from '../../../hooks/useGetProducts'
import { ProductGrid } from '../grid/ProductGrid'

const ProductSearch = () => <div>Search stuff</div>

export const ProductListings = () => {
  const { products } = useGetProducts({
    search: '',
    category: '',
    page: 1,
    limit: 1,
  })

  return (
    <div className="flex flex-col md:flex-row gap-16">
      <div className="w-full md:w-[296px] bg-red-500">
        <ProductSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
