import React from "react"
import { MissionsDetails } from "../Missions/MissionsDetails"

export const ShipDetails = (props: {index: number, imageSrc: string, shipId: string}) => {
    return (
      <div>
        <MissionsDetails index={props.index} shipId={props.shipId} />
        <div key={`image-${props.index}`}>
          <img src={props.imageSrc}></img>
        </div>
      </div>
    )
  }