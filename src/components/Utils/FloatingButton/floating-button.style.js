import styled from 'styled-components';

export const FloatingButtonWrapper = styled.button`
    position: absolute;
    bottom: 0px;
    right: 0px;
    margin: 18px;
    padding: 0px;

    text-align: center;

    height: 56px;
    width: 56px;

    font-size: ${props => props.fontSize ? props.fontSize : '3em'};
    border: none;
    border-radius: 100%;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, .5);
    z-index: 1000;
    background-color: ${props => props.background};
    color: ${props => props.foreground};
    transition-duration: 100ms;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.hoverBackground};
        box-shadow: 0px 0px 11px rgba(0, 0, 0, .5);
        color: ${props => props.foreground};
    }
    
    &:active {
        background-color: ${props => props.activeBackground};
        box-shadow: 0px 0px 9px rgba(0, 0, 0, .5);
    }
`;