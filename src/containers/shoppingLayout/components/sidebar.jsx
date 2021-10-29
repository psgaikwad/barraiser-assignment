import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const SideBar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-item">
				<Link to={"/projects"}>Projects</Link>
			</div>
			<div className="sidebar-item">
				<Link to={"/"}>TimeTracker</Link>
			</div>
		</div>
	)
}

export default SideBar;
