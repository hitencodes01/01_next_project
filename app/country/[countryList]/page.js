import Card from "@/components/Card"
import newsData from "@/data/newsData"
import styles from "../../../components/CardContainer.module.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default async function CountryList({params}) {
    const {countryList} = await params
    const news = newsData.filter(item => item.country.toLowerCase() === countryList.toLowerCase())
    console.log(news)
  return (
    <div>
        <h1>Country : {countryList.toUpperCase()}</h1>
        <ul className={styles["card-container"]} >
            {news.map(item => <li key={item.id}>
              <Card title={item.title} body={item.body} category={item.category} />
            </li>)}
        </ul>
    </div>
  )
}
