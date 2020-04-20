import React from 'react';
import { createClient } from 'contentful';
import Post from '../../components/post';

const client = createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_TOKEN,
});

const PostPage = ({ post }) => {
  return (
    <section className="post">{post && <Post post={post}></Post>}</section>
  );
};

export const getServerSideProps = async ctx => {
  const entries = await client.getEntries({
    content_type: 'work',
    'fields.slug[in]': ctx.query.slug,
  });
  const post = entries.items[0];

  return { props: { post } };
};

export default PostPage;
