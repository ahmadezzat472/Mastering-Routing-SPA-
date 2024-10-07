import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
    isAllowedCondition: boolean
    redirectPath: string
    children: ReactNode
    data?: unknown
}

const ProtectedRoute = ({isAllowedCondition, redirectPath, children, data}: IProps) => {
    if(isAllowedCondition) return children;
    else return <Navigate to={redirectPath} replace state={data} />

    // ** replace => will replace the current entry in the history track
}

export default ProtectedRoute;  