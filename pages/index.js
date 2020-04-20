import React, { Fragment } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import PostPreview from '../components/postPreview';

const HomePage = ({ home, works, contact }) => {
  return (
    <Fragment>
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">{contact[0].fields.name}</h1>
          <section
            className="hero__subtitle"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(home[0].fields.description),
            }}></section>
        </div>
      </header>

      <div className="container">
        <section className="works">
          {works &&
            works.map(work => (
              <PostPreview post={work} key={work.sys.id}></PostPreview>
            ))}
        </section>
      </div>

      <style jsx>{`
        .hero {
          background: rgba(0, 0, 0, 0.03);
          margin-bottom: 3rem;
          padding: 10rem 0;
        }

        .hero__title {
          font-size: 4rem;
        }

        .hero__subtitle {
          font-size: 1.77rem;
        }
      `}</style>
    </Fragment>
  );
};

export default HomePage;
