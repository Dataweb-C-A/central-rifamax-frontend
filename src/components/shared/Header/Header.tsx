import Profile from './Profile';
import LinksList from './LinksList';
import classes from './Header.module.css';
import { Image } from '@mantine/core';

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logoWrapper}>
        <Image 
          src="/images/logo1.png" 
          alt="Rifamax Logo" 
          h='1.5rem'
          className={classes.logo}
        />
      </div>
      <div className={classes.actionsWrapper}>
        <Profile />
        <LinksList />
      </div>
    </header>
  )
}

export default Navbar