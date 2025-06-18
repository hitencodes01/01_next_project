import Card from "./Card"
import styles from './CardContainer.module.css'
const CardContainer = ({data}) => {
return(
  <div className={styles["card-container"]}>
  {data.map(({id,title,body , category })=>(
    <Card title={title} body={body} category={category} key={id}/>))}
  </div>
)
}
export default CardContainer

  

