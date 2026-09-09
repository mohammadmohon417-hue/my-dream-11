const Hero = () => {
  return (
    <section
  id="home"
  className="px-5 md:px-8 lg:px-10 mt-6"
>
  <div className="max-w-7xl mx-auto">

    <div
      className="
        relative
        min-h-105
        overflow-hidden
        rounded-3xl
        bg-gray-950
        bg-[url('/hero.png')]
        bg-cover
        bg-center
      "
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Yellow Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full"></div>


      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          min-h-105
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-5
        "
      >

        {/* Cricket Icon */}
        <div
          className="
            w-16
            h-16
            flex
            items-center
            justify-center
            rounded-full
            bg-yellow-400
            shadow-lg
            shadow-yellow-400/30
            mb-6
          "
        >
          <span className="text-3xl">
            🏏
          </span>
        </div>


        {/* Small Badge */}
        <span
          className="
            inline-flex
            items-center
            gap-2
            bg-white/10
            border
            border-white/20
            backdrop-blur-sm
            text-yellow-300
            text-xs
            md:text-sm
            font-semibold
            px-4
            py-2
            rounded-full
            mb-5
          "
        >
          🏆 BPL FANTASY CRICKET
        </span>


        {/* Heading */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            text-white
            leading-tight
            max-w-4xl
          "
        >
          Assemble Your
          <span className="text-yellow-400"> Ultimate Dream Team</span>
        </h1>


        {/* Description */}
        <p
          className="
            mt-5
            text-gray-300
            text-sm
            md:text-base
            max-w-2xl
            leading-7
          "
        >
          Pick your favorite BPL stars, manage your coins, and build
          the ultimate fantasy cricket team.
        </p>


        {/* Button */}
        <button
          className="
            mt-8
            flex
            items-center
            gap-2
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            font-bold
            px-7
            py-3.5
            rounded-xl
            shadow-lg
            shadow-yellow-400/20
            hover:-translate-y-0.5
            transition-all
            duration-200
          "
        >
          Claim Free Credit
          <span className="text-lg">
            →
          </span>
        </button>


        {/* Small Stats */}
        <div className="flex items-center gap-6 md:gap-10 mt-8">

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-white">
              1000+
            </p>
            <p className="text-xs text-gray-400">
              Players
            </p>
          </div>

          <div className="w-px h-8 bg-white/20"></div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-white">
              50K+
            </p>
            <p className="text-xs text-gray-400">
              Players Joined
            </p>
          </div>

          <div className="w-px h-8 bg-white/20"></div>

          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-white">
              24/7
            </p>
            <p className="text-xs text-gray-400">
              Fantasy Fun
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
  );
};

export default Hero;
