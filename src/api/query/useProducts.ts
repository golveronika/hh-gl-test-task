import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./../services/getProducts"

const useProducts = (code?: string) => {
    return useQuery({ queryKey: ['getProducts'], queryFn: () => getProducts(code) })
}

export default useProducts