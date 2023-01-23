import {AxiosRes, axiosServices} from "./axios.services";
import {ICar} from "../interfaces";
import {urls} from "../config";

const carService = {
    getAll: (): AxiosRes<ICar[]> => axiosServices.get(urls.cars),
    create: (car: ICar): AxiosRes<ICar> => axiosServices.post(urls.cars, car)
}

export {
    carService
}