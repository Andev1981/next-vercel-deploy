import styles from './NavBar.module.css'
import {ActiveLink} from './ActiveLink'

export const NavBar = () => {

  const menuItems = [
    {
      text: 'Home',
      href:'/'
    },
    {
      text: 'About',
      href:'/about'
    }
    ,
    {
      text: 'Contact',
      href:'/contact'
    }
    ,
    {
      text: 'Pricing',
      href:'/pricing'
    }
  ]

  const menuNav = menuItems.map(({text, href}) =>

     <ActiveLink key={href} text={text} href={href} />

  )

  return (
        <nav className={styles.menu}>

           {menuNav}

        </nav>
  )
}
