import styled from 'styled-components';

export const ContainerDiv = styled.div`
    min-height:calc(100vh - 2rem);
    @media only screen and (max-width:600px){
        min-height: calc(100vh - 5rem);
    }
`;
export const Button = styled.div`
    display: inline;
    padding: 0;
    margin: 0;
    background-color: rgb(68, 2, 207);
    height:fit-content;
    border: none;
    color: white;
    font-weight: normal;
    padding: 0.5rem;
    margin: 1rem;
    cursor: pointer;
    font-size:1rem;
    transition: all 300ms;
    border-radius: 8px;
    &:hover{
        background-color: rgb(2, 117, 216);
        padding: 0.75rem;
        border-radius: 4px;
    }
`;

export const TagLineDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    min-height:100%;
    @media only screen and (max-width:600px){
        width: 100%;
        align-items:center;
    }
`;

export const PCustom = styled.p`
    display: inline;
    color:var(--text-secondary);
    font-size:clamp(${props=>props.minsize} , ${props=>props.size} , ${props=>props.maxsize} );
    font-weight:${(props)=>props.weight};
    margin:0;
    padding:0;
`;

export const PhotoDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height:100%;
    @media only screen and (max-width:600px){
        align-items:center;
    }
`;

export const StyleImgTag = styled.img`
    width=${props=>props.width};
    -webkit-filter: drop-shadow(1px 1px 5px rgba(50,50,50,150))
                  drop-shadow(-1px -1px 5px rgba(50,50,50,150));
    filter: drop-shadow(1px 1px 5pxpx rgba(50,50,50,150)) 
            drop-shadow(-1px -1px 5pxpx rgba(50,50,50,150));
    @media only screen and (max-width:600px){
        margin: 0 auto;
    }
`;