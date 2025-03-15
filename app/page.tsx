import { Suspense } from "react";
import Home from "./home/page";

export default function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Home />
    </Suspense>
  );
}
