import Details from './Details';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Firstpage from './Firstpage';
import Home from './Home';

const Router = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<Firstpage />} />
				<Route path='/details/:id' element={<Details />} />
				<Route path='/home' element={<Home />} />
				<Route path="/search"element={<Home />} />
			</Routes>
		</HashRouter>
	);
};

export default Router;
