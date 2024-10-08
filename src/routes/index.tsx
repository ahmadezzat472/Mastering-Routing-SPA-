import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages";
import Contact from "../pages/Contact";
import About from "../pages/About";
import RootLayout from "../pages/Layout";
import QuickStart from "../pages/learn";
import Installation from "../pages/learn/Installation";
import Thinking from "../pages/learn/Thinking";
import LearnLayout from "../pages/learn/Layout";
import Contribute from "../pages/Contribute";
import Login from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const isLoggedIn = true
const userData: {email: string} | null = isLoggedIn ? {email: "Ahmed"} : null

const router = createBrowserRouter( 
    createRoutesFromElements(
        <>
            {/* Root Layout */}
            <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />} >
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="contribute" element={
                    <ProtectedRoute isAllowedCondition={isLoggedIn} redirectPath="/login" data={userData}>
                        <Contribute />
                    </ProtectedRoute> }
                />
                <Route path="login" element={
                    <ProtectedRoute isAllowedCondition={!isLoggedIn} redirectPath="/contribute" data={userData}>
                        <Login />
                    </ProtectedRoute> }
                />
            </Route>

            {/* Learn Layout */}
            <Route path="/learn" element={<LearnLayout />} >
                <Route index element={<QuickStart />} />
                <Route path="installation" element={<Installation />} />
                <Route path="thinking" element={<Thinking />} />
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<PageNotFound />} />
        </>
    )
)

export default router;



