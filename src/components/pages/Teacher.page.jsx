import React, { Fragment } from 'react';

import { Topbar } from '../Topbar.component';
import { Sidebar } from '../Sidebar.component';
import { Classroom } from '../Classroom.component';

export const TeacherPage = () => {
	return (
		<div className="flex-center">
			<div className="relative teacherPage-dimension w-full h-screen">
				<Topbar />
				<div className="relative flex w-full overflow-y">
					<Sidebar />
					<Classroom />
				</div>
			</div>
		</div>
	);
};
