import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Home = () => {
	const [data, setData] = useState([]);
	const fetch = async () => {
		const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
		setData(res.data);
	};
	useEffect(() => {
		fetch();
	}, []);
	return (
		<>
			<Container>
				<div className="head">
					<h1>All Shows</h1>
				</div>
				<CardContainer>
					{data.map((item) => (
						<Card data={item.show} key={item.show.id} />
					))}
				</CardContainer>
			</Container>
		</>
	);
};

export default Home;
const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	gap: 3rem;
	.head {
		height: 10vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h1 {
		width: 30%;
		border-bottom: 1px solid gray;
		font-weight: 450;
		font-size: 3rem;
		color: gray;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media all and (max-width: 800px) {
		h1 {
			width: 70%;
		}
	}
`;
const CardContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 25%);

	@media all and (max-width: 1244px) {
		grid-template-columns: repeat(3, 33%);
	}
	@media all and (max-width: 970px) {
		grid-template-columns: repeat(2, 50%);
	}
	@media all and (max-width: 800px) {
		grid-template-columns: repeat(1, 100%);
	}
`;
