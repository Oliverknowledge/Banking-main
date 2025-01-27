import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { Source_Serif_4 } from 'next/font/google'
import React from 'react'

const Home = async() => {
  const LoggedIn = await getLoggedInUser();
  return (
    <section className = "home">
      <div className=  "home-content"><header className = "home-header">
      <HeaderBox 
      type = "greeting" 
      title = "Welcome" 
      user= {LoggedIn?.name}
      subtext =  "Access and manage your account efficiently"
      />

      </header>
      </div>
      <RightSidebar 
      user = {LoggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 750.02}, {currentBalance: 592.23}]}
      />
    </section>
  )
}

export default Home