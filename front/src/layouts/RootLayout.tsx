import NavBarComp from "../components/NavBar"
import { Outlet } from "react-router-dom"
import FooterComp from "../components/Footer"

function RootLayout() {
  return (
    <>
        <NavBarComp />
            <main>
                <Outlet />
            </main>
        <FooterComp />
    </>
  )
}

export default RootLayout