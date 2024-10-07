import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="max-w-lg mx-auto mt-7 mb-20 app-navbar">
            <ul className="flex items-center justify-between">
                <li className="hover:text-[#149eca] duration-200">
                    <Link className="px-3 py-2" to="/">
                        Home
                    </Link>
                </li>
                <li className="hover:text-[#149eca] duration-200">
                    <Link className="px-3 py-2" to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="hover:text-[#149eca] duration-200">
                    <Link className="px-3 py-2" to="/about">
                        About Us
                    </Link>
                </li>
                <li className="hover:text-[#149eca] duration-200">
                    <Link className="px-3 py-2" to="/learn">
                        Learn
                    </Link>
                </li>
                <li className="hover:text-[#149eca] duration-200">
                    <Link className="px-3 py-2" to="/contribute">
                        Contribute
                    </Link>
                </li>
                <li className="hover:text-[#149eca] duration-200">
                    <Link className="px-3 py-2" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;