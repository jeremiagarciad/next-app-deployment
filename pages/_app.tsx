import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

type NextPageWidthLayout = NextPage & {
  getLayout?: (page: ReactElement ) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWidthLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout ) {
  const getLayout = Component.getLayout || (( page ) => page);

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
