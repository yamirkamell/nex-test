import { ReactNode } from "react";

export default function Layout(
    {children}: { children: ReactNode }
) {
  return (
      <section>
        <div className="py-20 px-6"> {children} </div>
      </section>
  );
}