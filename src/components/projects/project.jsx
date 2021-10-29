import React from 'react';
import { Button } from '@material-ui/core';
import './styles.scss';

const Project = ({ project, isTimerLogView, handleStartStop }) => {
		const formatTime = (time) => {
			if(time === 0) {
				return '00:00:00';
			}
			let hour = parseInt(time/3600);
			if(time >= 3600) {
				time = time - 3600;
			}
			let min = parseInt(time/60);
			if (time >= 60) {
				time = time - 60;
			}
			let seconds = parseInt(time);
			if(hour < 10) {
				hour = `0${hour}`
			}
			if(min < 10) {
				min = `0${min}`
			}
			if(seconds < 10) {
				seconds = `0${seconds}`
			}
			return `${hour}:${min}:${seconds}`;
		}
		return(
				<div className="project">
						<div className="project-name">{project.id}</div>
						<div className="project-right-section">
						<div className="project-duration">{formatTime(project.duration)}</div>
							{isTimerLogView ?
								<>
									<Button
										variant="contained"
										color="primary"
										onClick={() => handleStartStop(project.id, project.state === 'start')}
									>
										{project.state === 'start' ? 'Stop' : 'Start'}
									</Button>
								</>
							:
								null}
						</div>
				</div>
		)
}

export default Project;
