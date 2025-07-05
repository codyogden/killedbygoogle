import styles from './PressCoverage.module.css';

const links = [
  {
    url:
      'https://www.businessinsider.com/coder-created-obituary-website-for-googles-defunct-products-2019-3',
    altText: 'Business Insider',
    imgSrc: 'https://static.killedbygoogle.com/com/features/business-insider-logo.png',
  },
  {
    url:
      'https://thenextweb.com/google/2019/03/26/killed-by-google-digital-obituary/',
    altText: 'The Next Web',
    imgSrc: 'https://static.killedbygoogle.com/com/features/the-next-web-logo.png',
  },
  {
    url:
      'https://www.fastcompany.com/90322103/a-eulogy-for-every-product-google-has-ruthlessly-killed-145-and-counting',
    altText: 'Fast Company',
    imgSrc: 'https://static.killedbygoogle.com/com/features/fast-company-logo.png',
  },
  {
    url:
      'https://lifehacker.com/how-to-track-every-google-service-and-app-thats-shut-do-1833553690',
    altText: 'Lifehacker',
    imgSrc: 'https://static.killedbygoogle.com/com/features/lifehacker-logo.png',
  },
  {
    url:
      'http://fortune.com/2019/04/03/data-sheet-healthcare-transformation-tech-brainstorm/',
    altText: 'Fortune',
    imgSrc: 'https://static.killedbygoogle.com/com/features/fortune-logo.png',
  },
  {
    url: 'https://www.gizmodo.jp/2019/04/killed-by-google.html',
    altText: 'Gizmodo Japan',
    imgSrc: 'https://static.killedbygoogle.com/com/features/gizmodo-logo.png',
  },
  {
    url:
      'https://arstechnica.com/gadgets/2019/04/googles-constant-product-shutdowns-are-damaging-its-brand/',
    altText: 'Ars Technica',
    imgSrc: 'https://static.killedbygoogle.com/com/features/ars-technica-logo.png',
  },
  {
    url: 'https://bgr.com/2019/03/26/killed-by-google-products-list/',
    altText: 'BGR: Boy Genius Report',
    imgSrc: 'https://static.killedbygoogle.com/com/features/bgr-logo.png',
  },
];

const PressCoverage = () => (
  <div className={styles.press}>
    <h4 className={styles.title}>As seen on</h4>
    <ul className={styles.container}>
      {links.map(link => (
        <li key={link.altText} className={styles.child}>
          <a
            href={link.url}
            title={link.altText}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.imgSrc} alt={link.altText} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default PressCoverage;