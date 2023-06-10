import GitHubIcon from "../icons/GitHubIcon";
import GmailIcon from "../icons/GmailIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

const footerIcons = [
  { link: "https://github.com/JordanHaer", icon: <GitHubIcon /> },
  { link: "https://linkedin.com/in/JordanHaer", icon: <LinkedInIcon /> },
  { link: "mailto:jordanhaer@gmail.com", icon: <GmailIcon /> },
];

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto p-4 flex justify-center sm:justify-between items-center">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Jordan Haer. All rights reserved.
        </p>
        <ul className="items-center gap-4 hidden sm:flex">
          {footerIcons.map(({ link, icon }) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
