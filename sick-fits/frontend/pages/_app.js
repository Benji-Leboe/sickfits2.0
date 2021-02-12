import Page from '../components/Page.js';

// TODO: swap with own
import 'nprogress/nprogress.css';

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component { ...pageProps } />
    </Page>
  )
}
