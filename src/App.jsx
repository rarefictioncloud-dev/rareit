import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    <div className="[zoom:0.8]">
      <RouterProvider router={router} />
    </div>
  );
}