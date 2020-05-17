import React from 'react';

export const TeacherSidebar = ({ activePage, setActivePage }) => {
	const notSelected = ' mt-15px h-16 flex-center sidebar-item  cursor-pointer';
	const selected = `${notSelected} + sidebar-item-active`;

	return (
		<div className="border sidebar flex flex-col flex-start px-8">
			<div
				onClick={() => setActivePage('classroom')}
				className={activePage === 'classroom' ? `${selected}` : `${notSelected}`}
			>
				<div className="flex-none flex w-full ">
					<p className="flex-none img-school w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">My Classroom</p>
				</div>
			</div>

			<div className=" w-full h-16 flex-center justify-start sidebar-category">
				<p className=""> MANAGE</p>
			</div>

			<div
				onClick={() => setActivePage('video')}
				className={activePage === 'video' ? `${selected}` : ` ${notSelected}`}
			>
				<div className="flex-none flex w-full">
					<p className="flex-none img-video w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">Videos</p>
				</div>
			</div>

			<div
				onClick={() => setActivePage('assignment')}
				className={activePage === 'assignment' ? `${selected}` : ` ${notSelected}`}
			>
				<div className="flex-none flex w-full">
					<p className="flex-none img-assignment w-6 h-6 flex" />
					<p className="flex-none sidebar-text ml-5px">Assignments</p>
				</div>
			</div>

			<div
				onClick={() => setActivePage('note')}
				className={activePage === 'note' ? `${selected}` : ` ${notSelected}`}
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
