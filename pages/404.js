import { Fragment } from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Fragment>
      <section className="not-found">
        <div className="container">
          <h1 className="not-found__title">404 - Page Not Found</h1>
          <Link href="/">
            <p className="not-found__subtitle">return to the frontpage</p>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .not-found {
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .not-found__subtitle {
          text-transform: uppercase;
          cursor: pointer;
          font-size: 1.33rem;
        }
      `}</style>
    </Fragment>
  );
}
