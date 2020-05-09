import React from 'react';

const App = () => {
	return (
		<div className="relative h-screen flex justify-center text-dark-700 text-center">
			<div className=" absolute top10 border-green-500 w-10/12 max-w-md border-green-500">
				<div className=" mb-20 flex items-center justify-center ">
					<p className="text-5xl landscape:text-6xl font-medium">Vidyalaya</p>
				</div>
				<div className="border border-gray-800 text-xl font-medium h-28 mb-20 flex-center cursor-pointer">
					<p>Teacher</p>
				</div>
				<div className="border border-gray-800 text-xl font-medium h-28 mb-2 flex-center cursor-pointer">
					<p>Student</p>
				</div>
			</div>
		</div>
	);
};

export default App;
