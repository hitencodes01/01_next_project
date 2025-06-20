import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full p-6" style={{backgroundColor : "#0f172a"}}>
      <div className="flex flex-row justify-center gap-10 items-center ">
        <h1 className="text-3xl text-white font-bold text-center">
          {" "}
          Digital News
        </h1>
        <ul className="flex flex-col gap-5">
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
          <li>
            <Link href={"/category"}>Category</Link>
          </li>
        </ul>
      </div>
      <p className="text-center text-gray-400 text-sm mt-4">
        © 2025 Digital News. All rights reserved.
      </p>
    </div>
  );
}
