import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-rose-800 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="tablet:flex justify-center tablet:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Rich Sepúlveda
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 R/S/F. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
