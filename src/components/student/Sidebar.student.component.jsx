import React from 'react';

export const StudentSidebar = ({ studentPage, setStudentPage }) => {
	const notSelected = ' mt-15px h-16 flex-center sidebar-item  cursor-pointer';
	const selected = `${notSelected} + sidebar-item-active`;

	return (
		<div className="border sidebar flex flex-col flex-start px-8">
			<div
				onClick={() => setStudentPage('student-class')}
				className={studentPage === 'student-class' ? `${selected}` : `${notSelected}`}
			>
				<div className="flex-none flex w-full ">
					<p className="flex-none img-school w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">My Class</p>
				</div>
			</div>

			<div className=" w-full h-16 flex-center justify-start sidebar-category">
				<p className=""> MANAGE</p>
			</div>

			<div
				onClick={() => setStudentPage('student-video')}
				className={studentPage === 'student-video' ? `${selected}` : `${notSelected}`}
			>
				<div className="flex-none flex w-full">
					<p className="flex-none img-video w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">Videos</p>
				</div>
			</div>

			<div
				onClick={() => setStudentPage('student-assignment')}
				className={studentPage === 'student-assignment' ? `${selected}` : `${notSelected}`}
			>
				<div className="flex-none flex w-full">
					<p className="flex-none img-assignment w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">Assignments</p>
				</div>
			</div>

			<div
				onClick={() => setStudentPage('student-note')}
				className={studentPage === 'student-note' ? `${selected}` : `${notSelected}`}
			>
				<div className="flex-none flex w-full">
					<p className="flex-none img-note w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">Notes</p>
				</div>
			</div>

			<div className=" w-full h-16 flex-center justify-start sidebar-category">
				<p className=""> OTHERS</p>
			</div>

			<div className="h-16 flex-center sidebar-item cursor-pointer ">
				<div className="flex-none flex w-full">
					<p className="flex-none img-setting w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">Settings</p>
				</div>
			</div>

			<div className="h-16 flex-center sidebar-item cursor-pointer ">
				<div className="flex-none flex w-full">
					<p className="flex-none img-contact w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">Contact us</p>
				</div>
			</div>

			<div className="h-16 flex-center sidebar-item cursor-pointer ">
				<div className="flex-none flex w-full">
					<p className="flex-none img-faq w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">FAQ</p>
				</div>
			</div>
		</div>
	);
};
