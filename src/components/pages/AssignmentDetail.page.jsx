import React, { Fragment } from 'react';

export const AssignmentDetailPage = ({ setActivePage }) => (
	<div className="mt-8 w-full">
		<div onClick={() => setActivePage('assignment')} className="flex items-center cursor-pointer">
			<p className="home-icon w-8 h-6 mr-2" />
			<p className="go-back">Go back</p>
		</div>
		<p className=" assignment-detail-heading font-semibold">Assignment Details</p>
		<div className="w-full flex justify-between">
			<p className="assignment-detail-subheading">Upload your assign before deadline</p>
			<div className="flex">
				<p className="assignment-detail-subheading mr-2">Due Date:</p>
				<p className="explicit-date">12/06/2020</p>
			</div>
		</div>

		<div className="assignment-question-container w-full px-1 px-8">
			<div className="assignment-question">Write an essay on covid-19 in English. ( Max 1000 words)</div>
			<div>
				<p className="instruction-text">Instructions</p>
				<p className="instruction-content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum
				</p>
			</div>
			<div className="flex attachment">
				<p className="attach-icon w-6 h-6 mr-3" />
				<p className="attach-text">Sample for writing essay.pdf</p>
			</div>
			<div className="flex reference-link">
				<p className="link-icon w-6 h-6 mr-3" />
				<p className="link-text">visit this link for more reference</p>
			</div>
		</div>

		<div className="submission-container">
			<div className="w-full flex justify-between">
				<div>
					<p className="submission-heading font-semibold w-full">Track Assignment Submission</p>
					<div className="flex">
						<p className="assignment-detail-subheading mr-2">Due Date:</p>
						<p className="explicit-date">12/06/2020</p>
					</div>
				</div>
				<div className="flex">
					<div
						onClick={() => setActivePage('addassignment')}
						className="addVideo flex-center justify-around cursor-pointer"
					>
						<p>End Submission</p>
					</div>
				</div>
			</div>

			<div className="content-container w-full px-1 mt-8 px-8">
				<div className="content-heading w-full h-screen flex justify-start items-center">
					<div className=" flex justify-start w-full">
						<p>Student</p>
					</div>
					<div className="  flex justify-start w-full">
						<p>Roll</p>
					</div>
					<div className="  flex justify-start w-full">
						<p>Submission on</p>
					</div>
					<div className=" flex w-full justify-start">
						<p>Status</p>
					</div>
					<div className="flex justify-end pr-12">
						<p>Actions</p>
					</div>
				</div>
				<hr />

				<div className="contents w-full h-screen flex justify-start items-center">
					<div className="flex justify-start w-full">
						<p>Ravi Verma</p>
					</div>
					<div className="flex justify-start w-full">
						<p>121233</p>
					</div>
					<div className="flex justify-start w-full">
						<p>July 04, 2019 1:00PM</p>
					</div>
					<div className="flex justify-start w-full">
						<p className="checked-status">Checked</p>
					</div>
					<div className=" flex justify-end">
						<li className="flex">
							<p
								onClick={() => setActivePage('view')}
								className="mr-2 detail-button flex-center cursor-pointer"
							>
								<span>View</span>
							</p>
							<p className="comment-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />

				<div className="contents w-full h-screen flex justify-start items-center">
					<div className="flex justify-start w-full">
						<p>Ravi Verma</p>
					</div>
					<div className="flex justify-start w-full">
						<p>121233</p>
					</div>
					<div className="flex justify-start w-full">
						<p>July 04, 2019 1:00PM</p>
					</div>
					<div className="flex justify-start w-full">
						<p className="checked-status">Checked</p>
					</div>
					<div className=" flex justify-end">
						<li className="flex">
							<p
								onClick={() => setActivePage('view')}
								className="mr-2 detail-button flex-center cursor-pointer"
							>
								<span>View</span>
							</p>
							<p className="comment-icon w-6 h-8" />
						</li>
					</div>
				</div>
				<hr />

				{Array.from([ 1, 2, 3, 4, 5, 6, 7, 8 ], (item) => (
					<Fragment key={item}>
						<div className="contents w-full h-screen flex justify-start items-center">
							<div className="flex justify-start w-full">
								<p>Ravi Verma</p>
							</div>
							<div className="flex justify-start w-full">
								<p>121233</p>
							</div>
							<div className="flex justify-start w-full">
								<p>July 04, 2019 1:00PM</p>
							</div>
							<div className="flex justify-start w-full">
								<p>Not Checked</p>
							</div>
							<div className=" flex justify-end">
								<li className="flex">
									<p
										onClick={() => setActivePage('view')}
										className="mr-2 detail-button flex-center cursor-pointer"
									>
										<span>View</span>
									</p>
									<p className="comment-icon w-6 h-8" />
								</li>
							</div>
						</div>
						<hr />
					</Fragment>
				))}
			</div>
		</div>
	</div>
);
