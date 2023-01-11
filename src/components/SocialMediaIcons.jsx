import linkedin_logo from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center mobile:justify-start m-10 gap-7 ">
      <a
        className="hover:opacity-50"
        href="https://www.linkedin.com/in/ricardo-sep%C3%BAlveda-72a136214/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked-link" src={linkedin_logo} />
      </a>
      <a
        className="hover:opacity-50"
        href="https://www.instagram.com/richie_sep/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-logo" src={instagram} />
      </a>
      <a
        className="hover:opacity-50"
        href="https://github.com/rychowiak"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-logo" src={github} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
