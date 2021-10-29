import React from 'react'

import layoutWrapper from '../../containers/layout/layoutWrapper'
import SideBar from '../../containers/shoppingLayout/components/sidebar';
import Project from './project';

import './styles.scss';

const Projects = () => {
		const projects = [{id: 'P1', duration: '122'}, {id: 'P2', duration: '20'}];
		return(
				<div className="projects-container">
						<SideBar />
						<div className="projects-section">
							{projects.map((project) => {
								return <Project project={project} />
							})}
						</div>
						<div></div>
				</div>
		)

}

export default layoutWrapper(Projects, {headerText:'Projects'})