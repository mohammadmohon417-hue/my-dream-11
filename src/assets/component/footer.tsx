const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-10">

      <div className="max-w-7xl mx-auto px-5 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-xl font-bold">
              BPL <span className="text-yellow-400">DREAM 11</span>
            </h2>

            <p className="text-gray-400 text-sm mt-4 max-w-sm">
              Build your ultimate BPL fantasy team and enjoy the excitement
              of cricket.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-2 text-sm text-gray-400">

              <a href="#home" className="block hover:text-white">
                Home
              </a>

              <a href="#players" className="block hover:text-white">
                Players
              </a>

              <a href="#team" className="block hover:text-white">
                My Team
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700">
                F
              </button>

              <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700">
                I
              </button>

              <button className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700">
                Y
              </button>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-5 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 BPL Dream 11. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;