import axios, {AxiosResponse} from "axios";
import {baseURL} from "../config";

let axiosServices = axios.create({baseURL});
type AxiosRes<T> = Promise<AxiosResponse<T>>

export {
    axiosServices,
}
export type {
    AxiosRes
}
