import logo from '/img/logo/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import header from './Header.module.scss';
import icons from '../shared/Icons.module.scss';
import pageNavigation from '../shared/PageNavigation.module.scss';
import classNames from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('font-uppercase', pageNavigation.navigationLink, {
    [pageNavigation.navigationLinkActive]: isActive,
  });

type Props = {
  isMenuOpened: boolean;
  onToggleMenu: () => void;
};

export const Header = ({ isMenuOpened, onToggleMenu }: Props) => {
  return (
    <header className={header.header}>
      <Link to="/" className={header.logoLink}>
        <img src={logo} alt="Logo" className={header.logo} />
      </Link>
      <div className={header.container}>
        <nav className={pageNavigation.navigation}>
          <li>
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/phones" className={getLinkClass}>
              Phones
            </NavLink>
          </li>
          <li>
            <NavLink to="/tablets" className={getLinkClass}>
              Tablets
            </NavLink>
          </li>
          <li>
            <NavLink to="/accessories" className={getLinkClass}>
              Accessories
            </NavLink>
          </li>
        </nav>
        <nav className={pageNavigation.buttons}>
          <li
            className={classNames(
              pageNavigation.button,
              pageNavigation.buttonHiddenMobile,
            )}
          >
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                classNames(pageNavigation.buttonAction, icons.iconWrapper, {
                  [pageNavigation.buttonActionActive]: isActive,
                })
              }
            >
              <span className={classNames(icons.icon, icons.iconFavorites)} />
            </NavLink>
          </li>
          <li
            className={classNames(
              pageNavigation.button,
              pageNavigation.buttonHiddenMobile,
            )}
          >
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                classNames(pageNavigation.buttonAction, {
                  [pageNavigation.buttonActionActive]: isActive,
                })
              }
            >
              <span className={classNames(icons.icon, icons.iconCart)} />
            </NavLink>
          </li>
          <li
            className={classNames(
              pageNavigation.button,
              pageNavigation.buttonHiddenDesktop,
            )}
          >
            <button
              className={classNames(pageNavigation.buttonMenu, {
                [icons.iconMenu]: !isMenuOpened,
                [icons.iconClose]: isMenuOpened,
              })}
              onClick={onToggleMenu}
            ></button>
          </li>
        </nav>
      </div>
    </header>
  );
};
