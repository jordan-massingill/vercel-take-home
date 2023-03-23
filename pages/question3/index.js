export default function Question3() {
  return (
    <div>
      <h1>
        How would you compare Next.js with another framework? Feel free to
        compare with a framework of your choice.
      </h1>
      <p>
        It's easiest for me to compare Next.js with React Router + Redux, since
        that's what has historically been used in it's place in my professional
        experience. <br />
        <br />
        React is what I used to learn web development (after JavaScript), along
        with Router for routing and Redux for more complex state management.
        While Router is fairly straightforward, it doesn't make as much
        organizational or semantic sense, imo, to have all possible routed pages
        conditionally rendered in the main page. Since routes often work
        similarly to file systems, having them reflected in the file system is
        more clear.
        <br />
        <br />
        Additionally, Redux has always felt needlessly complex in its
        implementation, particularly with larger apps and more data (which was
        its purpose). Using context within Next.js apps, in my experience, has
        proven to be both more easily understood and quicker to implement for
        most state management needs (along with other Next.js data fetching
        utils, when necessary).
        <br />
        <br />
        Overall, Next has a lot of great built-in functionality (data fetching,
        client- and server-side-rendering, etc) and makes building more
        enjoyable and less burdensome than building without it.
      </p>
      <Link href="/question2">
        <button>Previous</button>
      </Link>
      <Link href="/question4">
        <button>Next</button>
      </Link>
    </div>
  );
}
