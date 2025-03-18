"use client"

import CardDemo from "@/components/card";
import { useQuery } from "@apollo/client";
import { GET_ALLTIME_POPULAR_ANIMES } from '@/graphql/queries'
 

export default function AllTimePopular (){

  const { loading, error, data, refetch } = useQuery(GET_ALLTIME_POPULAR_ANIMES, {
    variables: {
        perPage: 6,
        sort: ["POPULARITY_DESC"],
        type: "ANIME",
        isAdult: false,
    },
  }
  );

    return (
    <>
      { error ?
        <p>Error: { error.message } </p>
        :
        <>
      <div className="w-full flex flex-col mt-10">
        <span className="text-base font-bold text-[#8F8F8F] px-2"> ALL TIME POPULAR </span>
        <div className="flex w-full gap-x-10 overflow-x-auto">
        { loading ?
          <p>Loading...</p> 
          :
          data?.Page?.media.map((item: any, index: number) => (
            <CardDemo key={index} item={item}/>
          ))
        }
        </div>
      </div>
      </>
      }
    </>
    );
  }