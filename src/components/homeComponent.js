import React, { Component } from "react";
import { Container, Row, Col, Button, Collapse } from "reactstrap";

import MainNav from "./mainNavComponent";
import About from "./aboutComponent";
import Contact from "./contactComponent";
import Features from "./featuresComponent";

class Home extends Component {
<<<<<<< HEAD
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="mt-2">
            <Col className="text-center">
              <MainNav />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col className="text-center">
              <img
                alt="Family library"
                src="/images/logoImage.png"
                id="logoImage"
              />
              <h1 className="mt-3" style={styles.logoType}>
                family library
              </h1>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col xs="12" md="6">
              <Button
                className="btn-block mb-2"
                style={styles.buttonLogin}
                id="loginBtn"
              >
                LOG IN
              </Button>
            </Col>
            <Col xs="12" md="6">
              <Button
                className="btn-block mb-2"
                style={styles.buttonRegister}
                id="registerBtn"
              >
                REGISTER
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
=======
	constructor(props) {
		super(props);
		this.state = {
			aboutCollapsed: false,
			contactCollapsed: false,
			featuresCollapsed: false,
		};
	}
	toggleAbout = () => {
		this.setState({
			aboutCollapsed: !this.state.aboutCollapsed,
			contactCollapsed: false,
			featuresCollapsed: false,
		});
	};
	toggleContact = () => {
		this.setState({
			aboutCollapsed: false,
			contactCollapsed: !this.state.contactCollapsed,
			featuresCollapsed: false,
		});
	};
	toggleFeatures = () => {
		this.setState({
			aboutCollapsed: false,
			contactCollapsed: false,
			featuresCollapsed: !this.state.featuresCollapsed,
		});
	};
	render() {
		return (
			<React.Fragment>
				<Container>
					<Collapse isOpen={this.state.aboutCollapsed}>
						<Row>
							<Col className="text-center">
								<About />
							</Col>
						</Row>
					</Collapse>
					<Collapse isOpen={this.state.contactCollapsed}>
						<Row>
							<Col className="text-center">
								<Contact />
							</Col>
						</Row>
					</Collapse>
					<Collapse isOpen={this.state.featuresCollapsed}>
						<Row>
							<Col className="text-center">
								<Features />
							</Col>
						</Row>
					</Collapse>
					<Row className="mt-2">
						<Col className="text-center">
							<MainNav
								toggleAbout={this.toggleAbout}
								toggleContact={this.toggleContact}
								toggleFeatures={this.toggleFeatures}
							/>
						</Col>
					</Row>
					<Row className="mt-1">
						<Col className="text-center">
							<img src="/images/logoImage.png" id="logoImage" />
							<h1 className="mt-3" style={styles.logoType}>
								family library
							</h1>
						</Col>
					</Row>
					<Row className="text-center mt-4">
						<Col xs="12" md="6">
							<Button
								className="btn-block mb-2"
								style={styles.buttonLogin}
								id="loginBtn"
							>
								LOG IN
							</Button>
						</Col>
						<Col xs="12" md="6">
							<Button
								className="btn-block mb-2"
								style={styles.buttonRegister}
								id="registerBtn"
							>
								REGISTER
							</Button>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
>>>>>>> 1b63e0e4e32d405ced00d656f73d8b2d6258fe9d
}

const styles = {
  buttonLogin: {
    borderRadius: "8px",
    backgroundColor: "white",
    border: "solid black 3px",
    color: "black",
    fontSize: "2rem",
    width: "80%",
  },
  buttonRegister: {
    borderRadius: "8px",
    backgroundColor: "black",
    border: "solid black 3px",
    fontSize: "2rem",
    width: "80%",
  },
  logoType: {
    fontFamily: "Comfortaa",
    fontSize: "clamp(40px, 8vw, 100px)",
  },
};

export default Home;
