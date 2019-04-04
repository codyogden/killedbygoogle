import React from 'react';
import styled from 'styled-components';

// Images
import FASTCO from '../assets/features/fast-company-logo.png';
import TNW from '../assets/features/the-next-web-logo.png';
import LIFEHACKER from '../assets/features/lifehacker-logo.png';
import BUSINESSINSIDER from '../assets/features/business-insider-logo.png';
import FORTUNE from '../assets/features/fortune-logo.png';
import GIZMODO from '../assets/features/gizmodo-logo.png';
import ARSTECHNICA from '../assets/features/ars-technica-logo.png';
import BGR from '../assets/features/bgr-logo.png';

const links = [
  {
    url: 'https://www.businessinsider.com/coder-created-obituary-website-for-googles-defunct-products-2019-3',
    altText: 'Business Insider',
    imgSrc: BUSINESSINSIDER,
  },
  {
    url: 'https://thenextweb.com/google/2019/03/26/killed-by-google-digital-obituary/',
    altText: 'The Next Web',
    imgSrc: TNW,
  },
  {
    url: 'https://www.fastcompany.com/90322103/a-eulogy-for-every-product-google-has-ruthlessly-killed-145-and-counting',
    altText: 'Fast Company',
    imgSrc: FASTCO,
  },
  {
    url: 'https://lifehacker.com/how-to-track-every-google-service-and-app-thats-shut-do-1833553690',
    altText: 'Lifehacker',
    imgSrc: LIFEHACKER,
  },
  {
    url: 'http://fortune.com/2019/04/03/data-sheet-healthcare-transformation-tech-brainstorm/',
    altText: 'Fortune',
    imgSrc: FORTUNE,
  },
  {
    url: 'https://www.gizmodo.jp/2019/04/killed-by-google.html',
    altText: 'Gizmodo Japan',
    imgSrc: GIZMODO,
  },
  {
    url: 'https://arstechnica.com/gadgets/2019/04/googles-constant-product-shutdowns-are-damaging-its-brand/',
    altText: 'Ars Technica',
    imgSrc: ARSTECHNICA,
  },
  {
    url: 'https://bgr.com/2019/03/26/killed-by-google-products-list/',
    altText: 'BGR: Boy Genius Report',
    imgSrc: BGR,
  },
];

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 1000px;
  max-width: 80%;
  margin: 0 auto;
  list-style-type: none;
`;

const Child = styled.li`
  flex: 0 0 25%;
  @media screen and ( max-width: 700px ) {
    flex: 0 0 50%;
    padding: 30px 0;
  }
  &:nth-child(n+5) {
    margin-top: 25px;
  }
  img {
    max-width: 100%;
  }
  a {
    border: none;
  }
`;

const Press = styled.div`
  background-color: #e1e1e1;
  padding: 40px 0;
`;

const Title = styled.h4`
  font-size: 1.25em;
  margin: 0 0 20px 0;
  text-align: center;
  font-weight: normal;
  text-transform: uppercase;
  @media screen and ( max-width: 700px ) {
    margin-bottom: 0;
  }
`;

export default () => (
  <Press>
    <Title>As seen on</Title>
    <Container>
      {links.map(link => (
        <Child key={link.altText}>
          <a href={link.url} title={link.altText} target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" srcSet={`${link.imgSrc.split('.')[0]}.webp`} />
              <source type="image/png" srcSet={link.imgSrc} />
              <img src={link.imgSrc} alt={link.altText} />
            </picture>
          </a>
        </Child>
      ))}
    </Container>
  </Press>
);
