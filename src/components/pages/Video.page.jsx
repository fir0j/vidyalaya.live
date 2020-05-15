import React, { Fragment } from 'react';

export const VideoPage = ({ setActivePage }) => {
	return (
		<div className="mt-8 w-full">
			<p className="assignment-topic font-bold">Videos</p>
			<div className="w-full flex justify-between">
				<p className="assignment-subtopic w-full">Videos for students</p>

				<div className="flex">
					<div className="filter flex-center">
						<p>Filter Date</p>
						<p className="arrow-down-icon w-8 h-6" />
					</div>
					<div
						onClick={() => setActivePage('addvideo')}
						className="addVideo flex-center justify-around cursor-pointer"
					>
						<p className="plus-icon w-4 h-4" />
						<p>Add Videos</p>
					</div>
				</div>
			</div>

			<div className="content-container w-full px-1 mt-8 px-8">
				<div className="content-heading w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Title</p>
					</div>
					<div className="  flex justify-start w-full">
						<p>Video link</p>
					</div>

					<div className="flex justify-end pr-12">
						<p>Actions</p>
					</div>
				</div>
				<hr />

				{Array.from([ 1, 2, 3, 4, 5, 6, 7, 8 ], (item) => (
					<Fragment key={item}>
						<div className="contents w-full h-screen flex justify-start items-center">
							<div className=" flex justify-start w-full">
								<p>Chapter 1- Units & Measurement</p>
							</div>
							<div className=" flex justify-start w-full">
								<p>https://youtube/vidyalaya</p>
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
};
