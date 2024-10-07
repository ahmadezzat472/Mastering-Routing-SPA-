import { NavLink } from "react-router-dom"

const AsideLearn = () => {
    return (
        <aside className="px-3">
            <nav className="my-7">
                <ul className="flex flex-col justify-between">
                    <li className="hover:text-[#149eca] duration-200">
                        <NavLink className="px-3 py-2" to="/learn" end>
                            Quick Start
                        </NavLink>
                    </li>
                    <li className="hover:text-[#149eca] duration-200">
                        <NavLink className="px-3 py-2" to="/learn/thinking">
                            Thinking in React
                        </NavLink>
                    </li>
                    <li className="hover:text-[#149eca] duration-200">
                        <NavLink className="px-3 py-2" to="/learn/installation">
                            Installation
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default AsideLearn