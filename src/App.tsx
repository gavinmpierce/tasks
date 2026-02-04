import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CONNREFUSED } from "node:dns";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript ALSO Hello World
            </header>
            <Container>
                <Row>
                    <Col>
                        <h1>Hello this is a header</h1>
                        <img src="../public/logo192.png" alt="The Logo" />
                        <ol>
                            <li>Hotdogs</li>
                            <li>Burgers</li>
                            <li>Fireworks</li>
                        </ol>
                        <div
                            style={{
                                width: "20px",
                                height: "10px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <p>Gavin Pierce</p>
                        <div
                            style={{
                                width: "20px",
                                height: "10px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
