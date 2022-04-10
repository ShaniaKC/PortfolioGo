import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <nav className="block">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/developer">Developer</Link>
      </nav>
    </footer>
  );
};

export default Footer;
