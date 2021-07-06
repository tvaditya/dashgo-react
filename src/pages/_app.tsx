import { AppProps} from 'next/app';
import { ChakraProvider} from "@chakra-ui/react";
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../styles/theme';
import {SidebarDrawerProvider} from "../contexts/SidebarDrawerContext";
import { queryClient} from "../services/queryClient";
import {QueryClientProvider} from 'react-query';
import {makeServer} from "../services/mirage";

if (process.env.NODE_ENV === 'development') {
    makeServer()
}

// const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return  (
      <QueryClientProvider client={queryClient}>
          <ChakraProvider resetCSS theme={theme}>
              <SidebarDrawerProvider>
                  <Component {...pageProps} />
              </SidebarDrawerProvider>
          </ChakraProvider>
          <ReactQueryDevtools />
      </QueryClientProvider>
  )
}

export default MyApp

//resetCSS is true by default