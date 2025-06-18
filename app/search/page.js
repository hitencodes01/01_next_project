import SearchNews from "@/components/SearchNews";
import newsData from "@/data/newsData";
export default function Search() {
  return (
    <div>
        <h1 className="header-1">Search in Digital News</h1>
        <SearchNews newsData={newsData} />
    </div>
  )
}
