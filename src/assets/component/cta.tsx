const CTA = () => {
  return (
    <section className="px-5 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-50 via-white to-yellow-50 border border-gray-200 p-8 md:p-12 text-center">

          <h2 className="text-2xl md:text-3xl font-bold">
            Build Your Dream Team Today
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Choose your favorite BPL players and create your ultimate
            fantasy cricket team.
          </p>

          <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg transition">
            Start Selecting
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;