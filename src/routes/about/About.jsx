import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__text">
          <p>
            This website was built using React.js and React Router. Additionaly,
            I used the <a href="https://docs.github.com/en/rest">GitHub API</a>{" "}
            to retrieve the data and the designs made by myself in{" "}
            <a href="https://www.figma.com/design/a4KSEn3Z65ljOOyz7YPg8V/github-explorer?t=5VRE6x1W0IkkwWWL-1">
              this Figma mockup
            </a>
            . Also, I made a{" "}
            <a href="https://github-explorer-pepeligroso.netlify.app/">
              similar site with Vue.js
            </a>{" "}
            in case you want to check it.
          </p>
          <p>
            I worked on this with the aim to ensure a seamless experience across
            all devices and browsers. Accessibility is also one of my
            priorities. So feel free to explore the site and reach me out for
            any feedback or just saying hi.
          </p>
        </div>
        <div className="about__image-container">
          <img
            src="src/assets/images/collegues-working-at-the-desk.png"
            alt="colleagues working at a desk"
          />
        </div>
      </div>
      <div className="about__contact-info">
        <h3>Contact me at: </h3>
        <p>
          <span>
            <img
              className="github-logo"
              src="src/assets/images/github-logo.png"
              alt="github logo"
            />
          </span>{" "}
          <a href="https://github.com/pepelancheros">pepelancheros</a>
        </p>
        <p>
          <span>
            <img
              src="src/assets/images/linkedin-logo.png"
              alt="linkedin logo"
            />
          </span>{" "}
          <a href="https://www.linkedin.com/in/sebastian-lancheros/">
            Sebastian Lancheros Olarte
          </a>
        </p>
        <p>
          <span>
            <img
              src="src/assets/images/instagram-logo.png"
              alt="instagram logo"
            />
          </span>{" "}
          <a href="https://www.instagram.com/pepeligroso_/">@pepeligroso_</a>
        </p>
        <p>
          <span class="material-symbols-outlined">mail</span>{" "}
          <a href="mailto:pepe.lancheros@gmail.com">pepe.lancheros@gmail.com</a>
        </p>
      </div>
      <small>
        <div>
          Illustrations by{" "}
          <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
            Icons 8
          </a>{" "}
          from <a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
        <div>
          Social media logos by{" "}
          <a href="https://www.flaticon.com/free-icons/linkedin">riajulislam</a>
          , <a href="https://www.flaticon.com/free-icons/cat">Dave Gandy</a> and{" "}
          <a href="https://www.flaticon.com/free-icons/instagram">Freepik</a>{" "}
          taken from{" "}
          <a href="https://www.flaticon.com/free-icons">free icons</a>{" "}
        </div>
      </small>
    </div>
  );
}
