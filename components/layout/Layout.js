import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h4>Next.js CRM</h4>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="http://reza-alaedini.ir" target="_blank" rel="noreferrer">
          Reza{" "}
        </a>
        &copy; | CRM with Next.js
      </footer>
    </>
  );
}

export default Layout;
