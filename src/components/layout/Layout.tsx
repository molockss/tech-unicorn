import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container flex-1">{children}</div>
      <Footer />
    </div>
  )
}
