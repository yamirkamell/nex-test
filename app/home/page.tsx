import CardDemo from "@/components/card";

export default function Home (){
    return (
      <div className="w-full flex flex-col">
        <span className="text-lg text-initial"> Popular this season </span>
        <div className="flex w-full gap-x-10 overflow-x-auto">
          <CardDemo />
        </div>
      </div>
    );
  }