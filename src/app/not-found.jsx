import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-white">Page Not Found</h2>
      <p className="text-lg mt-2 text-white">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 px-6 py-3  text-white rounded-lg shadow  transition duration-300 bg-primary">
        Go back home
      </Link>
    </div>
  );
}
