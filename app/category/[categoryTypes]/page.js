import newsData from "@/data/newsData"
export default async function CategoryTypes({params}) {
  const {categoryTypes} = await params
  const filteredNews = newsData.filter(item => item.category === categoryTypes)
  return (
    <div>
      <h1 className="text-white">Category : {categoryTypes}</h1>
      <ul>
        {filteredNews.map(item => <li key={item.id}>
          {item.title}
        </li>)}
      </ul>
    </div>
  )
}
