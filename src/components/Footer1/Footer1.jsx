import './Footer1.css';
import PropTypes from 'prop-types';

const Footer = ({ links }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="footer">
      <ul>
        {links.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <p data-testid="footerContent">© {currentYear}</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
