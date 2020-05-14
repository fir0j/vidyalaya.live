import React, { Fragment, useState } from 'react';
import { Homepage } from './components/pages/Home.page';
import { TeacherPage } from './components/pages/Teacher.page';
import { Classroom } from './components/Classroom.component';

const App = () => {
	const [ currentPage, setCurrentPage ] = useState('homepage');

	return (
		<Fragment>
			{currentPage === 'homepage' ? <Homepage setCurrentPage={setCurrentPage} /> : <TeacherPage />}
		</Fragment>
	);
};

export default App;
