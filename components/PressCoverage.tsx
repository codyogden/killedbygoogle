import styled from '@emotion/styled';
import { css } from '@emotion/react';

const links = [
  {
    url:
      'https://www.businessinsider.com/coder-created-obituary-website-for-googles-defunct-products-2019-3',
    altText: 'Business Insider',
    imgSrc: 'features/business-insider-logo.png',
  },
  {
    url:
      'https://thenextweb.com/google/2019/03/26/killed-by-google-digital-obituary/',
    altText: 'The Next Web',
    imgSrc: 'features/the-next-web-logo.png',
  },
  {
    url:
      'https://www.fastcompany.com/90322103/a-eulogy-for-every-product-google-has-ruthlessly-killed-145-and-counting',
    altText: 'Fast Company',
    imgSrc: 'features/fast-company-logo.png',
  },
  {
    url:
      'https://lifehacker.com/how-to-track-every-google-service-and-app-thats-shut-do-1833553690',
    altText: 'Lifehacker',
    imgSrc: 'features/lifehacker-logo.png',
  },
  {
    url:
      'http://fortune.com/2019/04/03/data-sheet-healthcare-transformation-tech-brainstorm/',
    altText: 'Fortune',
    imgSrc: 'features/fortune-logo.png',
  },
  {
    url: 'https://www.gizmodo.jp/2019/04/killed-by-google.html',
    altText: 'Gizmodo Japan',
    imgSrc: 'features/gizmodo-logo.png',
  },
  {
    url:
      'https://arstechnica.com/gadgets/2019/04/googles-constant-product-shutdowns-are-damaging-its-brand/',
    altText: 'Ars Technica',
    imgSrc: 'features/ars-technica-logo.png',
  },
  {
    url: 'https://bgr.com/2019/03/26/killed-by-google-products-list/',
    altText: 'BGR: Boy Genius Report',
    imgSrc: 'features/bgr-logo.png',
  },
];

const Container = styled.ul(() => css({
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  listStyleType: 'none',
  margin: '0 auto',
  maxWidth: '80%',
  padding: 0,
  width: '1000px',
}));

const Child = styled.li(() => css({
  flex: '0 0 25%',
  marginTop: '50px',

  ['@media screen and ( max-width: 700px )']: {
    flex: '0 0 50%',
  },

  ['img']: {
    maxWidth: '100%',
  },

  ['a']: {
    border: 'none',
  },
}));

const Press = styled.div(() => css({
  backgroundColor: '#e1e1e1',
  padding: '40px 0',
}));

const Title = styled.h4(() => css({
  fontSize: '1.25em',
  fontWeight: 'normal',
  margin: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
  
  ['@media screen and ( max-width: 700px )']: {
    marginBottom: 0,
  },
}));

const PressCoverage = () => (
  <Press>
    <Title>As seen on</Title>
    <Container>
      {links.map(link => (
        <Child key={link.altText}>
          <a
            href={link.url}
            title={link.altText}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.imgSrc} alt={link.altText} />
          </a>
        </Child>
      ))}
    </Container>
  </Press>
);

export default PressCoverage;