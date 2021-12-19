import styled from 'styled-components';
import { device } from '../constants/device'
import Button from '../components/Button';
import React, { useEffect, useState } from "react";
import Viewport from './View'

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: rgba(60, 60, 67, 0.03);
	border-right: solid 1px rgba(0, 0, 0, 0.1);
	height:100vh;
	width: 100%;
	box-sizing: border-box;
	form *{
		margin: 1em 0;
	}
	.fields {
		padding: 2em;
		overflow-x: hidden;
		overflow-y: auto;
	}
	@media ${device.tablet} {
		max-width: 400px;
	}
	.title {
		background-color: rgba(45, 45, 45, 0.97);
		padding: 1em 0;
		text-align: center;
		align-items: center;
		h1 {
			span {
				color: darkgrey;
				:nth-of-type(even) {
					color: grey;
				}
			}
		}
	}
	.submission {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(45, 45, 45, 0.97);
		padding: 1em;
		margin-top: auto;
		button {
			margin: 0 1em;
		}
		@media ${device.tablet} {
			.full {
				display: block;
			}
			.mobile {
				display: none;
			}
		}
	}
	.full {
		display: none;
	}

`;

const Form = styled.input`
	font-size: 1em;
	font-family:'Segoe UI';
	background-color: #4d4d4d;
	border-radius: 0.25em;
	min-height: 40px;
	padding: 0.75em 0.75em;
	display: block;
	width: 100%;
	border: none;
	color: white;
	margin-top: 0.5em;
	box-sizing: border-box;
`;

const Input = styled(Form)`
	max-height: 100px;
`;

const Textarea = styled(Form).attrs({as: 'textarea'})`
	min-width: 100%;
	height: 100px;
	resize: none;
`;


const Sidebar = ({ setView }) => {

	const [document, setDocument] = useState({
		name: "",
		remarks: "",
	})

	const handleInputChange = (event) => {
		setDocument((prevProps) => ({
			...prevProps,
			[event.target.name]: event.target.value
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('http://localhost:3000/api', {
			method: 'POST',
			headers: { "Content-Type": "application/json"},
			event: JSON.stringify(event)
		}).then(() => {
			console.log('New blog added');
			console.log(event);
		})
	}

	
	const setPDF = () => {
		const example = {
			name: "Sean Velasco",
			remarks: "Vaccinated"
		}
		setDocument(example)
	}


	

	return (
		<>
		<Wrapper>
			<div className='title'></div>
			<form onSubmit={handleSubmit} className='fields'>
				<div >
					<label>Name</label>
					<Input type='text' name='name' value={document.name} onChange={handleInputChange}></Input>
				</div>
				<div>
					<label>Remarks</label>
					<Textarea type='text' name='remarks' value={document.remarks} onChange={handleInputChange}></Textarea>
				</div>
				<Button type="submit">Submit</Button>
			</form>
			<div onSubmit={handleSubmit} className='submission'>
				<Button onClick={handleSubmit} className='mobile'>Generate PDF</Button>
				<Button onClick={handleSubmit} className='full'>Preview</Button>
				<Button onClick={handleSubmit} type="submit" className='full' transparent>Save</Button>
				
			</div>
		</Wrapper>
		</>
	)
}

export default Sidebar;