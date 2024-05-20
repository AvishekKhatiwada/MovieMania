import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

const Details = () => {
	const [movies, setMovies] = useState();

	const { id } = useParams();

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=61bac264&i=${id}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setMovies(data);
			});
	}, [id]);

	console.log(movies);
	return (
		<div className="All-body-details">
			<Navbar />
			<div className="title-heading p-1 text-center align-middle">
				<p className="mb-0 mt-0">{movies?.Title}</p>
			</div>
			<div className="details p-2 d-flex">
				<div className="w-25">
					{movies?.Poster !=='N/A' ? <img className="movie-poster img-fluid" src={movies?.Poster} /> : <img className="movie-poster img-fluid" src="/default-poster.jpg"/> }
				</div>
				<div className="w-75 d-flex p-5">
					<div className="w-50 text-start p-2">
						<p className="title-heading-below mb-0 mt-0">{movies?.Title}</p>
						<Link to={"https://www.youtube.com/results?search_query=One+Piece+trailer"}>
							<button className="p-1 btn"><img src="/src/assets/trailer-icon.svg" alt="icon" width={15} height={15}/> Trailer</button>
						</Link>
						<p className="mt-2 mb-0 fw-semibold"><b>Overview</b></p>
						<span className='mb-1'>{movies?.Plot}</span>
						<span className="d-block mt-1"><b>Released:</b> {movies?.Released}</span>
						<span className="d-block"><b>Genre:</b> {movies?.Genre}</span>
						<span className="d-block"><b>Casts:</b> {movies?.Actors}</span>
						<span className="d-block"><b>Country:</b> {movies?.Country}</span>
					</div>
					<div className="w-50 text-start p-2">
						<span className="d-block mt-5"><b>Duration:</b> {movies?.Runtime}</span>
						<span className="d-block"><b>Director:</b> {movies?.Director}</span>
						<span className="d-block"><b>Language:</b> {movies?.Language}</span>
						<span className="d-block"><b>Awards:</b> {movies?.Awards}</span>
						<span className="d-block"><b>Ratings</b></span>
						<div className="All-Ratings mb-0 mt-2">
						{movies?.Ratings.map((data, i) => (
							<div key={i} className="Ratings">
								<p className="Rating-source">{data.Source}</p>
								<p className="Rating-value">{data.Value}</p>
							</div>
						))}	
						</div>					
					</div>
				</div>
			</div>
		</div>
	);
};
export default Details;