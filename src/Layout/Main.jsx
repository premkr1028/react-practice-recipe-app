import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
export default function Main() {
  return (
    <main className="w-[100vw]">
      {/* <Navbar */}
      <Navbar />
      <Outlet />
    </main>
  );
}
