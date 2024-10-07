import { RouterProvider } from "react-router-dom"
import router from "./routes"
// import Navbar from "./components/Navbar"

function App() {

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
