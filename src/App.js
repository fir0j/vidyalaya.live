import React, { Fragment, useState } from 'react';
import { Homepage } from './components/pages/Home.page';
import { TeacherPage } from './components/pages/Teacher.page';

const App = () => {
	const [ currentPage, setCurrentPage ] = useState('teacherpage');

	return (
		<Fragment>
			{currentPage !== 'teacherpage' ? <TeacherPage /> : <Homepage setCurrentPage={setCurrentPage} />}
		</Fragment>
	);
};

export default App;
