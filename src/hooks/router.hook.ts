import {useLocation} from "react-router-dom";

type useLocationType = ReturnType<typeof useLocation>


interface IState<T> extends useLocationType {
    state: T
}

export type {
  useLocationType
}
