import styled from 'styled-components';
import { device } from '../constants/device'

const Wrapper = styled.div`
    flex: 1;
    iframe {
        display: block;
        border: 0;
        height: 100%;
        width: 100%
    }
    display: none;
    @media ${device.tablet} {
        
        display: block;
    }
`;

const Viewport = ({ src, title }) => {
    return (
        <Wrapper>
            <iframe title={title} src={src} />
        </Wrapper>
    )
}

export default Viewport;