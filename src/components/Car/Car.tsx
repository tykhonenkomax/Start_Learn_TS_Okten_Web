import React, {FC, ReactNode} from 'react';
import {ICar} from "../../interfaces";

interface IProps {
    car: ICar
    children?: ReactNode
}

const Car: FC<IProps> = ({car}) => {

    const {id, year, price, name, model} = car

    return (
        <div>
            {
                <div>
                    <div>id: {id}</div>
                    <div>name: {name}</div>
                    <div>model: {model}</div>
                    <div>price: {price}</div>
                    <div>year: {year}</div>
                </div>
            }
        </div>
    );
};

export {Car};