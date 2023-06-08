import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto p-4 flex justify-center sm:justify-between items-center">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Jordan Haer. All rights reserved.
        </p>
        <ul className=" items-center gap-4 hidden  sm:flex">
          <li>
            <a href="https://github.com/JordanHaer" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/JordanHaer" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
