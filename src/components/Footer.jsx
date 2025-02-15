import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" p-4 border-t-2 border-t-gray-300">
    <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
        <Link href="/" className="">Home</Link>
        <Link href="/about" className="">About</Link>
        <Link href="/projects" className="">Projects</Link>
        <Link href="/uses" className="">Uses</Link>
        </div>
        <div>
        <p className="text-gray-900 dark:text-gray-600">&copy; {new Date().getFullYear()} Your Name</p>
        </div>
    </div>
    </footer>

  );
}
