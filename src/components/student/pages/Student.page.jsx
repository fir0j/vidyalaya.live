import React, { useState } from 'react';
import { StudentTopbar } from '../Topbar.student.component';
import { StudentSidebar } from '../Sidebar.student.component';
import { StudentClass } from './Class.student.page';
import { StudentVideo } from './Video.student.page';
import { StudentAssignment } from './Assignment.student.page';
import { StudentNote } from './Note.student.page';

export const StudentPage = () => {
	const [ studentPage, setStudentPage ] = useState('student-video');

	const StudentPanel = () => (
		<div>
			<p className="student-panel-heading w-full h-screen flex flex-col items-center pt-4">
				Your profile subjects
			</p>
			<div className="panel w-full h-screen flex flex-col items-center py-8 mt-16	">
				<div className="panel-content">
					<div className=" h-8 flex flex-col justify-center">
						<p className="mb-1">» Civics</p>
					</div>
					<div className="h-8 flex flex-col justify-center">
						<p className="mb-1">» English</p>
					</div>
					<div className="h-8 flex flex-col justify-center">
						<p className="mb-1">» Geography</p>
					</div>
					<div className="h-8 flex flex-col justify-center">
						<p className="mb-1">» History</p>
					</div>
					<div className="h-8 flex flex-col justify-center">
						<p className="mb-1">» Learning Technology</p>
					</div>
					<div className="h-8 flex flex-col justify-center">
						<p className="mb-1">» Mathematics</p>
					</div>
					<div className="h-8 flex flex-col justify-center">
						<p className="mb-1">» Geography</p>
					</div>
				</div>
			</div>
		</div>
	);

	const displayStudentPage = (action) => {
		switch (action) {
			case 'student-class':
				return <StudentClass />;
			case 'student-video':
				return <StudentVideo />;
			case 'student-assignment':
				return <StudentAssignment />;
			case 'student-note':
				return <StudentNote />;
			default:
				return '';
		}
	};

	return (
		<div className="flex-center">
			<div className="relative teacherPage-dimension w-full h-screen">
				<StudentTopbar />
				<div className="relative flex w-full overflow-y">
					<StudentSidebar setStudentPage={setStudentPage} />
					<div className="w-full flex relative ml-87px ">
						<div className="relative w-9/12 left-container ">
							{/* {activePage === 'assignmentdetail' ? '' : <ClassSection />} */}
							{studentPage === 'classroom' ? <StudentAssignment /> : displayStudentPage(studentPage)}
						</div>
						<div className="w-3/12 ">{studentPage === 'assignmentdetail' ? '' : <StudentPanel />}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
