import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./../services/getProducts"

const useProducts = () => {
    return useQuery({ queryKey: ['getProducts'], queryFn: getProducts })
}

export default useProducts