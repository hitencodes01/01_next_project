"use client";
import newsData from "@/data/newsData";
import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
export default function SearchPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const itemsPerPage = 10;

  //   filtering news
  useEffect(() => {
    const data = newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(data);
    setCurrentPage(1);
  }, [query]);

  //   rendering news after filter
  const totalPage = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <div>
      <div>
        {filteredNews.length > 0 ? (
          <p className="mb-4 text-sm text-gray-600">
            🔎 Found {filteredNews.length} result(s) for "
            <strong>{query}</strong>"
          </p>
        ) : (
          <p className="mb-4 text-red-500 text-sm">No results found.</p>
        )}

        <div className="search-bar">
          <input
            value={query}
            type="text"
            placeholder="Search news..."
            className="w-full max-w-md border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <CardContainer data={paginatedNews} />
      </div>
      {filteredNews.length > 0 && (
        <div
          className="p-2 flex justify-center gap-4"
          style={{ backgroundColor: "#0f172a" }}
        >
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded transition disabled:opacity-50 focus:ring focus:ring-offset-2"
          >
            ⬅️ Prev
          </button>
          <span className="px-4 py-2 font-bold">
            {"    "}Page {currentPage} of the {totalPage}
            {"   "}
          </span>
          <button
            disabled={currentPage === totalPage}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPage))
            }
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded transition disabled:opacity-50 focus:ring focus:ring-offset-2"
          >
            ➡️ Next
          </button>
        </div>
      )}
    </div>
  );
}
