export default function Question4() {
  return (
    <div>
      <h1>
        When would you choose to use Edge Functions, Serverless Functions, or
        Edge Middleware with Vercel?
      </h1>
      <p>
        I don't have a ton of background knowledge regarding edge/serverless
        functions or edge middleware, but based on Vercel docs, it looks like
        all 3 can be used with Vercel, depending on the use case and what
        tradeoffs are acceptable. <br />
        <br />
        Edge functions are good to use when the userbase is globally distributed
        and you want a faster response time/lower latency and your functions are
        smaller than a serverless function might be. <br />
        <br />
        Serverless is good to use to complete more complex code/larger files,
        and can be either distributed or localized, though localization may mean
        higher latency. Serverless functions handle the meat and potatoes of
        basic app functionality (authentication, form submission, queries,
        etc.). <br />
        <br />
        Edge middleware allows you to perform an action prior to a request being
        completed, so if you want to individualize your app's behavior based on
        certain user conditions, you can.
      </p>
    </div>
  );
}
