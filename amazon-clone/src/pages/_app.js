import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout'


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
      <Provider store={store}> 
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Provider>
  )
}


