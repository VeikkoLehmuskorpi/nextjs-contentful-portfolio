import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = ({ children, home, contact }) => {
  return (
    <Fragment>
      <Head>
        <title>{home[0].fields.title}</title>
      </Head>

      <div id="document">
        <nav className="navbar">
          <div className="navbar__container container">
            <ul className="navbar__list">
              <Link href="/">
                <li className="navbar__item">
                  <span className="navbar__item-text">Home</span>
                </li>
              </Link>
              <Link href="/">
                <li className="navbar__item">
                  <span className="navbar__item-text">Posts</span>
                </li>
              </Link>
              <Link href="/contact">
                <li className="navbar__item">
                  <span className="navbar__item-text">Contact</span>
                </li>
              </Link>
            </ul>
            <ul className="navbar__list">
              <a
                href={contact[0].fields.github}
                className="navbar__icon"
                target="_blank"
                rel="noreferrer">
                <li className="navbar__item">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </li>
              </a>
              <a
                href={contact[0].fields.linkedin}
                className="navbar__icon"
                target="_blank"
                rel="noreferrer">
                <li className="navbar__item" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </li>
              </a>
              <a
                href={contact[0].fields.twitter}
                className="navbar__icon"
                target="_blank"
                rel="noreferrer">
                <li className="navbar__item" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </li>
              </a>
            </ul>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <p className="footer__text">{contact[0].fields.name}</p>
            <sub className="footer__text">
              {contact[0].fields.email} | {contact[0].fields.phoneNumber}
            </sub>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .navbar {
          box-shadow: 0 4rem 5rem rgba(0, 0, 0, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.16);
          position: fixed;
          top: 0;
          width: 100%;
          background: white;
        }

        .navbar__container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 0;
        }

        .navbar__list {
          display: flex;
          align-items: center;
        }

        .navbar__item {
          font-size: 1.33rem;
          padding: 1rem;
          cursor: pointer;
        }

        .navbar__item-text {
          padding-bottom: 0.5rem;
          position: relative;
        }

        .navbar__item-text::after {
          content: '';
          position: absolute;
          left: 25%;
          bottom: 0;
          width: 60%;
          height: 1px;
          background: #333;
          opacity: 0;
          transition: all 0.1s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar__item-text:hover::after {
          left: 0%;
          width: 100%;
          opacity: 1;
        }

        .navbar__item:first-child {
          // padding-left: 0;
        }

        .navbar__item:not(:last-child) {
          margin-right: 1rem;
        }

        .navbar__icon .navbar__item {
          font-size: 2rem;
        }

        .footer {
          margin-top: 6rem;
          text-align: center;
        }

        .footer__text {
          margin-bottom: 0;
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
