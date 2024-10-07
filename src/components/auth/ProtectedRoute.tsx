import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
    isAllowedCondition: boolean
    redirectPath: string
    children: ReactNode
}

const ProtectedRoute = ({isAllowedCondition, redirectPath, children}: IProps) => {
    if(isAllowedCondition) return children;
    else return <Navigate to={redirectPath} />
}

export default ProtectedRoute;  