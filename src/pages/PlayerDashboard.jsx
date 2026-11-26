import { Link } from "react-router-dom";

function PlayerDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <nav className="flex items-center justify-between bg-[#07111f] px-8 py-5">
        <h1 className="text-2xl font-bold text-white">
          Turf<span className="text-green-400">Nest</span>
        </h1>

        <button className="rounded-lg border border-slate-600 px-4 py-2 text-white hover:bg-slate-800">Logout</button>
      </nav>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Welcome, Player! 👋</h2>
          <p className="mt-2 text-slate-500">Ready for your next game?</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <Link to="/find-venue" className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 text-4xl">🏟️</div>
            <h3 className="text-xl font-bold text-slate-800">
            Find Turf
            </h3>
            <p className="mt-2 text-sm text-slate-500">Search and book your favourite sports court.</p>
          </Link>

          <Link to="/my-bookings" className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 text-4xl">📅</div>
            <h3 className="text-xl font-bold text-slate-800">My Bookings</h3>
            <p className="mt-2 text-sm text-slate-500">View and manage your bookings.</p>
          </Link>

          <Link to="/open-matches" className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 text-4xl">⚽</div>
            <h3 className="text-xl font-bold text-slate-800">
            Open Matches
            </h3>
            <p className="mt-2 text-sm text-slate-500">
            Join matches and find teammates.
            </p>
          </Link>

          <Link
            to="/create-match" className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 text-4xl">🤝</div>
            <h3 className="text-xl font-bold text-slate-800">Create Match</h3>
            <p className="mt-2 text-sm text-slate-500">
            Create a match and invite other players.
            </p>
          </Link>

          <Link to="/player-profile" className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 text-4xl">👤</div>
            <h3 className="text-xl font-bold text-slate-800">
            My Profile
            </h3>
            <p className="mt-2 text-sm text-slate-500">
            View your profile and match history.
            </p>
          </Link>

        </div>
      </main>
    </div>
  );
}

export default PlayerDashboard;