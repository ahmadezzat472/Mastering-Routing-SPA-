import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AsideLearn from "../../components/AsideLearn";

const LearnLayout = () => {
    return (
        <div className="learn-layout">
            <AsideLearn />

            <div className="ml-72">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default LearnLayout;