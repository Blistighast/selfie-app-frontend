import { Outlet } from "react-router-dom"
import Navbar from './../Components/Navbar';



const RootLayout = () => {

  return (
    <div className="root-layout">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
        
    </div>
  )
}

export default RootLayout;