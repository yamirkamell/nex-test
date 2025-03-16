"use client"
import { Suspense, useEffect } from "react";
import Home from "./home/page";

export default function App() {

  useEffect(()=>{
    window.history.pushState(null, "", "/home");
  },[]);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Home />
    </Suspense>
  );
}
