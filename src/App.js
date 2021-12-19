import styled from 'styled-components';
import { device } from './constants/device'
import Button from './components/Button';
import React, { useEffect, useState } from "react";
import View from './layout/View'
import './index.css';
import { PDFDocument, StandardFonts, rgb, layoutMultilineText } from 'pdf-lib'

const Wrapper = styled.div`
    display: flex;
    padding: 0;
`;

const Sidebar = styled.div`
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
		padding: 1em 2em;
		overflow-x: hidden;
		overflow-y: auto;
		.group {
			margin-bottom: 2em;
		}
		p {
			font-weight: 600;
			font-size: 1em;
		}
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




function App () {

	const template = '../ManilaCOVAX.pdf';

	const [PDF, setPDF] = useState(template);

	const fields = {
		name: "",
		age: "",
		address: "",
		brand: "",
		date: "",
		site: "",
		remarks: "",
	};
	
    const [document, setDocument] = useState(fields)

	const generatePDF = async () => {

		const pdfDoc = await PDFDocument.create()

		const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
		const page = pdfDoc.addPage()
		const { width, height } = page.getSize()
		const fontSize = 12

		page.drawText(`This is to certify that ${document.name}, ${document.age} years of age, residing at ${document.address} was fully vaccinated.`, {
			x: 50,
			y: height - 5 * fontSize,
			size: fontSize,
			font: timesRomanFont,
		})
		page.drawText(`This is to certify that ${document.name}, ${document.age} years of age, residing at ${document.address} was fully vaccinated.`, {
			x: 50,
			y: height - 20 * fontSize,
			size: fontSize,
			font: timesRomanFont,
			color: rgb(0, 0.53, 0.71),
		})
		

		const pdfBytes = await pdfDoc.save()
		const blob = new Blob([pdfBytes], {'type': 'application/pdf'});
		const url =  URL.createObjectURL(blob);
		setPDF(url);
	}

	const generatePDF2 = async () => {

		const url2 = '../ManilaCOVAX.pdf';
		const existingPdfBytes = await fetch(url2).then(res => res.arrayBuffer())

		const pdfDoc = await PDFDocument.load(existingPdfBytes)
		const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

		const pages = pdfDoc.getPages()
		const firstPage = pages[0]
		
		
		
		const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
		const { width, height } = firstPage.getSize()
		const fontSize = 12

	
		
		firstPage.drawText(`This is to certify that ${document.name}, ${document.age} years of age, a resident of ${document.address}, was fully inoculated by the Manila Health Department.`, {
			x: 50,
			y: height - 18 * fontSize,
			size: fontSize,
			font: timesRomanFont,
			maxWidth: 510,
		})

		// Serialize the PDF document to Uint8Array.

		const pdfBytes = await pdfDoc.save()
		
		// Create an accessible data:blob that can be rendered into an <iframe> element.

		const blob = new Blob([pdfBytes], {'type': 'application/pdf'});
		const url =  URL.createObjectURL(blob);
		setPDF(url);
	}









	





	const handleSubmit = (event) => {
		event.preventDefault();
		generatePDF();
	};

	const handleInputChange = (event) => {
		setDocument((prevProps) => ({
			...prevProps,
			[event.target.name]: event.target.value
		}))
	}

	const Populate = () => {
		const example = {
			name: "Sean Velasco",
			remarks: "Vaccinated"
		}
		setDocument(example)
	}

























	


    const [view, setView] = useState(PDF);


	const OLDhandleSubmit = (event) => {
		setView(`${URL}/?name=${document.name}&remarks=${document.remarks}`)
	};

	const savePDF = (event) => {
		setView(`${URL}/?name=${document.name}&remarks=${document.remarks}`);
	}

    const Insert = () => {
        const template = 'https://generate.seanvelasco.workers.dev/?name=Sean+Velasco&remarks=Fully+vaccinated'
		setView(template)
	}

    const downloadDocument = (event) => {
		
	}


	

	




    return  (
        <>
        <Wrapper>
            <Sidebar>
                <div className='title'></div>
                <form className='fields'>
					<div className='field'>
						<label>Name</label>
						<Input type='text' name='name' value={document.name} onChange={handleInputChange}></Input>
					</div>
					<div className='field'>
						<label>Age</label>
						<Input type='text' name='age' value={document.age} onChange={handleInputChange}></Input>
					</div>
					<div className='field'>
						<label>Address</label>
						<Input type='text' name='address' value={document.address} onChange={handleInputChange}></Input>
					</div>
					<div className='field'>
						<label>Vaccine brand</label>
						<Input type='text' name='brand' value={document.brand} onChange={handleInputChange}></Input>
					</div>
					<div className='field'>
						<label>Date administered</label>
						<Input type='text' name='date' value={document.date} onChange={handleInputChange}></Input>
					</div>
					<div className='field'>
						<label>Vaccination site</label>
						<Input type='text' name='site' value={document.site} onChange={handleInputChange}></Input>
					</div>
					<div className='field'>
						<label>Remarks</label>
                   		 <Textarea type='text' name='remarks' value={document.remarks} onChange={handleInputChange}></Textarea>
					</div>
                </form>
                <div className='submission'>
                    <Button onClick={generatePDF} className='mobile'>Generate PDF</Button>
                    <Button onClick={generatePDF} className='full'>Generate</Button>
                    <Button onClick={generatePDF2} type="submit" className='full' transparent>Save</Button>
                </div>
            </Sidebar>
            <View>
                <iframe title='TITLE'src={PDF} />
            </View>
        </Wrapper>
        </>
    )
}

export default App;