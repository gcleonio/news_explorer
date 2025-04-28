import "../About/About.css";
import authorImage from "../../assets/meditation.jpg";

const About = () => {
  return (
    <section className="about">
      <img
        alt="author image"
        className="about__author-image"
        src={authorImage}
        loading="lazy"
      ></img>
      <div className="about__content">
        <h2 className="about__header">About the author</h2>
        <p className="about__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <p className="about__description">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </section>
  );
};

export default About;
