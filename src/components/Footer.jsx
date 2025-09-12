import config from "../config";
import { MailIcon, GithubIcon, LinkedinIcon, CodolioIcon } from "../icons";

export default function Footer() {
  const mailHref = `mailto:${config.email}?subject=${encodeURIComponent(
    `Hello ${config.name?.split?.(" ")?.[0] || "there"}`
  )}`;
  const gh = config.socials?.github || "#";
  const li = config.socials?.linkedin || "#";
  const co = config.socials?.codolio || "#";

  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="mx-auto w-full max-w-[1340px] px-6 lg:px-10 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href={mailHref}
            aria-label="Email"
            className="hover:text-white transition-colors"
          >
            <MailIcon className="w-6 h-6" />
          </a>
          <a
            href={gh}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={li}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href={co}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codolio"
            className="hover:text-white transition-colors"
          >
            <CodolioIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
