import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ReactQuill from "react-quill";


class ComposeStory extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let renderData = (
			<Container>
				<hr
					className="horizRule mb-5 mt-4 px-0 mx-0"
					style={styles.horizRule}
				/>
				<form onSubmit={this.onSubmit}>
					<Row>
						<Col
							xs="12"
							lg="1"
							className="pr-2 px-0 text-lg-center"
						>
							<img
								src="/images/Ellipse2.png"
								style={styles.avatar}
								className="mb-2"
								alt="avatar"
							/>
						</Col>
						<Col xs="10">
							<div className="form-group">
								<label style={{ fontWeight: "700" }}>
									Title of Story
								</label>
								<input
									required
									className="form-control"
									value={this.state.title || ""}
									onChange={this.onChangeTitle}
									placeholder={
										"Enter Title of Family Story Here..."
									}
								></input>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs="10" className="offset-sm-1">
							<div className="form-group">
								<label style={{ fontWeight: "700" }}>
									Family Story
								</label>
								<ReactQuill
									className="quillApp"
									theme="snow"
									onChange={this.onChangeStory}
									placeholder={"Write your story..."}
									// value={this.state.editorHtml}
									modules={ComposeStory.modules}
									formats={ComposeStory.formats}
								/>
							</div>
							<div className="form-group">
								{/* <input type="submit" className="btn btn-primary" /> */}
								<Button
									onClick={this.onSubmit}
									type="button"
									className="btn btn-primary"
								>
									Submit
								</Button>
							</div>
						</Col>
					</Row>
				</form>
				<hr
					className="horizRule mb-5 mt-4 px-0 mx-0"
					style={styles.horizRule}
				/>
			</Container>
		);
		return <React.Fragment>{renderData}</React.Fragment>;
	}
}

const styles = {
	avatar: {
		width: "clamp(10px, 100%, 105px)",
		borderRadius: "50%",
	},
	horizRule: {
		width: "calc(100% + 30px)",
		borderTop: "2px solid rgba(0,0,0,.15)",
	},
};

//Quill stuff
ComposeStory.modules = {
	toolbar: [
		// [{ header: "1" }, { header: "2" }, { font: [] }],
		[{ header: "1" }, { header: "2" }],
		[{ size: [] }],
		// ["bold", "italic", "underline", "strike", "blockquote"],
		["bold", "italic", "underline", "strike"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link", "image", "video"],
		["clean"],
	],
	clipboard: {
		// toggle to add extra line breaks when pasting HTML:
		matchVisual: false,
	},
};

ComposeStory.formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	// "blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
	"video",
];

export default ComposeStory;