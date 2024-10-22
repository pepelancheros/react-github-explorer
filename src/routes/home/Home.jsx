// import Search from "../../components/Search/Search";
import { Link } from "react-router-dom";
import manWavingHand from "../../assets/images/man-sitting-with-a-laptop.png";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      {/* <Search></Search> */}
      <div className="home__content">
        <img
          className="home__image"
          src={manWavingHand}
          alt="Young man sitting with a laptop and waving his hand."
        />
        <div className="home__text">
          <h2>Hey!</h2>
          <p>
            Welcome to the GitHub explorer. Here you can discover a world of
            open-source projects. Go to the explorer and type-in some keywords
            related to your search. You can also click on a repository to find
            more details.
          </p>
          <p>Enjoy your journey through the open-source community.</p>
          <Link className="home__button" to="/explorer">
            Take me to the explorer!
          </Link>
        </div>
      </div>
    </div>
  );
}
