import React, { Fragment } from 'react';

export const StudentVideo = () => (
	<div className="mt-8 w-full">
		<p className="assignment-topic font-bold">Videos</p>
		<div className="w-full flex justify-start">
			<p className="assignment-subtopic w-full">Explore videos shared by teacher</p>
		</div>

		<div className="video-container w-full flex justify-between">
			<div className="thumbnail flex-center ">
				<p className="play-icon w-8 h-8" />
			</div>
			<div className="flex flex-col justify-between w-full mr-1">
				<div className="flex justify-between">
					<p className="video-title  w-full" />
					<div className="edit-button flex items-center">
						<p className="edit-title flex-center">Edit</p>
						<div className="half-edit-button flex-center pt-2">
							<p className="arrow-down-icon-navy w-8 h-8" />
						</div>
					</div>
				</div>
				<div className="w-full border video-disc-upper">
					<p />
				</div>
				<div className="w-full  border video-disc-lower">
					<p />
				</div>
			</div>
		</div>
		<hr className="video-line" />

		<div className="video-container w-full flex justify-between">
			<div className="thumbnail flex-center ">
				<p className="play-icon w-8 h-8" />
			</div>
			<div className="flex flex-col justify-between w-full mr-1">
				<div className="flex justify-between">
					<p className="video-title  w-full" />
					<div className="edit-button flex items-center">
						<p className="edit-title flex-center">Edit</p>
						<div className="half-edit-button flex-center pt-2">
							<p className="arrow-down-icon-navy w-8 h-8" />
						</div>
					</div>
				</div>
				<div className="w-full border video-disc-upper">
					<p />
				</div>
				<div className="w-full  border video-disc-lower">
					<p />
				</div>
			</div>
		</div>
		<hr className="video-line" />

		<div className="video-container w-full flex justify-between">
			<div className="thumbnail flex-center ">
				<p className="play-icon w-8 h-8" />
			</div>
			<div className="flex flex-col justify-between w-full mr-1">
				<div className="flex justify-between">
					<p className="video-title  w-full" />
					<div className="edit-button flex items-center">
						<p className="edit-title flex-center">Edit</p>
						<div className="half-edit-button flex-center pt-2">
							<p className="arrow-down-icon-navy w-8 h-8" />
						</div>
					</div>
				</div>
				<div className="w-full border video-disc-upper">
					<p />
				</div>
				<div className="w-full  border video-disc-lower">
					<p />
				</div>
			</div>
		</div>
		<hr className="video-line" />
	</div>
);
