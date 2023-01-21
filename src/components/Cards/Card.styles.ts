import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { media } from '../../theme/media';

export const MovieNavigation = styled.div`
    background-color: ${colors.white};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    float: left;
    margin: 10px 5px 10px 5px;
    ${media.lessThan('xs')`
        width: 99%;
        height: 185vw;
    `};
    ${media.greaterThan('xs')`
        width: 50%;
        height: 100vw;
    `};
    ${media.greaterThan('sm')`
        width: 48%;
        height: 91vw;
    `};
    ${media.greaterThan('md')`
        width: 48%;
        height: 86vw;
    `};

    ${media.greaterThan('lg')`
        width: 32%;
        height: 60vw;
    `};

    ${media.greaterThan('xl')`
        width: 24%;
        height: 45vw;
    `};
    .movieNavigationImage {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
    .movieNavigationFooter {
        text-align: center;
        p {
            font-weight: bold;
            font-size: larger;
        }
    }
    .movieNavigationHeader {
        text-align: center; 
        h2 {
            color: ${colors.black};            
            width: 99%; 
            overflow: hidden;
            text-overflow: ellipsis; 
            white-space: nowrap; 
        }
    }
`;

export const MovieDetail = styled.div`
    background-color: ${colors.white};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    display: flex;          
    margin 10px;
    .noBullets {
        list-style-type: disclosure-closed;
        font-size: 20px;
    }
    .movieNavigationSection {    
        ${media.lessThan('xs')`
            width: 99%;
        `};
        ${media.greaterThan('xs')`
            width: 48%;
        `};
        ${media.greaterThan('sm')`
            width: 48%;
        `};
        ${media.greaterThan('md')`
            width: 48%;
        `};
        ${media.greaterThan('lg')`
            width: 30%;
        `};

    }
    .movieNavigationImage {
        width: 80%;
        p {
            font-weight: bold;
        }
    }
    .movieNavigationFooter {
        ${media.lessThan('xs')`
            width: 99%;
        `};
        ${media.greaterThan('xs')`
            width: 48%;
        `};
        ${media.greaterThan('sm')`
            width: 48%;
        `};
        ${media.greaterThan('md')`
            width: 48%;
        `};
        ${media.greaterThan('lg')`
            width: 70%; 
        `};
        .avatar {
            vertical-align: middle;
            width: 100px;
            height: 150px;
            border-radius: 10%;
        }
        .creditsList {
            list-style-type: none;
            margin: 10px;
            padding: 10px;
            overflow: hidden;
            li {
                float: left;
                width: 120px;
                height: 220px;
                background-color: ${colors.lightgrey};
                margin 5px;
            }
        }
    }
    .movieNavigationHeader {
        text-shadow: 1px 1px 2px black, 0 0 25px #fdfcfa, 0 0 5px #fdfcfa;
    }
`;

