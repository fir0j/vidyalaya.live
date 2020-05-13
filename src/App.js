import React, { Fragment } from 'react';
// import { Homepage } from './components/Homepage.component';
import { Topbar } from './components/Topbar.component';
import { Sidebar } from './components/Sidebar.component';

const App = () => {
	return (
		<Fragment>
			<Topbar />
			<Sidebar />
		</Fragment>
	);
};

export default App;
