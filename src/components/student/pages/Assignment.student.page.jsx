import React, { Fragment } from 'react';

export const StudentAssignment = () => (
	<div className="mt-8 w-full">
		<p className="assignment-topic font-bold">Assignments</p>
		<div className="w-full flex justify-start">
			<p className="assignment-subtopic w-full">All your assignments are listed here</p>
		</div>

		<div className="content-container w-full mt-8 pb-8  px-8">
			<div className="content-heading w-full h-screen flex justify-start items-center">
				<div className=" flex justify-start w-full mr-1">
					<p>Title</p>
				</div>
				<div className="  flex justify-start w-full mr-1">
					<p>Created on</p>
				</div>
				<div className="  flex justify-start w-full mr-1">
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

			<div className="contents w-full h-screen flex justify-start items-center">
				<div className="flex justify-start w-full mr-1">
					<p className="border w-full h-12" />
				</div>
				<div className="flex justify-start w-full mr-1">
					<p className="border w-full h-12" />
				</div>
				<div className="flex justify-start w-full mr-1">
					<p className="border w-full h-12" />
				</div>
				<div className="flex justify-start w-full">
					<p>No</p>
				</div>
				<div className=" flex justify-end">
					<li className="flex">
						<p className="mr-2 detail-button flex-center cursor-pointer">
							<span>Details</span>
						</p>
						<p className="delete-icon w-6 h-8" />
					</li>
				</div>
			</div>
			<hr />

			{Array.from([ 1, 2, 3, 4, 5, 6, 7, 8 ], (item) => (
				<Fragment key={item}>
					<div className="contents w-full h-screen flex justify-start items-center">
						<div className="flex justify-start w-full mr-1">
							<p className="border w-full h-12" />
						</div>
						<div className="flex justify-start w-full mr-1">
							<p className="border w-full h-12" />
						</div>
						<div className="flex justify-start w-full mr-1">
							<p className="border w-full h-12" />
						</div>
						<div className="flex justify-start w-full">
							<p className="checked-container" />
						</div>
						<div className=" flex justify-end">
							<li className="flex">
								<p className="mr-2 detail-button flex-center cursor-pointer">
									<span>Details</span>
								</p>
								<p className="delete-icon w-6 h-8" />
							</li>
						</div>
					</div>
					<hr />
				</Fragment>
			))}
		</div>
	</div>
);
