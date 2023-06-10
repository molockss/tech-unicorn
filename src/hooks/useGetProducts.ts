import { useEffect, useState } from 'react'
import { Product } from '../model/Product'
import { useSearchParams } from 'react-router-dom'

export const useGetProducts = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState('')

  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')

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
