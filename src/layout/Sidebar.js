import styled from 'styled-components';
import Submission from '../widgets/Submission';
import Form from '../widgets/Form';
import { device } from '../constants/device'


const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgba(60, 60, 67, 0.03);
    border-right: solid 1px rgba(0, 0, 0, 0.1);
    height:100vh;
    width: 100%;
    box-sizing: border-box;
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

`;

const options = [
    {
        id: '1',
        content: 'Listen now',
        href: '/listen',  
    },
    {
        id: '2',
        content: 'Browse',
        href: '/browse', 
    },
    {
        id: '3',
        content: 'Radio',
        href: '/radio',
    },
]
const Sidebar = () => {
    
    return (
        <>
        <Wrapper>
            <div className='title'></div>
            <Form />
            <Submission />
        </Wrapper>
        </>
    )
}

export default Sidebar;