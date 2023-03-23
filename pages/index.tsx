import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Review my answers :) </h1>
      <Link href="/question1">
        <button>Go!</button>
      </Link>
    </div>
  );
}
