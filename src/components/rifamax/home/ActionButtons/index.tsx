import classes from './index.module.css'
import CloseDayModal from '../ModalCloseDay'
import AddRaffleModal from '../ModalAddRaffle'

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