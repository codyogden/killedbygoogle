import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// Import External Components
import Item from './Item';

// Import Styled Components
import { ListContainer } from './List.atoms';
import {
    ListItem,
} from './Item.atoms';

// Styled Components
const SRT = styled.span`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
`;

const AdContainer = styled(ListItem)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0;

    #carbonads {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    #carbonads {
        display: flex;
        max-width: 330px;
        background-color: hsl(0, 0%, 98%);
        box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, .1);
        min-height: 125px;
        margin-right: auto;
        margin-left: auto;
    }

    #carbonads a {
        color: inherit;
        text-decoration: none !important;
        border: none !important;
    }

    #carbonads a:hover {
        color: inherit;
    }

    #carbonads span {
        position: relative;
        display: block;
        overflow: hidden;
    }

    #carbonads .carbon-wrap {
        display: flex;
    }

    .carbon-img {
        display: block;
        margin: 0;
        line-height: 1;
    }

    .carbon-img img {
        
    }

    .carbon-text {
        font-size: 13px;
        padding: 10px;
        padding-left: 10px !important;
        display: flex !important;
        align-items: center !important;
        line-height: 1.5;
        text-align: left;
    }

    .carbon-poweredby {
        display: block;
        padding: 8px 10px;
        background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .5px;
        font-weight: 600;
        font-size: 9px;
        line-height: 1;
    }
    #carbonads + a {
        display: none !important;
    }
`;

const AdPlaceholder = styled.a`
    background-color: hsl(0, 0%, 98%);
    height: 125px;
    width: 330px;
    border-bottom: 0;
    display: flex; align-items: center; justify-content: center;
    text-align: center;
    font-size: 0.9rem;
    img {
        height: 40px;
        width: 40px;
        margin-bottom: 0.5rem;
    }
    & > div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
`;

class FollowerCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    async componentDidMount() {
        const res = await fetch('https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=killedbygoogle');
        const data = await res.json();
        this.setState({
            count: data[0]['followers_count']
        });
    }
    render() {
        const { count } = this.state;
        return(
            <span> { (count) ? count.toLocaleString('en') : 'a bunch of' }</span>
        );
    }
}

const showAd = () => {
    if( process.env.NODE_ENV === 'production' )
        return (<div id="carbonads"></div>);
};

const List = ({ items }) => (
    <ListContainer>
        <AdContainer>
            <SRT>Advertisement</SRT>
            {showAd()}
            <AdPlaceholder href="https://twitter.com/killedbygoogle" target="_blank" rel="noopener noreferrer">
                <div>
                    <div>
                        <img src="twitter-blue.svg" alt="Twitter" />
                    </div>
                    <div>Join<FollowerCount /> others and follow<br/> @killedbygoogle on Twitter.</div>
                </div>
            </AdPlaceholder>
        </AdContainer>
        {items.map(item => (
            <Item key={item.name} {...item} />
        ))}
    </ListContainer>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};

export default List;