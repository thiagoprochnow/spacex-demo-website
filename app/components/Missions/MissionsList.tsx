import React from "react"

export const MissionsList = (props: {names: string[]}) => {
    return (
      <div>
        <ul>
            {props.names.map((name, index) => {
                return (
                    <li>Mission {index}: {name}</li>
                )
            })}
        </ul>
      </div>
    )
  }