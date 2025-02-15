import Footer from './Footer1.jsx';

const links = [
  {
    title: 'Home',
    url: '/home',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Uses',
    url: '/uses',
  },
];

function FooterSection() {
  return (
    <>
      <div className={'page'}>
        <header>{/* placeholder */}</header>
        <main>{/* placeholder */}</main>
        <Footer links={links} />
      </div>
    </>
  );
}

export default FooterSection;
