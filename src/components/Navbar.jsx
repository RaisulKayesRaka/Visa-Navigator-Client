import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F6F4EB]">
      <div className="mx-auto flex w-11/12 max-w-screen-2xl items-center justify-between gap-4 py-4">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/visa-navigator-logo-48.png"
            className="h-8"
            alt="Visa Navigator Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            Visa Navigator
          </span>
        </div>
        <div className="flex items-center justify-center gap-8 whitespace-nowrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "active font-semibold text-[#4682A9] underline decoration-[#4682A9] decoration-2 underline-offset-4"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-visas"
            className={({ isActive }) =>
              isActive
                ? "active font-semibold text-[#4682A9] underline decoration-[#4682A9] decoration-2 underline-offset-4"
                : ""
            }
          >
            All Visas
          </NavLink>
          <NavLink
            to="/add-visa"
            className={({ isActive }) =>
              isActive
                ? "active font-semibold text-[#4682A9] underline decoration-[#4682A9] decoration-2 underline-offset-4"
                : ""
            }
          >
            Add Visa
          </NavLink>
          <NavLink
            to="/my-added-visas"
            className={({ isActive }) =>
              isActive
                ? "active font-semibold text-[#4682A9] underline decoration-[#4682A9] decoration-2 underline-offset-4"
                : ""
            }
          >
            My Added Visas
          </NavLink>
          <NavLink
            to="/my-visa-applications"
            className={({ isActive }) =>
              isActive
                ? "active font-semibold text-[#4682A9] underline decoration-[#4682A9] decoration-2 underline-offset-4"
                : ""
            }
          >
            My Visa Applications
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "active rounded border-[#4682A9] bg-[#4682A9] px-3 py-1 font-semibold text-white"
                : "rounded border border-[#4682A9] px-3 py-1 text-[#4682A9]"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "active rounded border-[#4682A9] bg-[#4682A9] px-3 py-1 font-semibold text-white"
                : "rounded border border-[#4682A9] px-3 py-1 text-[#4682A9]"
            }
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
