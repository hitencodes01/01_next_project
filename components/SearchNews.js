"use client";
import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
export default function SearchNews({newsData}) {
  const [query, setQuery] = useState("");
  const [filteredNews ,setFilteredNews] = useState([])
  useEffect(() => {
    const result = newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(result)
  }, [query,setQuery]);

  return (
    <div className="">
      <div className="search-bar">
      <label htmlFor="searchInput">Search</label>
      <input
        type="text"
        value={query}
        id="searchInput"
        placeholder="search for ..."
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
      <CardContainer data={filteredNews} />
    </div>
  );
}
