import React, { useState, Fragment } from 'react';
import { TeacherPage } from './teacher/pages/Teacher.page';
import { StudentPage } from './student/pages/Student.page';

export const Homepage = () => {
	const [ gateway, setGateway ] = useState('logout');

	const gatewayController = (action) => {
		switch (action) {
			case 'teacher':
				return <TeacherPage />;
			case 'student':
				return <StudentPage />;

			default:
				return '';
		}
	};

	return (
		<Fragment>
			{gateway === 'logout' ? (
				<Fragment>
					<div className="flex-center">
						<div className="homepage-bg relative w-full h-screen flex justify-center items-center ">
							<div className="absolute top-0 mt-16 w-full flex-center flex-col">
								<div className="vidyalaya-bg mb-16 ">
									<p>Vidyalaya</p>
								</div>

								<div
									onClick={() => setGateway('login')}
									className="teacher-bg h-16 w-7/12 sm:h-20 lg:h-28 xl:h-32 mb-16 flex-center cursor-pointer"
								>
									<p className="teacher">Login</p>
								</div>

								<div
									onClick={() => setGateway('teacher')}
									className="teacher-bg h-16 w-7/12 sm:h-20 lg:h-28 xl:h-32 mb-16 flex-center cursor-pointer"
								>
									<p className="teacher">Teacher</p>
								</div>
								<div
									onClick={() => setGateway('student')}
									className="teacher-bg h-16 w-7/12 sm:h-20 lg:h-28 xl:h-32 flex-center cursor-pointer"
								>
									<p>Student</p>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			) : (
				gatewayController(gateway)
			)}
		</Fragment>
	);
};
