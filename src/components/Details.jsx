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
	height: 100%;

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
	@media all and (max-width: 800px) {
		flex-direction: column;
		.image {
			margin-top: 2rem;
			width: 100%;
		}
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

	@media all and (max-width: 800px) {
		width: 100%;
		padding-left: 2rem;
		.title {
			font-size: 3rem;
		}
		button {
			width: 80%;
		}
	}
	@media all and (max-width: 1090px) {
		.title {
			font-size: 5rem;
		}
	}
	@media all and (max-width: 910px) {
		.title {
			font-size: 4rem;
		}
	}
`;
const Second = styled.div`
	padding: 0 5rem;
	margin-bottom: 5rem;
	height: 100%;
	font-size: 1.2rem;
	word-spacing: 1.4px;
	letter-spacing: 1.4px;
	h1 {
		font-size: 4rem;
		font-weight: 400;
	}

	@media all and (max-width: 800px) {
		margin-top: 2rem;
		margin-bottom: 2rem;
		font-size: 1.1rem;
		padding: 0 2rem;
		h1 {
			font-size: 2rem;
			font-weight: 400;
		}
	}
	@media all and (max-width: 900px) and (min-width: 800px) {
		height: 60vh;
	}
`;
