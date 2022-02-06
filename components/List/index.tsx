import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ProductWithSlug } from '../../types/Product';

import { Carbon, SRT } from '../../components';
import Item from './Item';
import {
    ListItem,
} from './Item.atoms';
import { ListContainer } from './List.atoms';
import Link from 'next/link';


const AdContainer = styled(ListItem)(() => css({
    alignItems: 'center',
    borderBottom: 0,
    display: 'flex',
    justifyContent: 'center',

    ['#carbonads']: {
        backgroundColor: 'hsl(0, 0%, 98%)',
        boxShadow: '0 1px 4px 1px hsla(0, 0%, 0%, .1)',
        display: 'flex',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '330px',
        minHeight: '125px',

        ['a']: {
            border: 'none !important',
            color: 'inherit',
            textDecoration: 'none !important',

            ['&:hover']: {
                color: 'inherit',
            },
        },

        ['span']: {
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
        },

        ['.carbon-wrap']: {
            display: 'flex',
        },

        ['& + a']: {
            display: 'none !importnt',
        },
    },

    ['.carbon-img']: {
        display: 'block',
        lineHeight: 1,
        margin: 0,
    },

    ['.carbon-text']: {
        alignItems: 'center !important',
        display: 'flex !important',
        fontSize: '13px',
        lineHeight: 1.5,
        padding: '10px',
        paddingLeft: '10px !important',
        textAlign: 'left',
    },

    ['.carbon-poweredby']: {
        background: 'repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4)',
        display: 'block',
        fontSize: '9px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: 1,
        padding: '8px 10px',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
}));

const AdPlaceholder = styled.a(() => css({
    alignItems: 'center',
    backgroundColor: 'hsl(0, 0%, 98%)',
    borderBottom: 0,
    display: 'flex',
    fontSize: '0.9rem',
    height: '125px',
    justifyContent: 'center',
    textAlign: 'center',
    width: '330px',

    ['img']: {
        height: '40px',
        marginBottom: '0.5rem',
        width: '40px',
    },

    ['& > div']: {
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
    },
}));

export const FallbackAd = () => <Link passHref href="https://twitter.com/killedbygoogle">
    <AdPlaceholder target="_blank" rel="noopener noreferrer">
        <div>
            <div>
                <img src="twitter-blue.svg" alt="Twitter" />
            </div>
            <div>Follow @killedbygoogle on Twitter.</div>
        </div>
    </AdPlaceholder>
</Link>;

const showAd = () => {
    if (process.env.NODE_ENV === 'production')
        return (
            <Carbon
                name="kbg-carbon"
                placement="killedbygooglecom"
                serve="CK7I653N"
                fallback={FallbackAd}
            />
        );
    return <FallbackAd />
};

type Props = {
    items: ProductWithSlug[]
}

const List: React.FC<Props> = ({ items }) => (
    <ListContainer>
        <AdContainer>
            <SRT>Advertisement</SRT>
            {showAd()}
        </AdContainer>
        {items.map(item => (
            <Item key={item.slug} {...item} />
        ))}
    </ListContainer>
);


export default List;