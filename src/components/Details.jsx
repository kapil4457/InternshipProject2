import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
	const [info, setInfo] = useState([]);
	const params = useParams();

	const data = async () => {
		const data = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
		setInfo(data?.data);
	};
	useEffect(() => {
		data();
	}, []);
	return (
		<>
			<Container>
				<First>
					<div className="image">
						<img src={info.image?.original} alt="" />
					</div>
					<Data>
						<div className="title">{info.name}</div>
						<div className="lang">Languages : {info.language}</div>
						<div className="lang">Premiered On : {info.premiered}</div>
						<div className="len">Length : {info.runtime} min</div>
						<div className="len">
							Rating : {!info?.rating?.average ? 0 : info.rating?.average} ⭐
						</div>
						<div className="len">Official Website : {info?.network?.name} </div>
						<div className="book">
							<NavLink to={`/booking/${params.id}`}>
								<button>Book Tickets</button>
							</NavLink>
						</div>
						<div className="more">
							<a href={info.url}>
								<button>Learn More</button>
							</a>
						</div>
					</Data>
				</First>
				<Second>
					<div className="summary">
						<h1>Summary :</h1> {info.summary}
					</div>
				</Second>
			</Container>
		</>
	);
};

export default Details;
const Container = styled.div`
	height: 100%;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.06);
	display: flex;
	flex-direction: column;
`;
const First = styled.div`
	display: flex;
	width: 100%;
	height: 90vh;
	.image {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}
	img {
		width: 70%;
		border-radius: 4px;
		box-shadow: 0.2pc 0.2pc 0.3pc gray;
		height: 80%;
	}
`;
const Data = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 5rem;
	align-items: left;

	.title {
		font-size: 6rem;
	}
	.lang,
	.len,
	.genre {
		font-size: 1.2rem;
	}
	button {
		width: 15vw;
		height: 5vh;
		background-color: transparent;
		border: none;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		border-radius: 4px;
		cursor: pointer;
		outline: none;
		transition: all 0.5s;
		&:hover {
			background-color: rgba(0, 0, 0, 0.8);
		}
	}
`;
const Second = styled.div`
	padding: 0 5rem;
	height: 30vh;
	font-size: 1.2rem;
	word-spacing: 1.4px;
	letter-spacing: 1.4px;
	h1 {
		font-size: 4rem;
		font-weight: 400;
	}
`;
