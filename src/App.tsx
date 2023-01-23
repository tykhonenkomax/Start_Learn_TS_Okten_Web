import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {CarPage, MainLayout} from "./components";
import {CarDetailsPage} from "./components/Pages/CarDetailsPage";

const App: FC = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}>
                    <Route path={':id'} element={<CarDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;