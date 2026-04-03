import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import burgerMenu from './BurgerMenu.module.scss';
import pageNavigation from '../shared/PageNavigation.module.scss';
import icons from '../shared/Icons.module.scss';
import { useEffect } from 'react';

type Props = {
  isOpened: boolean;
  onToggle: () => void;
};

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('font-uppercase', pageNavigation.navigation__link, {
    [pageNavigation.navigationLinkActive]: isActive,
    [pageNavigation.navigationLinkActiveBurger]: isActive,
  });

export const BurgerMenu = ({ isOpened, onToggle }: Props) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpened]);

  return (
    <div
      className={classNames(burgerMenu.overlay, {
        [burgerMenu.overlayActive]: isOpened,
      })}
    >
      <div
        className={classNames(burgerMenu.menu, {
          [burgerMenu.menuActive]: isOpened,
        })}
      >
        <nav className={burgerMenu.navigation}>
          <li>
            <NavLink to="/" className={getLinkClass} onClick={onToggle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/phones" className={getLinkClass} onClick={onToggle}>
              Phones
            </NavLink>
          </li>
          <li>
            <NavLink to="/tablets" className={getLinkClass} onClick={onToggle}>
              Tablets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessories"
              className={getLinkClass}
              onClick={onToggle}
            >
              Accessories
            </NavLink>
          </li>
        </nav>
        <nav className={burgerMenu.buttons}>
          <li className={classNames(burgerMenu.button, icons.iconWrapper)}>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                classNames(pageNavigation.buttonAction, {
                  [pageNavigation.buttonActionActive]: isActive,
                })
              }
              onClick={onToggle}
            >
              <span className={classNames(icons.icon, icons.iconFavorites)} />
            </NavLink>
          </li>
          <li className={classNames(burgerMenu.button, icons.iconWrapper)}>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                classNames(pageNavigation.buttonAction, {
                  [pageNavigation.buttonActionActive]: isActive,
                })
              }
              onClick={onToggle}
            >
              <span className={classNames(icons.icon, icons.iconCart)} />
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};
