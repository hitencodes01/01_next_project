import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SearchNews from "@/components/SearchNews"
import newsData from "@/data/newsData"
export default async function CategoryTypes({params}) {
  const {categoryTypes} = await params
  const filteredNews = newsData.filter(item => item.category === categoryTypes)
  return (
    <div>
      <h1 className="header-1">Category : {categoryTypes.toUpperCase()}</h1>
      {/* <SearchNews newsData={filteredNews} /> */}
      <ul className="card-container">
        {filteredNews.map(item => <Card title={item.title} body={item.body} category={item.category} key={item.id} />)}
      </ul>
    </div>
  )
}
