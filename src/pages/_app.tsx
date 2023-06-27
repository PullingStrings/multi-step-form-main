import { AppProps } from "next/app"
import { FormProvider } from "../utils/formContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  )
}

export default MyApp
