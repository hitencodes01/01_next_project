import SearchPagination from "@/components/SearchPagination";
export const metadata ={
  title:"Search"
}
export default function Search() {
  return (
    <div>
        <h1 className="header-1">Search in Digital News</h1>
        <SearchPagination />
    </div>
  )
}
