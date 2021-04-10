/**
 * All styles for upbank app
 */
import styled from 'styled-components';

// main theming for the app
export const UpTheme = styled.div `
    min-height: 100vh;
    width: 100%;
    background-color: #25232F;
    color: #FF7A64;
    text-align: center;
`;

// main login div
export const UpLogin = styled.div `
    margin: auto;
    width: 60%;
    padding: 15% 0;
    text-align: left;
`;

// container for account cards
export const AccountContainer = styled.div `
    display: flex;
    margin: auto;
    flex-direction: column;mj
    justify-content: center;
    align-items: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 4%;
`;

// div for account cards
export const AccountCard = styled.div `
    margin-top: 2%;
    margin-bottom: 20%;
    transition: 0.5s;
    color: white;
    text-align: left;
    opacity: 0.85;

    &:hover {
        cursor: pointer; 
        opacity: 1;
    }
`;

// about section paragraph
export const AboutDiv = styled.div `
    margin: auto;
    margin-top: 3%; 
    width: 80%; 
    color: #FFF06B;
    letter-spacing: 1.5px;
    line-height: 200%;
    font-size: large;
    padding-bottom: 15%;
    max-height: 1000px;
`;

export const TransactionsContainer = styled.div `
    text-align: left;
    padding: 1%;
    padding-bottom: 1
    &:hover {
        cursor: cursor;
    }
`