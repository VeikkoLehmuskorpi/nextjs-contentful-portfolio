import React, { Fragment } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Post = ({ post }) => {
  const date = new Date(post.fields.date).toDateString();

  return (
    <Fragment>
      <div className="container">
        <article className="post">
          <header className="post__header">
            <h1 className="post__title">{post.fields.title}</h1>
            <p className="post__excerpt">{post.fields.excerpt}</p>
            <p className="post__date">Posted on {date}</p>
          </header>
          <img
            className="post__image full-width"
            src={post.fields.featuredImage.fields.file.url}></img>
          <section
            className="post__body"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(post.fields.body),
            }}></section>
        </article>
      </div>

      <style jsx>{`
        .post {
          padding-top: 5rem;
        }

        .post__header {
        }

        .post__title {
          font-size: 2.37rem;
          margin-bottom: 1rem;
        }

        .post__excerpt {
          font-size: 1.33rem;
          color: #777;
        }

        .post__date {
          color: #777;
        }

        .post__image {
          margin: 1rem 0 2rem 0;
        }

        .post__body {
          font-size: 1.33rem;
        }
      `}</style>
    </Fragment>
  );
};

export default Post;
