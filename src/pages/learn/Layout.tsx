import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AsideLearn from "../../components/AsideLearn";

const LearnLayout = () => {
    return (
        <div>
            <Navbar />
            <AsideLearn />
            <Outlet />
        </div>
    )
}

export default LearnLayout;