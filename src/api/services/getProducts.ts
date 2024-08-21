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

export const getProducts = async (): Promise<IProductsResponse | null> => {

    const result = await axiosInstance
      .get(`/mocks/products.json`)
      .then((res) => {
        return res?.data
      })
      .catch(() => {
        return null
      })
  
    return result
  }