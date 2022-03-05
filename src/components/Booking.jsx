import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import styled from "styled-components";
const Booking = () => {
	const history = useHistory();
	const alert = useAlert();
	const [info, setInfo] = useState([]);
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [Mname, setMname] = useState("");
	const [num, setNum] = useState(0);
	const params = useParams();

	const data = async () => {
		const data = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
		setInfo(data?.data);
		setMname(info.name);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (name == "" || age == "" || num == "") {
			return alert.error("Please fill all the details");
		}
		if (age < 18) {
			if (num < 1) {
				alert.error("Ticket Count must be greater than 0");
			}
			return alert.error("Age must be greater than 18 ");
		} else {
			localStorage.setItem("name", name);
			localStorage.setItem("age", age);
			localStorage.setItem("Movie Name", Mname);
			localStorage.setItem("Number of Tickets", num);
			history.push("/success");
		}
	};

	useEffect(() => {
		data();
	}, []);
	return (
		<>
			<Container>
				<form>
					<h2>User details</h2>
					<div className="Box">
						<div className="name">Your Name :</div>
						<input type="text" onChange={(e) => setName(e.target.value)} />
					</div>
					<div className="Box">
						<div className="age">Your age :</div>
						<input type="number" onChange={(e) => setAge(e.target.value)} />
					</div>
					<div className="Box">
						<div className="title">Movie Name</div>
						<input type="text" value={info.name} />
					</div>
					<div className="Box">
						<div className="title">Number of Tickets</div>
						<input type="number" onChange={(e) => setNum(e.target.value)} />
					</div>
					<button onClick={submitHandler}>Submit</button>
				</form>
			</Container>
		</>
	);
};
export default Booking;
const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.1);
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	form {
		background-color: white;
		border-radius: 4px;
		height: 70%;
		width: 30%;
		display: flex;
		align-items: center;
		flex-direction: column;
		h2 {
			height: 20%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2rem;
			font-weight: 400;
		}
		.Box {
			width: 80%;
			margin-bottom: 2rem;
			input {
				width: 100%;
				height: 2rem;
				border: none;
				border-bottom: 1px solid gray;
				outline: none;
			}
		}
	}
	button {
		width: 15vw;
		height: 2rem;
		border: none;
		outline: none;
		background-color: transparent;
		background-color: rgba(0, 0, 0, 0.1);
		cursor: pointer;
		border-radius: 4px;
		transition: all 0.2s;
		&:hover {
			background-color: rgba(0, 0, 0, 0.3);
		}
	}
`;
