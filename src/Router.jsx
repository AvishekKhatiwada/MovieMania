import Details from './Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Firstpage from './Firstpage';
import Home from './Home';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Firstpage />} />
				<Route path='/details/:id' element={<Details />} />
				<Route path='/home' element={<Home />} />
				{/* <Route path='/search?query=:query' element={<Details />}/> */}
				<Route path="/search"element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
