import classes from './index.module.css'
import Titles from '@components/shared/Titles'
import ActionButtons from '@components/rifamax/home/ActionButtons'
import RafflesAccordion from '@components/rifamax/home/RafflesAccordion'
import { Pagination } from '@mantine/core'

interface IWrapper {
  children?: React.ReactNode
}

function index() {
  const Wrapper = ({ children }: IWrapper) => (
    <section className={classes.home}>
      <div className={classes.wrapper}>
        <Titles
          title='Dashboard de Rifas'
          desc='Aquí podrás gestionar todas tus rifas de manera sencilla y rápida.'
          className={classes.titlesWrapper}
        />
        <ActionButtons />
      </div>
      <Pagination
        className={classes.pagination}
        total={10}
        mt={10}
        siblings={0}
      />
      {children}
    </section>
  )

  return (
    <Wrapper>
      <RafflesAccordion step={1} data={[]} />
    </Wrapper>
  )
}

export default index