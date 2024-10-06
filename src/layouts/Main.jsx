import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Outlet></Outlet>
      <Toaster/>
    </div>
  );
};

export default Main;