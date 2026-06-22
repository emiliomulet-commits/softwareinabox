import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/architecture")({
  component: ArchitectureLayout,
});

function ArchitectureLayout() {
  return <Outlet />;
}