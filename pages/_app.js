import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { createClient } from 'contentful';
import Layout from '../components/layout';
import '../styles.css';

config.autoAddCss = false;
library.add(faGithub, faLinkedin, faTwitter);

const client = createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_TOKEN,
});

export default function MyApp({ home, works, contact, Component, pageProps }) {
  return (
    <Layout home={home} contact={contact}>
      <Component {...pageProps} home={home} works={works} contact={contact} />
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const { items: entries } = await client.getEntries();

  const home = entries.filter(entry => entry.sys.contentType.sys.id === 'home');
  const works = entries.filter(
    entry => entry.sys.contentType.sys.id === 'work'
  );
  const contact = entries.filter(
    entry => entry.sys.contentType.sys.id === 'contact'
  );

  return { home, works, contact };
};
