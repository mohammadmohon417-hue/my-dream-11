import { useState } from "react";
import logo from "../logo.png";

const Navbar = ({ coin }: { coin: number }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center">
              <img
                src={logo}
                alt="BPL Dream 11 Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-lg font-extrabold leading-none text-gray-900 md:text-xl">
                BPL <span className="text-yellow-500">DREAM 11</span>
              </h1>

              <p className="mt-1 text-[10px] tracking-wider text-gray-400">
                BUILD YOUR DREAM TEAM
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#home"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-yellow-50 hover:text-yellow-600"
            >
              Home
            </a>

            <a
              href="#players"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-yellow-50 hover:text-yellow-600"
            >
              Players
            </a>

            <a
              href="#team"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-yellow-50 hover:text-yellow-600"
            >
              My Team
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Coin Balance */}
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2">
              <span className="text-lg">🪙</span>

              <div className="hidden sm:block">
                <p className="text-[10px] leading-none text-gray-400">
                  BALANCE
                </p>

                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                  {coin}
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition hover:bg-gray-100 md:hidden"
            >
              <span className="text-xl">{isMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-yellow-50 hover:text-yellow-600"
              >
                Home
              </a>

              <a
                href="#players"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-yellow-50 hover:text-yellow-600"
              >
                Players
              </a>

              <a
                href="#team"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-yellow-50 hover:text-yellow-600"
              >
                My Team
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
