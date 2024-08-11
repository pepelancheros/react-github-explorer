import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__text">
          <p>
            This website was built using React and React Router. I also used the
            GitHub API to retrieve the data and the designs made by myself in
            this Figma mockup. I also made a similar site with Vue.js, here’s
            the link in case you want to check it.
          </p>
          <p>
            I worked on this with the aim to ensure a seamless experience across
            all devices and browsers. Accessibility is also one of my
            priorities. So feel free to explore the site and reach me out for
            any feedback or just saying hi.
          </p>
        </div>
      </div>
    </div>
  );
}
