import { ReactNode } from "react";
import Header from "@/components/header";

export default function Layout(
    {children}: { children: ReactNode }
) {
  return (
      <section>
        <Header/>
        <div className="py-20 px-6"> {children} </div>
      </section>
  );
}