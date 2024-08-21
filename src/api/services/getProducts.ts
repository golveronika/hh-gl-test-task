import { axiosInstance } from "../settings";

export interface IProduct {
  code: string;
  name: string;
  price: number;
  printing: number;
  image: string;
  incl_job: boolean;
  incl_tax: boolean;
  incl_extra: boolean;
  extra?: Array<{
    code: string;
    name: string;
  }>;
}

export interface IProductsResponse {
  products: IProduct[];
}

export const getProducts = async (code?: string): Promise<IProductsResponse | null> => {

    const result = await axiosInstance
      .get(`/mocks/products.json`)
      .then((res) => {
        const result = res?.data;
        if (code) {
          result.products = result?.products?.filter((product: IProduct) => product.code === code)
        }
        return result
      })
      .catch(() => {
        return null
      })
  
    return result
  }