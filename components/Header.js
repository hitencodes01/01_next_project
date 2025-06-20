import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-amber-500 px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-3">
        <div className="text-2xl font-bold text-white">Digital News</div>
        <ul className="flex flex-wrap justify-center gap-3 md:gap-6 text-white font-semibold text-sm md:text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/search">Search</Link></li>
          <li><Link href="/category">Category</Link></li>
        </ul>
      </div>
    </div>
  );
}
