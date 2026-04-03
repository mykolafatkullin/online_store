import { Link, NavLink } from 'react-router-dom';
import logo from '/img/logo/Logo.svg';
import footer from './Footer.module.scss';
import icon from '../shared/Icons.module.scss';
import classNames from 'classnames';

export const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={footer.footer}>
      <Link to="/" className={footer.logoLink}>
        <img src={logo} alt="Logo" className={footer.logo} />
      </Link>
      <nav className={classNames('font-uppercase', footer.nav)}>
        <li>
          <NavLink to="https://github.com/MykolaFatkullin">Github</NavLink>
        </li>
        <li>
          <NavLink to="/">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/">Rights</NavLink>
        </li>
      </nav>
      <button
        className={classNames(footer.backToTopButton, 'font-small')}
        onClick={handleBackToTop}
      >
        Back to top
        <span className={classNames(icon.iconWrapper, footer.backToTopWrapper)}>
          <span className={classNames(icon.icon, icon.iconArrowUp)} />
        </span>
      </button>
    </footer>
  );
};
