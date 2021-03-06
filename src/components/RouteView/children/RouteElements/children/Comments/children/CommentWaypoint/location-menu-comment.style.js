import styled from 'styled-components';

export const LocationInfoHolder = styled.div`
    height: ${props => props.selected ? 'auto' : '3em'};
    margin-bottom: .25em;
    
    display: flex;
    flex-direction: row;

    transition-duration: 200ms;

    cursor: pointer;

    .marker {
        margin: auto 4px;
    }

    .content {
        padding: 4px;
        height: 100%;
        width: calc(100% - 28px);

        .header {
            height: ${props => props.selected ? 'calc(3em - 10px)' : '100%'};
            display: flex;

            .name {
                font-style: ${props => props.name ? 'inherit' : 'italic'};
                font-size: ${props => props.name ? 'inherit' : '.9em'};
                color: ${props => props.name ? '#616161' : '#a3a3a3'};
                margin: auto;
                width: calc(100% - 28px);
            }
        }

        .description {
            font-style: italic;
            font-size: ${props => props.description ? '.8em' : '.7em'};
            color: ${props => props.description ? '#616161' : '#a3a3a3'};
            margin:  3px auto auto auto;
            width: calc(100% - 28px);
        }
    }
`;

export const LocationContainer = styled.div`
    padding: .25em .25em 0;

    background-color: white;
    height: 100%;
    transition-duration: 200ms;

    border-radius: 0 0 4px 0;
`;