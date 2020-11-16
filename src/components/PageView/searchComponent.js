import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
			<React.Fragment>
				<Container>
					<Row className="ml-2">
						<Col className="ml-2">
							<div className="ml-3" style={styles.search}>
								<div style={styles.searchText}>Search 🔍</div>
								<span style={styles.title}>
									Family Stories Feed:{" "}
								</span>
								<span style={styles.subject}>
									Patrick McCarthy
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
    }
}

const styles = {
	search: {
		// paddingBottom: "5px",
	},
	searchText: {
		fontSize: "2rem",
		fontFamily: "Comfortaa",
		paddingBottom: "100px",
	},
	title: {
		fontWeight: "bold",
		fontSize: "1.7rem",
		fontFamily: "Roboto",
	},
	subject: {
		// fontWeight: "bold",
		fontSize: "1.5rem",
		fontFamily: "Roboto",
	},
};
 
export default Search;