import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2">
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/profile" className="hover:text-gray-300">
          Profile
        </Link>
        <Link href="/settings" className="hover:text-gray-300">
          Settings
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hover:text-gray-300">
          Login
        </Link>
        <Link href="/register" className="hover:text-gray-300">
          Register
        </Link>
      </div>
    </div>
  );
}
