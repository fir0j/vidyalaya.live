import React from 'react';

export const Homepage = () => (
	<div className="flex-center">
		<div className="homepage-bg relative w-full h-screen flex justify-center items-center ">
			<div className="absolute top-0 mt-16 w-full flex-center flex-col">
				<div className="vidyalaya-bg mb-16 ">
					<p>Vidyalaya</p>
				</div>
				<div className="teacher-bg h-16 w-7/12 sm:h-20 lg:h-28 xl:h-32 mb-16 flex-center cursor-pointer">
					<p className="teacher">Teacher</p>
				</div>
				<div className="student-bg h-16 w-7/12 sm:h-20 lg:h-28 xl:h-32 flex-center cursor-pointer">
					<p>Student</p>
				</div>
			</div>
		</div>
	</div>
);
