export const ShipDetails = (props: {index: number, imageSrc: string}) => {
    return (
      <div>
        <div key={`image-${props.index}`}>
          <img src={props.imageSrc}></img>
        </div>
      </div>
    )
  }