import classes from './card.module.css'

const CardUser = () => {
  return (
    <div className={classes.conteiner}>
        <img src="/assets/imgs/user-01.jpg" alt="user" />
        <h2>user 1</h2>
    </div>
  )
}

export default CardUser