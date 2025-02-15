// Links
import Link from "next/link";

// Icons
import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Fanndev" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mohamad-irfan-f-988329322/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/fanndev._/" },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      );
    })}
  </div>;
};

export default Socials;
