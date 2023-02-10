export default function Question5() {
  return (
    <div>
      <h1>
        Imagine a customer writes in, requesting help with the following
        question. Write a first response for triaging this case and helping them
        solve the issue.
      </h1>
      <h3>
        Hi there, I keep getting a build error from Vercel saying that
        “/vercel/path0/dist/routes-manifest.json” couldn’t be found. Can you
        help me debug this?? I’m so frustrated. I’ve been trying to make this
        work for hours and I just can’t figure it out. Your docs aren’t helpful.
      </h3>
      <p>
        Hi [name], <br />
        <br />
        I'm sorry to hear you're having trouble and haven't been able to find
        anything helpful in the docs. I'm happy to look into this and help you
        find a solution. Could you tell me a bit more about what happened
        leading up to this issue? A screenshot of your error logs would also be
        great! Thanks for writing in! Jordan
      </p>
    </div>
  );
}
