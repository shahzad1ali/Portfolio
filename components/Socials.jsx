import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
  { name: "GitHub", icon: <FaGithub />, path: "https://github.com/shahzad1ali" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/shahzad-ali-761444369/" },
  { name: "YouTube", icon: <FaYoutube />, path: "https://www.youtube.com/@Shahzad-ali62" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
  <div className={containerStyles}>
    {socials.map((item, index) => {
        return (
            <Link
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${item.name} profile`}
              className={`interactive-card ${iconStyles}`}
            >
                {item.icon}
            </Link>
        );
    })}
  </div>
  );
};

export default Social;