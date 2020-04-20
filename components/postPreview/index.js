import React, { Fragment } from 'react';
import Link from 'next/link';

const PostPreview = ({ post }) => {
  const date = new Date(post.fields.date).toDateString();

  return (
    <Fragment>
      <Link href="/post/[slug]" as={`/post/${post.fields.slug}`} passHref>
        <article className="post">
          <img
            className="post__image"
            src={post.fields.featuredImage.fields.file.url}></img>
          <header className="post__header">
            <h2 className="post__title">{post.fields.title}</h2>
            <p className="post__date">{date}</p>
          </header>
          <section className="post__body">
            <p className="post__excerpt">{post.fields.excerpt}</p>
          </section>
        </article>
      </Link>

      <style jsx>{`
        .post {
          margin-bottom: 6rem;
          cursor: pointer;
        }

        .post:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .post__image {
        }

        .post__header {
        }

        .post__title {
          font-size: 1.77rem;
          margin-bottom: 0.75rem;
        }

        .post__date {
        }

        .post__body {
        }

        .post__excerpt {
          font-size: 1.33rem;
          margin-bottom: 3rem;
        }
      `}</style>
    </Fragment>
  );
};

export default PostPreview;
