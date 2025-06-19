import newsData from "@/data/newsData";
import Link from "next/link";
export default function Category() {
  const uniqueCategories = [...new Set(newsData.map((item) => item.category))];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🗂 All Categories</h1>
      <ul className="flex flex-wrap gap-4">
        {uniqueCategories.map((category) => (
          <li key={category}>
            <Link
              href={`/category/${category.toLowerCase()}`}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
