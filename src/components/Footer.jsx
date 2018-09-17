import React, { Component } from 'react';

// Import Styled Components
import { FooterContainer } from './Footer.atoms';

export default class Footer extends Component {
  componentWillMount() {
    this.setState({
      links: [
        {
          href: 'https://github.com/codyogden/killedbygoogle',
          text: 'GitHub',
        },
        {
          href: 'https://codyogden.com',
          text: 'Cody Ogden',
        },
      ],
    });
  }

  footerMenu() {
    const { links } = this.state;
    // Array to attach components
    const componentLinksArry = [];
    // Map each link
    links.map((link, index) => {
      componentLinksArry.push();
      // Only add a dash if the link is not the final one in the array
      if (index !== (links.length - 1)) {
        return componentLinksArry.push(`${<a href={link.href} key={link.href}>{link.text}</a>} - `);
      }
      return componentLinksArry.push(`${<a href={link.href} key={link.href}>{link.text}</a>}`);
    });
    return componentLinksArry;
  }

  render() {
    return (
      <FooterContainer>
        {this.footerMenu()}
      </FooterContainer>
    );
  }
}
