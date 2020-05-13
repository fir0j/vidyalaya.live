import React, { Fragment } from 'react';
import { TeacherPage } from './pages/Teacher.page';

export const Classroom = () => (
	<div className="border-green-500 absolute classroom-bg h-screen w-full">
		<TeacherPage />
		<div className="border content-area relative mt-15px">
			<div className="flex items-center">
				<div className="flex flex-none class-container justify-between items-center mr-auto">
					<p className="choose-class">Choose Class</p>
					<div className="class-drowdown-text">
						<select className="classes w-full h-screen ">
							<option>Class 1</option>
							<option>Class 2</option>
							<option>Class 3</option>
							<option>Class 4</option>
							<option>Class 5</option>
							<option>Class 6</option>
							<option>Class 7</option>
							<option selected>Class 8</option>
							<option>Class 9</option>
							<option>Class 10</option>
						</select>
					</div>
					<select className="classes w-full h-screen">
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

				<p>
					Class Timing: <span>11:00AM to 12PM</span>
				</p>
			</div>
			{/* <div className="mt-8">Assignment</div> */}
		</div>
	</div>
);
