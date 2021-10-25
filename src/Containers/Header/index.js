import React from "react";
import "./Header.css";

function Header() {
	return (
		<div className="header-container flex-row">
			<div className="categories flex-row">
				<div className="logo">MUMMLY</div>
				<a href="#">list1</a>
				<a href="#">list2</a>
				<a href="#">list3</a>
				<a href="#">list4</a>
			</div>
			<div className="info flex-row">
				<div>search</div>
				<div>premium</div>
				<div>login</div>
			</div>
		</div>
	);
}

export default Header;
