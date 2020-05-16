import React from 'react';

export const AddNotePage = ({ setActivePage }) => (
	<div onClick={() => setActivePage('note')} className="z-10 fixed flex-center popup-container">
		<div className="addVideoPopup">
			<div className="flex items-center justify-between mb-73px">
				<div className="addvideo-popup-heading">Add Note</div>
				<input
					onClick={() => setActivePage('note')}
					type="button"
					value="X"
					className="close-button w-12 h-12 border rounded-full outline-none focus:shadow-outline cursor-pointer"
				/>
			</div>
			<div className="mb-73px">
				<p className="video-title">Video Title</p>
				<input className="video-title-box pl-2" type="text" placeholder="Chapter 1- Units & Measurement" />
			</div>
			<div className="mb-73px">
				<p className="video-tile">Description</p>
				<textarea className="description-box pl-2" type="text" placeholder="Write some Description..." />
			</div>
			<div className="mb-73px">
				<p className="video-title">Insert link</p>
				<input className="video-title-box pl-2" type="text" placeholder="Enter youtube URL" />
			</div>

			<input
				type="button"
				value="Submit"
				className="video-submit outline-none focus:shadow-outline cursor-pointer"
			/>
		</div>
	</div>
);
