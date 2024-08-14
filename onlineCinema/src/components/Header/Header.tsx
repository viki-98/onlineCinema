import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { BsBrightnessHigh } from "react-icons/bs"
import { IoMoonOutline } from "react-icons/io5"
import { useContext, useState } from "react"
import { TContext } from "../../provider.tsx"
import { IconContext } from "react-icons"

function Header() {
    // const [darkMode, setDarkMode] = useState(false);
    const [theme, setTheme] = useContext(TContext)
    const handleDarkMode = () => {
        setTheme(theme === "light" ? "dark" : "light")
        // setDarkMode(!darkMode);
    }

    return (
        <Navbar data-bs-theme={theme === "dark" ? "dark" : "light"} expand="lg"
                className="bg-body-tertiary border-bottom">
            <Container fluid className="justify-content-between">
                <Navbar.Brand href="#">OnlineCinema</Navbar.Brand>
                {/*<Navbar.Toggle aria-controls="navbarScroll" />*/}
                {/*<Navbar.Collapse id="navbarScroll" >*/}

                {/*</Navbar.Collapse>*/}
                <Form.Group className="d-flex justify-content-between align-items-center">
                    <Form.Check onClick={handleDarkMode} // prettier-ignore
                                type="switch"
                                id="custom-switch"
                    />
                    {theme === "light" ?
                        <IconContext.Provider
                            value={{ color: "black", size: "25px" }}>
                            <BsBrightnessHigh />
                        </IconContext.Provider> :
                        <IconContext.Provider
                            value={{ color: "white", size: "25px" }}>
                            <IoMoonOutline />
                        </IconContext.Provider>
                    }

                </Form.Group>
            </Container>
        </Navbar>
    )
}

export default Header