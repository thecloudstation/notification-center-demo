import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import Novu from 'helpers/novu';
import DarkThemeIcon from 'icons/dark-theme.inline.svg';
import Logo from 'icons/logo.inline.svg';
import MagnifierIcon from 'icons/magnifier.inline.svg';
import NavigationIllustration from 'icons/nav-illustration.inline.svg';

const Header = () => (
  <header className="safe-paddings">
    <div className="container flex items-center py-8">
      <Link className="mx-3 sm:ml-0" to="/">
        <span className="sr-only">Acme corporation logo</span>
        <Logo className="w-[150px] xs:w-[120px]" />
      </Link>
      <NavigationIllustration className="mx-8 max-w-[510px] sm:hidden" />
      <div className="ml-auto flex items-center space-x-5 sm:space-x-4">
        <Button theme="rounded" type="button">
          <span className="sr-only">Search icon</span>
          <MagnifierIcon className="w-5 sm:w-3" aria-hidden />
        </Button>
        <Button theme="rounded" type="button">
          <span className="sr-only">Dark theme icon</span>
          <DarkThemeIcon className="w-5 sm:w-3" aria-hidden />
        </Button>
        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-grey-4 bg-white sm:h-[30px] sm:w-[30px]">
          <Novu />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
