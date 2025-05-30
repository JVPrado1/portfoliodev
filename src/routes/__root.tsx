import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navigation from "../components/Navigation";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  ),
});
