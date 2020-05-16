import React from 'react';

export const StudentTopbar = () => (
	<div className="navbar z-10 h-32 w-full flex justify-center items-center landscape:px-4 md:px-6 xl:px-8">
		<div className="relative flex w-full flex justify-between items-center">
			<p className="logo mr-2 xl:ml-8 landscape:mr-0">Vidyalaya</p>
			<div className="login-container flex lg:flex-none justify-end mr-16 ">
				<div className="login-info mr-2 flex-center flex-col -mt-1">
					<p className="flex-none">Welcome, Mayur keshav</p>
					<p className="flex-none">Last login: May 11, 2020 3:42PM</p>
				</div>
				<div className="flex-none profile-icon rounded-full border border-red-500 flex-center">
					<p>MK</p>
				</div>
			</div>
		</div>
	</div>
);
