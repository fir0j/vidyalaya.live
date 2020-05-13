import React, { Fragment } from 'react';
import { Homepage } from './components/Homepage.component';

const App = () => {
	const Topbar = () => (
		<div className="border w-full bg-brand-blue text-gray-100 h-16 flex  items-center pl-5 text-3xl">
			<p style={{ marginRight: 'auto' }}>Vidyalaya</p>
			<div className="w-1/3 flex justify-around">
				<p className="flex-none">CONTACT</p>
				<p className="flex-none">LOGIN</p>
			</div>
		</div>
	);

	return (
		<Fragment>
			<Homepage />
		</Fragment>
	);
};

export default App;
