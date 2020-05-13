import React, { Fragment } from 'react';
import { Homepage } from './components/Homepage.component';
import { Topbar } from './components/Topbar.component';

const App = () => {
	const Sidebar = () => <div>Sidebar</div>;
	return (
		<Fragment>
			<Sidebar />
		</Fragment>
	);
};

export default App;
