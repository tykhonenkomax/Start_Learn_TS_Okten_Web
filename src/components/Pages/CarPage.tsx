import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Cars} from "../Cars";
import {CarForm} from "../CarForm";

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <Outlet/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};