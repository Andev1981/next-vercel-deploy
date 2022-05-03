import {  FC,PropsWithChildren } from 'react'

import Head from 'next/head'
import styles from './MainLayout.module.css'
import { NavBar } from '../NavBar'


export const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {

    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <NavBar></NavBar>
    
    
          <main className={styles.main}>
          
                {children}

          </main>
        </div>
      )
  
}
