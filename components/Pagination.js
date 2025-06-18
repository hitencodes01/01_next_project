"use client";
import newsData from "@/data/newsData";
import { useEffect, useState } from "react";
import Card from "./Card";
const itemsPerPage = 10;
export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentNews, setCurrentNews] = useState([])
  const totalPage = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
    useEffect(()=>{
        const partial = newsData.slice(startIndex, endIndex);
        setCurrentNews(partial)
    },[currentPage , setCurrentPage])
  return (
    <div>
      <ul className="card-container">
        {currentNews.map((items) => (
          <li key={items.id}>
            <Card
              title={items.title}
              body={items.body}
              category={items.category}
              key={items.id}
            />
          </li>
        ))}
      </ul>
      <br />
      <div className="mt-6 flex justify-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev-1 , 1)) }
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 text-black"
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
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 text-black"
        >
          ➡️ Next
        </button>
      </div>
    </div>
  );
}
