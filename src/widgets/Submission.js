import styled from 'styled-components'
import Button from '../components/Button';
import { device } from '../constants/device'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(45, 45, 45, 0.97);
    padding: 1em;
    margin-top: auto;
    .disclaimer {
        a {
            color: #328dd2;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    }
    .full {
        display: none;
    }
    @media ${device.tablet} {
        .full {
            display: block;
        }
        .mobile {
            display: none;
        }
    }
`;

const Submission = () => {
    return (
        <Wrapper>
            <Button className='mobile'>Generate PDF</Button>
            <Button className='full'>Preview</Button>
            <Button className='full' transparent>Save</Button>
        </Wrapper>
    )
};

export default Submission;