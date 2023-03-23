import Link from "next/link";

export default function Question6() {
  return (
    <div>
      <h1>
        {` What do you think is one of the most common problems which customers ask
        Vercel for help with? How would you help customers to overcome common
        problems, short-term and long-term?`}
      </h1>
      <p>
        {` Based on my experience as an engineer, my guess is that the most common
        problems are build and deployment issues. `}
        <br />
        <br />
        {`Short term, I'd help customers by delving into their problems with them,
        empathizing, and giving them tools to overcome those issues.
        Longer-term, I'd surface the issues for correction, depending on
        priority and severity, or submit a fix myself if feasible.`}
      </p>
      <Link href="/question5">
        <button>Previous</button>
      </Link>
      <Link href="/question7">
        <button>Next</button>
      </Link>
    </div>
  );
}
