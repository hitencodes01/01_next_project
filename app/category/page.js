import newsData from "@/data/newsData";
import Link from "next/link";
export default function Category() {
  const uniqueCategories = [...new Set(newsData.map((item) => item.category))];
  return (
    <div>
      <h1>Category</h1>
    <ul>
      {uniqueCategories.map((category => 
        <li key={category}>
          <Link href={`/category/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
