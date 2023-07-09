import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <section>
          <div className={css.container}>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;
