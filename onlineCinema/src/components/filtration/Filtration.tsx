// import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useAppSelector } from "../../hooks/hooks.ts"
import { fetchFilmsGenres } from "../../services/filtrationService.ts"
import "./Filtration.scss"

const Filtration = () => {
    const result = useAppSelector((state) => state.filtration)
    console.log(result.seriesGenres)

    // Функция для разбиения элементов на столбцы
    const splitIntoColumns = (items, columns) => {
        const itemsPerColumn = Math.ceil(items.length / columns)
        return Array.from({ length: columns }, (_, index) =>
            items.slice(index * itemsPerColumn, (index + 1) * itemsPerColumn)
        )
    }

    // Разделение на 2 колонки
    const cinemaGenresColumns = splitIntoColumns(result.cinemaGenres, 4)
    const cinemaSeriesColumns = splitIntoColumns(result.seriesGenres, 4)


    return (
        <Navbar variant="light" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example" className="d-flex justify-content-between">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Films"
                            menuVariant="light"
                        >
                            <div className="dropdown-menu-columns">
                                {cinemaGenresColumns.map((column, columnIndex) => (
                                    <div className="dropdown-column" key={columnIndex}>
                                        {column.map((element) => (
                                            <NavDropdown.Item key={element.id}>
                                                {element.name}
                                            </NavDropdown.Item>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </NavDropdown>

                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Series"
                            menuVariant="light"
                        >
                            <div className="dropdown-menu-columns">
                                {cinemaSeriesColumns.map((column, columnIndex) => (
                                    <div className="dropdown-column" key={columnIndex}>
                                        {column.map((element) => (
                                            <NavDropdown.Item key={element.id}>
                                                {element.name}
                                            </NavDropdown.Item>
                                        ))}
                                    </div>
                                ))}
                            </div>

                        </NavDropdown>
                    </Nav>

                    <Form inline="true">
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Filtration
