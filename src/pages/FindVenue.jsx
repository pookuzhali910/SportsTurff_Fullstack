function FindVenue() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-3xl font-bold text-slate-800">
          Find Turf & Court
        </h1>

        <p className="mt-2 text-slate-500">
          Find a place to play your favourite sport.
        </p>

        <div className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow sm:grid-cols-3">

          <input
            type="text"
            placeholder="Enter location"
            className="rounded-lg border border-gray-300 px-4 py-3"
          />

          <select className="rounded-lg border border-gray-300 px-4 py-3">
            <option value="">Select Sport</option>
            <option>Football</option>
            <option>Cricket</option>
            <option>Badminton</option>
            <option>Basketball</option>
            <option>Volleyball</option>
          </select>

          <input
            type="date"
            className="rounded-lg border border-gray-300 px-4 py-3"
          />

          <button className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 sm:col-span-3">
            Search Courts
          </button>

        </div>

        <div className="mt-10 rounded-2xl border-2 border-dashed border-gray-300 bg-white p-10 text-center">
          <div className="text-5xl">🏟️</div>

          <h2 className="mt-4 text-xl font-semibold text-gray-700">
            No venues to display yet
          </h2>

          <p className="mt-2 text-gray-500">
            Venue listings will appear here once they are added.
          </p>
        </div>

      </div>
    </div>
  );
}

export default FindVenue;