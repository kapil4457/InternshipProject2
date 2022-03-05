import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Success = () => {
	return (
		<>
			<Container>
				✔️
				<div className="message">Success</div>
				<NavLink to="/">
					<button>Home</button>
				</NavLink>
			</Container>
		</>
	);
};

export default Success;
const Container = styled.div`
	display: flex;
	background-color: rgba(0, 0, 0, 0.2);
	height: 100vh;
	flex-direction: column;
	font-size: 9rem;
	justify-content: center;
	align-items: center;

	.message {
		font-size: 2rem;
	}
	button {
		width: 15vw;
		height: 3rem;
		border: none;
		outline: none;
		background-color: rgba(0, 0, 0, 0.3);
		color: white;
		cursor: pointer;
		transition: all 0.5s;
		border-radius: 4px;
		&:hover {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}
`;
