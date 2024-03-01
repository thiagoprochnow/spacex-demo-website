import { useQuery } from "@apollo/client";
import { MissionsQuery } from "../../../util/types/graphql";
import apiCalls from "../../../graphql";
import React from "react";
import { MissionsList } from "./MissionsList"

export type GetMissionsResult = {
    names : string[],
    loading: boolean
  }

const getShipMissions = (shipId: string, index: number): GetMissionsResult => {
    const { data, loading } = useQuery<MissionsQuery>(apiCalls.queries.missions, {
      fetchPolicy: "cache-and-network",
      variables: {
        input: {
          shipId: shipId
        }
      }
    });

    const names = data?.missions?.map((mission) => mission.name || '') || [];

    return { names, loading}
  }

export const MissionsDetails = (props: {index: number, shipId: string}) => {
    const { names, loading } = getShipMissions(props.shipId, props.index);

    return (
      <div>
        {loading ? <div className="loading-spinner"></div> : <MissionsList names={names} /> }
      </div>
    )
  }