import classes from './index.module.css'
import CloseDayModal from '../ModalCloseDay'
import AddRaffleModal from '../ModalAddRaffle'

import { Text, Group, Badge } from '@mantine/core';
function ActionButtons() {
  return (
    <div className={classes.actionsWrapper}>
      <div className={classes.actionsButtons}>
        <AddRaffleModal />
        <CloseDayModal />
      </div>
    </div>
  )
}

export default ActionButtons