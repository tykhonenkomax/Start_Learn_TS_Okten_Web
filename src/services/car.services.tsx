import {AxiosRes, axiosServices} from "./axios.services";
import {ICar} from "../interfaces";
import {urls} from "../config";

const carService={
getAll:():AxiosRes<ICar[]>=>axiosServices.get(urls.cars)
}

export {
    carService
}