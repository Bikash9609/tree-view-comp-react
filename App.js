import React, { useState } from "react";

const TreeItem = ({ label, nodeNo, children }) => {
	const [show, setShow] = useState(false);

	const showHandler = () => {
		setShow(!show);
	};

	return (
		<>
			<p onClick={showHandler}>{label}</p>
			{children && show && (
				<p style={{ paddingLeft: "50px" }} className="subItem">
					{children}
				</p>
			)}
		</>
	);
};

function App() {
	return (
		<div className="App">
			{/* <Layout /> */}
			<TreeItem label="Click me" nodeNo={1}>
				<TreeItem label="item 2" nodeNo={2} />
				<TreeItem label="Click me" nodeNo={3}>
					<TreeItem label="Click me " nodeNo={4}>
						<TreeItem label="last item" nodeNo={5} />
					</TreeItem>
				</TreeItem>
				<TreeItem label="item 4" nodeNo={6} />
			</TreeItem>
			<TreeItem label={"Click 5"} nodeNo={7}>
				<TreeItem label={"Item 6"} nodeNo={8} />
				<TreeItem label={"Item 6"} nodeNo={8} />
				<TreeItem label={"Item 6"} nodeNo={8} />
				<TreeItem label={"Item 6"} nodeNo={8} />
			</TreeItem>
		</div>
	);
}

export default App;
