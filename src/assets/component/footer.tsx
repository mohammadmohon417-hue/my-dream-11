
import { useState } from "react";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <footer className="mt-10 bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo */}
          <div>
            <h2 className="text-xl font-bold">
              BPL <span className="text-yellow-400">DREAM 11</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm text-gray-400">
              Build your ultimate BPL fantasy team and enjoy the excitement
              of cricket.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold">
              Quick Links
            </h3>

            <div className="space-y-2 text-sm">

              <a
                href="#home"
                onClick={() => handleLinkClick("home")}
                className={`block rounded-lg px-3 py-2 transition ${
                  activeLink === "home"
                    ? "bg-yellow-400 text-black"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Home
              </a>

              <a
                href="#players"
                onClick={() => handleLinkClick("players")}
                className={`block rounded-lg px-3 py-2 transition ${
                  activeLink === "players"
                    ? "bg-yellow-400 text-black"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                Players
              </a>

              <a
                href="#team"
                onClick={() => handleLinkClick("team")}
                className={`block rounded-lg px-3 py-2 transition ${
                  activeLink === "team"
                    ? "bg-yellow-400 text-black"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                My Team
              </a>

            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-400 hover:text-black">
                F
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-400 hover:text-black">
                I
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-yellow-400 hover:text-black">
                Y
              </button>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-5 text-center">
          <p className="text-sm text-gray-500">
            © 2026 BPL Dream 11. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;

