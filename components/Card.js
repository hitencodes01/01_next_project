import Link from "next/link";

export default  function Card({ title, body, category, country, date }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3 text-sm">{body}</p>
      
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
          <Link href={`/category/${category.toLowerCase()}`}>
          📂 {category}
          </Link>
        </span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
          🌍  <Link href={'/country'}>
          📂 {country}
          </Link>
        </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
          📅 {date}
        </span>
      </div>
    </div>
  );
}

