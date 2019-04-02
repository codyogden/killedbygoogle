import React from 'react';
import styled from 'styled-components';

import FASTCO from '../assets/features/fast-company-logo.png';
import TNW from '../assets/features/the-next-web-logo.png';
import LIFEHACKER from '../assets/features/lifehacker-logo.png';
import BUSINESSINSIDER from '../assets/features/business-insider-logo.png';

// Import Styled Components
import { CreatorTag, FooterContainer } from './Footer.atoms';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 1000px;
  max-width: 80%;
  margin: 30px auto;

`;

const Child = styled.div`
  flex: 0 0 25%;
  @media screen and ( max-width: 700px ) {
    flex: 0 0 50%;
    padding: 20px 0;
  }
  img {
    max-width: 100%;
  }
  a {
    border: none;
  }
`;

export default () => (
  <>
    <Container>
      <Child>
        <a href="https://www.businessinsider.com/coder-created-obituary-website-for-googles-defunct-products-2019-3" rel="noreferrer noopener" target="_blank"><img src={BUSINESSINSIDER} alt="Business Insider" /></a>
      </Child>
      <Child>
        <a href="https://thenextweb.com/google/2019/03/26/killed-by-google-digital-obituary/" rel="noreferrer noopener" target="_blank"><img src={TNW} alt="The Next Web" /></a>
      </Child>
      <Child>
        <a href="https://www.fastcompany.com/90322103/a-eulogy-for-every-product-google-has-ruthlessly-killed-145-and-counting" rel="noreferrer noopener" target="_blank"><img src={FASTCO} alt="Fast Company" /></a>
      </Child>
      <Child>
        <a href="https://lifehacker.com/how-to-track-every-google-service-and-app-thats-shut-do-1833553690" rel="noreferrer noopener" target="_blank"><img src={LIFEHACKER} alt="Lifehacker" /></a>
      </Child>
    </Container>
    <FooterContainer>
      <div>
        <p>
          {'Killed by Google is a Free and Open Source list of dead Google products, services, and devices. '}
          <span>
            {'It serves to be a tribute and memorial of beloved products and services killed by Google.'}
          </span>
        </p>
        <p>
          {'If you found this list helpful, please consider supporting the wonderful '}
          <span>
            {' resources at the '}
            <a href="https://wikimediafoundation.org/">Wikimedia Foundation</a>
            {' and the '}
            <a href="https://archive.org/">Internet Archive</a>
            .
          </span>
        </p>
        <div className="socials">
          {'Find us on '}
          <a href="https://twitter.com/killedbygoogle" title="Follow @killedbygoogle on Twitter">Twitter</a>
          {' and '}
          <a href="https://github.com/codyogden/killedbygoogle">GitHub</a>
          .
        </div>
        <CreatorTag>
          {'A project by '}
          <a href="https://codyogden.com" title="Cody Ogden">Cody Ogden</a>
          .
        </CreatorTag>
      </div>
    </FooterContainer>
  </>
);
