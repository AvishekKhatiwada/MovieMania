import { useState, useEffect } from "react";

const useFetch = (url, page, itemsPerPage = 5) => {

	const [data, setData] = useState([]);

	//Fetching from api
	useEffect(() => {
		const startIndex = (page - 1) * itemsPerPage + 1;
		const endIndex = startIndex + itemsPerPage - 1;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const slicedData = data.Search ? data.Search.slice(startIndex - 1, endIndex) : [];
				// console.log(data);
				setData(slicedData);
			})
			.catch((error) => {
				console.error("Error Fetching Data:", error);
			});
	}, [url, page, itemsPerPage]);

	return { data }
}

export default useFetch;