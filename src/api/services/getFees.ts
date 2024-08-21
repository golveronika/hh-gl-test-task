import { axiosInstance } from "../settings";

export interface IFeesResponse {
    tax: number;
    extra: number;
    job: number;
}

export const getFees = async (): Promise<Array<IFeesResponse> | null> => {

    const result = await axiosInstance
      .get(`/mocks/fees.json`)
      .then((res) => {
        console.log(res)
        return res?.data
      })
      .catch(() => {
        return null
      })
  
    return result
  }