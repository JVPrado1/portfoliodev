import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navigation from "../components/Navigation";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full bg-black/90">
      <Navigation />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  ),
});
