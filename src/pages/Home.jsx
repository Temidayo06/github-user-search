import React from 'react'
import {Info, User, Search} from '../components'
import Loading from '../components/Loading'
import { useGlobalContext } from '../hooks/useGlobalContext'

const Home = () => {
 const {isLoading} = useGlobalContext()
 if (isLoading) {
  return(
    <main>
      <Search/>
      <Loading/>
    </main>
  )
 }
  return (
    <div>
        <main>
            <Search />
            <Info />
            <User />
        </main>
    </div>
  )
}

export default Home