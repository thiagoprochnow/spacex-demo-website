"use client";

import apiCalls from "@/graphql";
import { ShipsQuery } from "@/util/types/graphql";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ShipDetails } from "./components/ShipDetails";

export default function Home() {
  const [showDetails, setShowDetails] = useState<boolean[]>([]);

  const toggleShowHideDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  }

  const { data } = useQuery<ShipsQuery>(apiCalls.queries.ships, {
    fetchPolicy: "cache-and-network",
    variables: {
      input: {
        pagination: {
          limit: 50,
          offset: 1
        }
      }
    }
  });

  return (
    <main className="flex justify-center min-h-screen p-14">
      <div className="w-full max-w-7xl justify-between flex flex-col gap-2">
        {data?.ships?.map((ship, index) => {
          return (
            <>
              <div key={index} className="flex px-4" onClick={() => toggleShowHideDetails(index)}>
                {ship?.name}
              </div>
              <div key={`ship-details-${index}`} className="flex px-4">
                { showDetails[index] ? <ShipDetails index={index} imageSrc={ship?.image || ''} /> : <></> }
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
