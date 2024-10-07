import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages";
import Contact from "../pages/Contact";
import About from "../pages/About";
import RootLayout from "../pages/Layout";
import QuickStart from "../pages/learn";
import Installation from "../pages/learn/Installation";
import Thinking from "../pages/learn/Thinking";
import LearnLayout from "../pages/learn/Layout";

const router = createBrowserRouter( 
    createRoutesFromElements(
        <>
            {/* Root Layout */}
            <Route path="/" element={<RootLayout />} >
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Route>

            {/* Learn Layout */}
            <Route path="/learn" element={<LearnLayout />} >
                <Route index element={<QuickStart />} />
                <Route path="installation" element={<Installation />} />
                <Route path="thinking" element={<Thinking />} />
            </Route>
        </>
    )
)

export default router;



