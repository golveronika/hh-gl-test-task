import { useQuery } from "@tanstack/react-query"
import { getFees } from "./../services/getFees"

const useFees = () => {
    return useQuery({ queryKey: ['getFees'], queryFn: getFees })
}

export default useFees