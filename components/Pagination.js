"use client";
import newsData from "@/data/newsData";
import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
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
      <CardContainer data={currentNews} />
      <div className="flex justify-center gap-4 mb-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev-1 , 1)) }
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
    </div>
  );
}


