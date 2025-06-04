import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navigation from "../components/Navigation";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full bg-black/90 overflow-x-hidden ">
      <Navigation />
      <main className="w-full ">
        <Outlet />
      </main>
    </div>
  ),
});
