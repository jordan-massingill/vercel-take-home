import Link from "next/link";

export default function Question1() {
  return (
    <div>
      <h1>What do you want to learn or do more of at work?</h1>
      <p>
        {` I'd like to learn more about tooling, especially creating tooling.
        Product also interests me. At my previous company, I spent a lot of time
        thinking through product decisions, user questions, edge cases etc. I'd
        like to spend more time understanding and helping users, and learning
        how that translates into product decisions.`}
      </p>
      <Link href="/">
        <button>Previous</button>
      </Link>
      <Link href="/question2">
        <button>Next</button>
      </Link>
    </div>
  );
}
