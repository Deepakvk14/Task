import React from 'react'
import Header from '../../components/Header'
import Card from "../../components/Card"
import Details from '../../components/Deatils'
import Footer from "../../components/footer"
function Home() {
  return (
    <div>
        <Header/>
        <Details/>
      <h4> Releted Products</h4>

        <Card/>
        <Footer/>
    </div>
  )
}

export default Home