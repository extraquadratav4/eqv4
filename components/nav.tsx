import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex content-end items-center justify-end p-4 z-50 shadow-md font-mono text-xl">
      <ul className="flex space-x-4 transition">
        <li>
          <Link href="/" className="hover:text-gray-400 transition">
            home
          </Link>
        </li>
        <li>
          <Link href="/#events" className="hover:text-gray-400 transition">
            events
          </Link>
        </li>
        <li>
          <Link href="/register" className="hover:text-gray-400 transition">
            register
          </Link>
        </li>
        <li>
          <Link href="/team" className="hover:text-gray-400 transition">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}
