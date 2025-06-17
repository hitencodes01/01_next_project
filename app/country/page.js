import newsData from "@/data/newsData"
import Link from "next/link"
export default function page() {
const countryList = [... new Set(newsData.map(item => item.country))]
console.log(countryList)
  return (
    <div>
        <h1>Country</h1>
        <ul>
            {countryList.map(item => <li key={item}><Link href={`/country/${item.toLowerCase()}`}>{item}</Link></li>)}
        </ul>
    </div>
  )
}
