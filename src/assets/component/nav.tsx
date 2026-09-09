import logo from "../logo.png";

const Navbar = ({coin}:{coin:number}) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
    
    <div className="h-20 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={logo}
            alt="BPL Dream 11 Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <h1 className="text-lg md:text-xl font-extrabold leading-none text-gray-900">
            BPL <span className="text-yellow-500">DREAM 11</span>
          </h1>

          <p className="text-[10px] text-gray-400 mt-1 tracking-wider">
            BUILD YOUR DREAM TEAM
          </p>
        </div>

      </div>


      {/* Navigation */}
      <div className="hidden md:flex items-center gap-2">

        <a
          href="#home"
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200"
        >
          Home
        </a>

        <a
          href="#players"
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200"
        >
          Players
        </a>

        <a
          href="#team"
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200"
        >
          My Team
        </a>

      </div>


      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Coin Balance */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
          
          <span className="text-lg">
            🪙
          </span>

          <div className="hidden sm:block">
            <p className="text-[10px] text-gray-400 leading-none">
              BALANCE
            </p>

            <p className="text-sm font-bold text-gray-900">
             {coin}
            </p>
          </div>

        </div>


        {/* Mobile Menu */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-100 transition"
        >
          <span className="text-xl">
            ☰
          </span>
        </button>

      </div>

    </div>

  </div>
</nav>
  );
};

export default Navbar;