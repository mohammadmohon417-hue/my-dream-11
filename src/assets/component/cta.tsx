const CTA = () => {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-linear-to-r from-blue-50 via-white to-yellow-50 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Build Your Dream Team Today
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Choose your favorite BPL players and create your ultimate fantasy
            cricket team.
          </p>

          <a
            href="#players"
            className="mt-6 inline-block rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300 active:scale-95"
          >
            Start Selecting
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
