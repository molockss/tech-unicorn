import { useEffect, useState } from 'react'
import { Product } from '../model/Product'

interface Props {
  search?: string
  category?: string
  page?: number
  limit?: number
  sort?: 'asc' | 'desc'
}

export const useGetProducts = ({
  search,
  category,
  page = 1,
  sort = 'asc',
  limit,
}: Props) => {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState('')

  const handleGetProductsInCategory = async (category: string) => {
    try {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setProducts(json))
    } catch (err) {
      setError('Something went wrong')
    }
  }

  const handleGetAllProducts = async () => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setProducts(json))
    } catch (err) {
      setError('Something went wrong')
    }
  }

  useEffect(() => {
    if (category) {
      handleGetProductsInCategory(category)
    } else {
      handleGetAllProducts()
    }
  }, [search, category, page, limit])

  return { products, error }
}
