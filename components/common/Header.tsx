import Link from 'next/link';

function Header() {
  return (
    <header className="p-4">
      <nav>
        <ul className="flex flex-row gap-4 justify-end font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
