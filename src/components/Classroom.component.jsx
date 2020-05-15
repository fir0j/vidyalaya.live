import React, { Fragment } from 'react';
import { TeacherPage } from './pages/Teacher.page';

export const Classroom = () => {
	const ClassSection = () => (
		<div className="flex items-center top-content w-full">
			<div className="flex flex-none class-container justify-between items-center mr-auto">
				<p className="choose-class">Choose Class</p>
				<div className="classes w-full h-screen flex-center">
					<select className="w-8/12 h-full bg-white outline-none">
						<option>Class 1</option>
						<option>Class 2</option>
						<option>Class 3</option>
						<option>Class 4</option>
						<option>Class 5</option>
						<option>Class 6</option>
						<option>Class 7</option>
						<option defaultValue>Class 8</option>
						<option>Class 9</option>
						<option>Class 10</option>
					</select>
				</div>

				<div className="subjects w-full h-screen flex-center">
					<select className="w-10/12 h-full bg-white outline-none">
						<option>Choose subject</option>
						<option>Subject 1</option>
						<option>Subject 2</option>
						<option>Subject 3</option>
						<option>Subject 4</option>
						<option>Subject 5</option>
						<option>Subject 6</option>
						<option>Subject 7</option>
						<option>Subject 8</option>
						<option>Subject 9</option>
						<option>Subject 10</option>
					</select>
				</div>
			</div>

			<p className="timing">
				Class Timing: <span>11:00AM to 12PM</span>
			</p>
		</div>
	);

	const AssignmentsSection = () => (
		<div className="mt-8 w-full">
			<p className="assignment-text font-bold">Assignment</p>
			<div className="w-full flex justify-between">
				<p className="assignment-subtopic-text w-full">Check student Assignments</p>
				<div className="filter-text w-full h-full">
					<p>Filter Date</p>
				</div>
			</div>

			<div className="assignment-container w-full px-1 mt-8 px-8">
				<div className="assignment-heading-text w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Title</p>
					</div>
					<div className="  flex justify-start w-full">
						<p>Created on</p>
					</div>
					<div className="  flex justify-start w-full">
						<p>Deadline</p>
					</div>
					<div className=" flex justify-start w-full">
						<p>Submitted</p>
					</div>
					<div className=" w-full flex justify-end">
						<p>Actions</p>
					</div>
				</div>
				<hr />

				<div className=" assignment-content w-full h-screen flex justify-start items-center">
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
					<div className=" w-full flex justify-end">
						<li className="flex">
							<p className="mr-2">Details</p>
							<p className="timer-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />

				<div className=" assignment-content w-full h-screen flex justify-start items-center">
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
					<div className="flex justify-end">
						<li className="flex">
							<p className="mr-2">Details</p>
							<p className="delete-icon w-6 h-6" />
						</li>
					</div>
				</div>
			</div>
		</div>
	);

	const VideosSection = () => (
		<div className="mt-8 w-full">
			<p className="assignment-text font-bold">Videos</p>
			<div className="w-full flex justify-between">
				<p className="assignment-subtopic-text w-full">Videos for students</p>
				<div className="filter-text w-full h-full">
					<p>Filter Date</p>
				</div>
			</div>

			<div className="assignment-container w-full px-1 mt-8 px-8">
				<div className="video-content h-screen flex justify-start items-center">
					<div className=" w-full flex justify-start">
						<p>Title</p>
					</div>
					<div className=" w-full flex justify-start">
						<p>Video link</p>
					</div>
					<div className="flex justify-end">
						<p>Actions</p>
					</div>
				</div>
				<hr />

				<div className=" video-content w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Chapter 1- Units & Measurement</p>
					</div>
					<div className=" flex justify-start w-full">
						<p>https://youtube/vidyalaya</p>
					</div>
					<div className=" flex justify-end">
						<li className="flex">
							<p className="mr-2">Details</p>
							<p className="timer-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />

				<div className=" video-content w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Chapter 1- Units & Measurement</p>
					</div>
					<div className=" flex justify-start w-full">
						<p>https://youtube/vidyalaya</p>
					</div>
					<div className="  flex justify-end">
						<li className="flex">
							<p className="mr-2">Details</p>
							<p className="timer-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />

				<div className=" video-content w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Chapter 1- Units & Measurement</p>
					</div>
					<div className=" flex justify-start w-full">
						<p>https://youtube/vidyalaya</p>
					</div>
					<div className="flex justify-end">
						<li className="flex">
							<p className="mr-2">Details</p>
							<p className="timer-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />
			</div>
		</div>
	);

	const NotesSection = () => (
		<div className="mt-8 w-full">
			<p className="assignment-text font-bold">Notes</p>
			<div className="w-full flex justify-between">
				<p className="assignment-subtopic-text w-full">Notes for students</p>
				<div className="filter-text w-full h-full">
					<p>Filter Date</p>
				</div>
			</div>

			<div className="assignment-container w-full px-1 mt-8 mb-8 px-8">
				<div className="video-content h-screen flex justify-start items-center">
					<div className=" w-full flex justify-start">
						<p>Title</p>
					</div>

					<div className="w-full flex justify-end">
						<p>Actions</p>
					</div>
				</div>
				<hr />

				<div className=" video-content w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Chapter 1- Units & Measurement</p>
					</div>

					<div className=" w-full flex justify-end">
						<li className="flex">
							<p className="mr-2">Details</p>
							<p className="timer-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />

				<div className=" video-content w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Chapter 1- Units & Measurement</p>
					</div>

					<div className=" w-full flex justify-end">
						<li className="flex">
							<p className="mr-2">Details</p>
							<p className="timer-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />

				<div className=" video-content w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Chapter 1- Units & Measurement</p>
					</div>

					<div className=" w-full flex justify-end">
						<li className="flex">
							<p className="mr-2">Details</p>
							<p className="timer-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />
			</div>
		</div>
	);

	const PanelSection = () => (
		<div className="panel w-full h-screen flex flex-col items-center">
			<p className="panel-heading font-semibold my-6">Getting Started</p>
			<div className="panel-content">
				<div className="h-12 flex flex-col justify-center mb-2">
					<p className="mb-1">Create a subject</p>
					<hr className="w-full" />
				</div>
				<div className="h-12 flex flex-col justify-center mb-2">
					<p className="mb-1">Create a resource</p>
					<hr className="w-full" />
				</div>
				<div className="h-12 flex flex-col justify-center mb-2">
					<p className="mb-1">Browse the Library</p>
				</div>
			</div>
		</div>
	);

	return (
		<div className="w-full flex relative ml-87px ">
			<div className="relative w-9/12 left-container ">
				<ClassSection />
				<AssignmentsSection />
				<VideosSection />
				<NotesSection />
			</div>
			<div className="w-3/12 ">
				<PanelSection />
			</div>
		</div>
	);
};
