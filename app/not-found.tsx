import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="overline">404 / Not found</p><h1>THAT PAGE<br />ISN&apos;T HERE.</h1><Link className="outlined-button" href="/">Back to projects ↗</Link></main>;
}
