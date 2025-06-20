"use client";
import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
export default function SearchNews({ newsData }) {
  const [query, setQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  useEffect(() => {
    const result = newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(result);
  }, [query, setQuery]);

  return (
    <div className="">
      <div className="search-bar">
        <input
          value={query}
          type="text"
          placeholder="Search news..."
          className="w-full max-w-md border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <CardContainer data={filteredNews} />
    </div>
  );
}
