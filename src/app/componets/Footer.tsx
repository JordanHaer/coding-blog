import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Jordan Haer. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <GitHubIcon />
          </li>
        </ul>
      </div>
    </footer>
  );
}
