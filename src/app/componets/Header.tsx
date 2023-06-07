import Link from "next/link";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "About" },
    { href: "/", label: "Contact" },
  ];
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Jordan&apos;s Blog
            </Link>
          </div>
          <div>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="inline-block py-2 px-4 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
