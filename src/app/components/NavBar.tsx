import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <img className="w-[64px] h-[28px] cursor-pointer" src="./logo.svg" alt="logo" />
        </Link>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>
          <a href="#reviews" className="text-gray-600 hover:text-blue-600">
            Reviews
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Get Started</button>
      </div>
    </nav>
  );
}
