import React from 'react';

export const AssignmentPage = () => (
	<div className="mt-8 w-full">
		<p className="assignment-topic font-bold">Assignment</p>
		<div className="w-full flex justify-between">
			<p className="assignment-subtopic w-full">Check student Assignments</p>
			<div className="filter-text w-full h-full">
				<p>Filter Date</p>
			</div>
		</div>

		<div className="content-container w-full px-1 mt-8 px-8">
			<div className="content-heading w-full h-screen flex justify-start items-center">
				<div className=" flex justify-start w-full">
					<p>Title</p>
				</div>
				<div className="  flex justify-start w-full">
					<p>Created on</p>
				</div>
				<div className="  flex justify-start w-full">
					<p>Deadline</p>
				</div>
				<div className=" flex w-full justify-start">
					<p>Submitted</p>
				</div>
				<div className="flex justify-end pr-12">
					<p>Actions</p>
				</div>
			</div>
			<hr />

			<div className=" contents w-full h-screen flex justify-start items-center">
				<div className=" flex justify-start w-full">
					<p>Write an Essay</p>
				</div>
				<div className=" flex justify-start w-full">
					<p>May 10, 2020</p>
				</div>
				<div className=" flex justify-start w-full">
					<p>May 10, 2020 1:00PM</p>
				</div>
				<div className=" flex justify-start w-full">
					<p>No</p>
				</div>
				<div className=" flex justify-end">
					<li className="flex">
						<p className="mr-2 detail-button flex-center">
							<span>Details</span>
						</p>
						<p className="timer-icon w-6 h-8" />
					</li>
				</div>
			</div>
			<hr />

			<div className="contents w-full h-screen flex justify-start items-center">
				<div className="flex justify-start w-full">
					<p>Write an Letter</p>
				</div>
				<div className="flex justify-start w-full">
					<p>May 10, 2020</p>
				</div>
				<div className="flex justify-start w-full">
					<p>May 10, 2020 1:00PM</p>
				</div>
				<div className="flex justify-start w-full">
					<p className="checked-container" />
				</div>
				<div className=" flex justify-end">
					<li className="flex">
						<p className="mr-2 detail-button flex-center">
							<span>Details</span>
						</p>
						<p className="delete-icon w-6 h-8" />
					</li>
				</div>
			</div>
		</div>
	</div>
);
