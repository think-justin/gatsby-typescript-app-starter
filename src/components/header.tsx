import BrandLogo from 'assets/svg/j-logo-black.svg';
import { Link } from 'components/link/Link';
import * as React from 'react';

import s from './Header.scss';

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link
          to="/"
          className={s.header__logo}
        >
          <BrandLogo className={s.header__logoSvg} />
        </Link>

        <div className={s.header__navigation}>
          {children}
        </div>
      </div>
    </div>
  </header>
);
