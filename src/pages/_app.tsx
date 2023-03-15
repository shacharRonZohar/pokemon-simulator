import type { AppType } from 'next/app'
import MainLayout from '~/components/MainLayout'
import { api } from '~/utils/api'

import '~/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default api.withTRPC(MyApp)
