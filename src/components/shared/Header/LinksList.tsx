import useUser from '@hooks/useUser'
import classes from './LinksList.module.css'
import LoaderBlur from '@components/shared/Loaders/LoaderBlur'
import { ReactNode } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { ILinksList } from '@interfaces/index'
import { IconMenu2 } from '@tabler/icons-react'
import { HeaderLinks } from '@assets/HeaderLinks'
import { Drawer, Button, Title, Text } from '@mantine/core'
import { useLocation, useNavigate } from 'react-router-dom'

function LinksList({ position }: ILinksList) {
  const [opened, { open, close }] = useDisclosure(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { user } = useUser()

  const filteredLinks = Object.keys(HeaderLinks).reduce((acc, key) => {
    if (HeaderLinks[key]) {
      acc[key] = HeaderLinks[key].filter(headerLink => headerLink.role.includes(user?.role || ''))
    }
    return acc
  }, {} as { [key: string]: { title: string; to: string; role: string[]; icon?: ReactNode }[] })

  const handleNavigate = (to: string) => {
    navigate(to)
    close()
  }

  const RenderLinks = () => {
    return Object.keys(filteredLinks).map((key) => (
      filteredLinks[key] && filteredLinks[key].length > 0 && (
        <div key={key}>
          <Text className={classes.titleLink} c='dimmed'>{key}</Text>
          <ul className={classes.lists}>
            {filteredLinks[key]?.map((filteredLink, index) => (
              <li 
                key={index} 
                onClick={() => handleNavigate(filteredLink.to)}
                className={`${classes.navList} ${pathname === filteredLink.to ? classes.current : ''}`}
              >
                <Text className={classes.navRedirect} fz={24}>
                  {filteredLink.title}
                </Text>
                <div className={classes.navIcon}>
                  {filteredLink.icon}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )
    ))
  }

  return (
    <>
      <Drawer 
        opened={opened} 
        onClose={close} 
        position={position}
        size='sm'
        title={<Title fz={28} mb={5}>Centro de Interacción</Title>}
      >
        { user ? <RenderLinks /> : <LoaderBlur /> }
      </Drawer>
      <Button
        variant='default'
        style={{ border: 'none' }}
        onClick={open}
      >
        <IconMenu2 size='2rem' />
      </Button>
    </>
  )
}

export default LinksList