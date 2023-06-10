import { useSearchParams } from 'react-router-dom'
import { useGetProductCategories } from '../../../hooks/useeGetProductCategories'
import { FiArrowRight } from 'react-icons/fi'

export const ProductCategories = () => {
  const [_, setSearchParams] = useSearchParams()
  const { productCategories } = useGetProductCategories()

  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="text-xl font-bold">Product categories</div>
      {productCategories.map((category) => (
        <button
          onClick={() => setSearchParams({ category: category })}
          className="w-full"
        >
          <div className="flex-1 flex justify-between items-center">
            <span>{category}</span>
            <FiArrowRight />
          </div>
        </button>
      ))}
    </div>
  )
}
