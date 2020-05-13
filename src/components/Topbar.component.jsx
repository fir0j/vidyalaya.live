import React from 'react';

export const Topbar = () => (
	<div className="flex-center fixed w-full">
		<div className="navbar h-32 w-full flex justify-center items-center landscape:px-4 md:px-6 xl:px-8">
			<div className="relative flex w-full flex justify-between items-center">
				<p className="logo mr-2 xl:ml-8 landscape:mr-0">Vidyalaya</p>
				<div className="login-container flex lg:flex-none justify-around ">
					<p className="flex-none contact">CONTACT</p>
					<p className="flex-none login">LOGIN</p>
				</div>
			</div>
		</div>
	</div>
);
