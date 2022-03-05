import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Card = ({ data }) => {
	return (
		<>
			<Container>
				<img src={data.image.original} alt="" />
				<div className="name">{data.name}</div>
				<div className="lang">Language : {data.language}</div>
				<NavLink to={`/details/${data.id}`}>
					<button>Details</button>
				</NavLink>
			</Container>
		</>
	);
};

export default Card;
const Container = styled.div`
	width: 80%;
	background-color: white;
	justify-self: center;
	box-shadow: 0.2pc 0.2pc 0.4pc gray;
	border-radius: 4px;
	height: 80%;
	transition: all 0.5s;
	&:hover {
		box-shadow: 0.5pc 0.5pc 0.5pc gray;
		transform: scale(1.04);
	}

	img {
		width: 100%;
		border-top-radius: 4px;
		height: 65%;
	}
	.name {
		width: 100%;
		display: flex;
		justify-content: center;
		align-itmes: center;
		font-weight: 400;
		font-size: 2rem;
	}
	.lang {
		padding: 1rem 1rem;
	}
	button {
		width: 80%;
		align-self: center;
		height: 2rem;
		background-color: transparent;
		border: none;
		outline: none;
		background-color: rgba(46, 204, 113, 0.6);
		color: white;
		margin-left: 2rem;
		margin-top: 1rem;
		cursor: pointer;
		transition: all 0.7s;
		&:hover {
			background-color: rgba(46, 204, 113);
		}
	}

	@media all and (max-width: 800px) {
		height: 90%;
		align-self: center;
		justify-self: center;
	}
`;
