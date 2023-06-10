import { useEffect, useState } from 'react'

export const useGetProductCategories = () => {
    const [productCategories, setProductCategories] = useState<string[]>([])
    const [error, setError] = useState('')

    const handleGetProductCategories = async () => {
        try {
            fetch('https://fakestoreapi.com/products/categories')
                .then((res) => res.json())
                .then((json) => setProductCategories(json))
        } catch (err) {
            setError('Something went wrong')
        }
    }

    useEffect(() => {
        handleGetProductCategories()

    }, [])

    return { productCategories, error }
}
