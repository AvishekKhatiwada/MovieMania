import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import useFetch from "./useFetch";

const Home = () => {

	const [currentPage, setCurrentPage] = useState(1);
	const [isPending, setIsPending] = useState(true); 
	const itemsPerPage = 5;
	const location = useLocation();
	const { query } = queryString.parse(location.search);
		const { data: movies } = useFetch(
		`http://www.omdbapi.com/?apikey=61bac264&s=${query}`,
		currentPage
		)

	// useEffect(() => {
	// 	if( movies && movies.length > 0){
	// 		setIsPending(false);
	// 	}
	// 	console.log(query);
	// }, [query]);

	//Pagination Next Page
	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
		console.log(currentPage);
	};

	//Pagination previous page
	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
		console.log(currentPage);
	};
	return (
		<>
			<div className="all-body">
				<Navbar />
				{/* {isPending && <div className="text-white "> Loading.....</div>} */}
				{movies ? (<MovieList movies={movies} />) : ( <></> )}
			</div>
			{movies ? (
				<nav aria-label='Page navigation'>
					<ul className='pagination'>
						{currentPage > 1 ? (
							<li className='page-item'>
								<button onClick={handlePrevPage} className='page-link' href='#'>
									Previous
								</button>
							</li>
						) : (
							<></>
						)}
						<li className='page-item'>
							<button disabled className='page-link' href='#'>
								{currentPage}
							</button>
						</li>
						{currentPage < 2 ? (
							<li className='page-item'>
								<button onClick={handleNextPage} className='page-link' href='#'>
									Next
								</button>
							</li>
						) : (
							<></>
						)}
					</ul>
				</nav>
			) : (
				<></>
			)}
		</>
	);
	
	// 61bac264

	//Fetching from api
	// const handleFetch = (page) => {
	// 	const startIndex = (currentPage - 1) * itemsPerPage + 1;
	// 	const endIndex = startIndex + itemsPerPage - 1;

	// 	fetch(`http://www.omdbapi.com/?apikey=61bac264&s=marvel&page=${page}`)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			const slicedData = data.Search ? data.Search.slice(startIndex - 1, endIndex) : [];
	// 			console.log(data);
	// 			setMovies(slicedData);
	// 		});
	// };

}

export default Home;