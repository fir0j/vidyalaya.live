import React, { Fragment } from 'react';

export const NotePage = () => (
	<div className="mt-8 w-full">
		<p className="assignment-topic font-bold">Notes</p>
		<div className="w-full flex justify-start">
			<p className="assignment-subtopic w-full">Notes for students</p>
		</div>

		<div className="content-container w-full px-1 my-8 px-8">
			<div className="content-heading w-full h-screen flex justify-start items-center">
				<div className=" flex justify-start w-full">
					<p>Title</p>
				</div>

				<div className="flex justify-end pr-12">
					<p>Actions</p>
				</div>
			</div>
			<hr />

			{Array.from([ 1, 2, 3, 4, 5, 6, 7, 8 ], (item) => (
				<Fragment key={item}>
					<div className=" contents w-full h-screen flex justify-start items-center">
						<div className=" flex justify-start w-full">
							<p>Chapter 1- Units & Measurement</p>
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
				</Fragment>
			))}
		</div>
	</div>
);
