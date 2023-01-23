import React, {FC, ReactNode} from 'react';

import {ICar} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    car: ICar;
    children?: ReactNode;
}

const Car: FC<IProps> = ({car}) => {

    const {id, year, price, name, model} = car;

    const navigate = useNavigate();
    return (
        <div>
            {
                <div>
                    <div>id: {id}</div>
                    <div>name: {name}</div>
                    <div>model: {model}</div>
                    <div>price: {price}</div>
                    <div>year: {year}</div>
                    <button onClick={() => navigate(`${id}`, {state: car})}>DETAILS</button>
                </div>
            }
        </div>
    );
};

export {Car};