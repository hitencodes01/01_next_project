import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between bg-amber-500 px-10 py-5 items-center">
      <div className="text-3xl">Digital News</div>
      <ul className="flex gap-8 text-white font-semibold text-lg">

        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/news"}>News</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}
