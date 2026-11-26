import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    alert("Login form submitted!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-green-700">
            TurfNest
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Find your game. Book your court.
          </p>
        </div>

<div className="mb-8 text-center">
        <h2 className="mb-2 text-1xl font-semibold text-gray-600">
          Player Login
        </h2>

        <p className="mb-6 text-sm text-gray-500">
          Welcome back! Login to continue.
        </p>
        </div>

        <form onSubmit={handleSubmit}>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-5 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-20 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-sm font-medium text-green-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="my-5 flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-green-600"
              />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="font-medium text-green-700 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="font-semibold text-green-700">
            Sign up
          </a>
        </p>

        <div className="mt-6 border-t pt-5 text-center">
          <p className="text-sm text-gray-500">
            Are you a venue owner?
          </p>

          <a
            href="/owner-login"
            className="mt-2 inline-block font-semibold text-green-700 hover:underline"
          >
            Venue Owner Login
          </a>
        </div>

      </div>
    </div>
  );
}

export default Login;