import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    &:hover .icon {
        opacity: 1;
    }

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    .icon {
        position: absolute;
        top: -8px;
        right: -8px;
        opacity: 0;
        transition: .2s;
        cursor: pointer;
    }
`;