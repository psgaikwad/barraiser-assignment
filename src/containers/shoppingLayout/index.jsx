import React, { useState } from 'react'
import { connect } from 'react-redux'
import {getAllProducts} from '../../actions'
import layoutWrapper from '../../containers/layout/layoutWrapper'
import SideBar from './components/sidebar';
import { Container, Divider, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './styles.scss';
import Project from '../../components/projects/project';
import { Dialog } from '@material-ui/core';

const Clockify = () => {
	const [projects, setProjects] = useState([]);
	const [newProjectId, setNewProjectId] = useState('P1');
	const [intervl, setIntervl] = useState(null);
	const [openDialog, setOpenDialog] = useState(false);

	const handleCreateProject = () => {
		let newProjects = [...projects];
		newProjects.push({ id: newProjectId, duration: 0, state: "stop"});
		setProjects(newProjects);
		setNewProjectId('');
		setOpenDialog(false);
	}

	const handleRemoveProject = (id) => {
		let newProjects = [...projects];
		let index = newProjects.findIndex((p) => p.id === id);
		newProjects.splice(index, 1);
		setProjects(newProjects);
	}

	const handleProjectId = (e) => {
		setNewProjectId(e.target.value);
	}

	const handleStartStop = (id, isStop) => {
		if (isStop && intervl) {
			clearInterval(intervl);
			setIntervl(null);
			let newProjects = [...projects];
			let index = newProjects.findIndex((p) => p.id === id);
			let obj = newProjects.find((p) => p.id === id);
			obj.state = 'stop';
			setProjects(newProjects);
		} else {
			let interval = setInterval(() => {
				let newProjects = [...projects];
				let index = newProjects.findIndex((p) => p.id === id);
				let obj = newProjects.find((p) => p.id === id);
				obj.duration = obj.duration + 1;
				obj.state = 'start';
				setProjects(newProjects);
			}, 1000);
			setIntervl(interval);
		}
	}

	const CreateDialog = ({ open, close }) => {
		return (
			<Dialog open={open} maxWidth="sm">
				<div className="create-project">
					<div className="create-project-header">
						Create new projects
					</div>
					<Divider />
					<div className="project-id-input">
					<TextField value={newProjectId} variant="outlined" onChange={handleProjectId} placeholder="Enter project id" />
					</div>
					<Divider />
					<div className="project-id-btn">
						<Button
							variant="contained"
							color="primary"
							onClick={() => handleCreateProject()}
						>
							Create
						</Button>
					</div>
				</div>
			</Dialog>
		)
	}

	const openCreateDialog = () => {
		setOpenDialog(true);
	}

	return(
			<div className="timer-container">
					<SideBar />
					<div className="timer-section">
						<div className="create-project">
							<Button
								variant="contained"
                color="primary"
								onClick={() => openCreateDialog()}
							>
								+ Create Project
							</Button>
							<CreateDialog
								open={openDialog}
								close={() => setOpenDialog(false)}
							/>
						</div>

						<div className="project-timings-log">
							{projects.map((project) => {
								return <Project
									key={project.id}
									project={project}
									isTimerLogView={true}
									handleStartStop={handleStartStop}
								/>
							})}
						</div>


					</div>
			</div>
	)
}

export default layoutWrapper(Clockify, {headerText: 'Clockify'});
