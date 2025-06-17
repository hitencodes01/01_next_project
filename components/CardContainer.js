import Card from "./Card"
import styles from './CardContainer.module.css'
import newsData from "@/data/newsData"
const CardContainer = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const post = await response.json()

return(
  <div className={styles["card-container"]}>
  {newsData.map(({id,title,body , category })=>(

    <Card title={title} body={body} category={category} key={id}/>))}
  </div>
)
}
export default CardContainer

  

