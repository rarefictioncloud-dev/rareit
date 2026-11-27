import { RouterProvider } from "react-router-dom";
import router from "./router";

const ZOOM_LEVEL = 0.85; // 1 = 100%, 0.85 = zoomed out by 15%

export default function App() {
  return (
    <div style={{ zoom: ZOOM_LEVEL }}>
      <RouterProvider router={router} />
    </div>
  );
}