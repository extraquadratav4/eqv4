import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex content-end items-center justify-end p-4 z-50 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-400">
            home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-400">
            events
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">
            register
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-400">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}