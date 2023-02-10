export default function Question2() {
  return (
    <div>
      <h1>
        Describe how you solved a challenge that one of your previous support
        teams faced. How did you determine your solution was successful?
      </h1>
      <p>
        In my previous role, we were a small team with only two customer success
        managers for over 100,000 users. So, each engineers spent one week of
        each month on call as support engineer. Because of that, we would often
        see requests for- or complaints about- the same things on a regular
        basis. For the things we couldn't (or wouldn't) fix, I started creating
        scripts for others to use. For things we could fix, I did. <br />
        <br />
        My favorite example of that was fixing an accessibility issue. By
        default, we built all of our features to follow WCAG accessibility
        guidelines. However, images (a main feature of our product) didn't have
        an option to add alt text. Due to this, many organizations couldn't use
        our app because it couldn't be made accessible for all of their users.
        So, as a hackathon project, I built in the option to add alt text (like
        Twitter does). This reduced the number of accessibility complaints and
        requests we were getting, as well as landing us several hold-out
        contracts that wouldn't have otherwise used our tool.
      </p>
    </div>
  );
}
