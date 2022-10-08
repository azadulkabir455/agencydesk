import React from 'react'
import GlobalHeader from './GlobalsWidgets/GlobaleHeader/GlobalHeader'
import GlobalFooter from './GlobalsWidgets/GlobalFooter/GlobalFooter'
import "./Resources/CSS/global.scss"
import Routers from './Routers/Routers'

export default function App() {
  return (
    <>
      <GlobalHeader />
      <Routers />
      <GlobalFooter />
    </>
  )
}
