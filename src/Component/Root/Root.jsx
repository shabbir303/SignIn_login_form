import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div >
            <Header></Header>
            <div className="mt-[50px]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;