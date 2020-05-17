import React, { useState } from 'react';
import { TeacherTopbar } from '../Topbar.teacher.component';
import { TeacherSidebar } from '../Sidebar.teacher.component';
import { ClassroomPage } from './Classroom.teacher.page';
import { TeacherVideo } from './Video.teacher.page';
import { AddVideoPage } from './AddVideo.page';
import { TeacherAssignment } from './Assignment.teacher.page';
import { AddAssignmentPage } from './AddAssignment.page';
import { TeacherNote } from './Note.teacher.page';
import { AddNotePage } from './AddNote.page';
import { AssignmentDetailPage } from './AssignmentDetail.page';

export const TeacherPage = () => {
	const [ activePage, setActivePage ] = useState('classroom');

	const ClassSection = () => (
		<div className="flex items-center top-content w-full">
			<div className="flex flex-none class-container justify-between items-center mr-auto">
				<p className="choose-class">Choose Class</p>
				<div className="classes w-full h-screen flex-center">
					<select className="w-8/12 h-full bg-white outline-none">
						<option>Class 1</option>
						<option>Class 2</option>
						<option>Class 3</option>
						<option>Class 4</option>
						<option>Class 5</option>
						<option>Class 6</option>
						<option>Class 7</option>
						<option defaultValue>Class 8</option>
						<option>Class 9</option>
						<option>Class 10</option>
					</select>
				</div>

				<div className="subjects w-full h-screen flex-center">
					<select className="w-10/12 h-full bg-white outline-none">
						<option>Choose subject</option>
						<option>Subject 1</option>
						<option>Subject 2</option>
						<option>Subject 3</option>
						<option>Subject 4</option>
						<option>Subject 5</option>
						<option>Subject 6</option>
						<option>Subject 7</option>
						<option>Subject 8</option>
						<option>Subject 9</option>
						<option>Subject 10</option>
					</select>
				</div>
			</div>

			<p className="timing">
				Class Timing: <span>11:00AM to 12PM</span>
			</p>
		</div>
	);

	const PanelSection = () => (
		<div className="panel w-full h-screen flex flex-col items-center">
			<p className="panel-heading font-semibold my-6">Getting Started</p>
			<div className="panel-content">
				<div className="h-12 flex flex-col justify-center mb-2">
					<p className="mb-1">Create a subject</p>
					<hr className="w-full" />
				</div>
				<div className="h-12 flex flex-col justify-center mb-2">
					<p className="mb-1">Create a resource</p>
					<hr className="w-full" />
				</div>
				<div className="h-12 flex flex-col justify-center mb-2">
					<p className="mb-1">Browse the Library</p>
				</div>
			</div>
		</div>
	);

	const displayTool = (action) => {
		switch (action) {
			case 'classroom':
				return <ClassroomPage />;
			case 'video':
				return <TeacherVideo setActivePage={setActivePage} />;
			case 'addvideo':
				return <AddVideoPage setActivePage={setActivePage} />;
			case 'assignment':
				return <TeacherAssignment setActivePage={setActivePage} />;
			case 'addassignment':
				return <AddAssignmentPage setActivePage={setActivePage} />;
			case 'assignmentdetail':
				return <AssignmentDetailPage setActivePage={setActivePage} />;
			case 'note':
				return <TeacherNote setActivePage={setActivePage} />;
			case 'addnote':
				return <AddNotePage setActivePage={setActivePage} />;
			default:
				return '';
		}
	};

	return (
		<div className="flex-center">
			<div className="relative teacherPage-dimension w-full h-screen">
				<TeacherTopbar />
				<div className="relative flex w-full overflow-y">
					<TeacherSidebar activePage={activePage} setActivePage={setActivePage} />
					<div className="w-full flex relative ml-87px ">
						<div className="relative w-9/12 left-container ">
							{activePage === 'assignmentdetail' ? '' : <ClassSection />}
							{activePage === 'classroom' ? <ClassroomPage /> : displayTool(activePage)}
						</div>
						<div className="w-3/12 ">{activePage === 'assignmentdetail' ? '' : <PanelSection />}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
