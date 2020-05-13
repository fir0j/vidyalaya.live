import React from 'react';

export const Sidebar = () => (
	<div className="border sidebar flex flex-col flex-start px-8">
		<div className="h-16 flex-center sidebar-item mt-15px cursor-pointer">
			<div className="flex-none flex w-full ">
				<p className="flex-none img-school w-6 h-6 flex" />
				<p className="flex-none sidebar-text ml-5px">My Classroom</p>
			</div>
		</div>

		<div className=" w-full h-16 flex-center justify-start sidebar-category">
			<p className=""> MANAGE</p>
		</div>

		<div className="h-16 flex-center sidebar-item cursor-pointer">
			<div className="flex-none flex w-full">
				<p className="flex-none img-video w-6 h-6 flex" />
				<p className="flex-none sidebar-text ml-5px">Videos</p>
			</div>
		</div>

		<div className="h-16 flex-center sidebar-item cursor-pointer ">
			<div className="flex-none flex w-full">
				<p className="flex-none img-assignment w-6 h-6 flex" />
				<p className="flex-none sidebar-text ml-5px">Assignments</p>
			</div>
		</div>

		<div className="h-16 flex-center sidebar-item cursor-pointer ">
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
