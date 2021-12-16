import styled from "styled-components";
import Field from '../components/Forms'

const Wrapper = styled.div`
        padding: 2em;
        overflow-x: hidden;
        overflow-y: auto;
`;

const Form = () => {
    return (
        <Wrapper>
            <Field label='Name' />
            <Field label='Address' />
            <Field label='Vaccine brand' />
            <Field label='First dose' />
            <Field label='Second dose' />
            <Field label='Vaccination site' />
            <Field label='Remarks' />
        </Wrapper>
    )
}

export default Form;