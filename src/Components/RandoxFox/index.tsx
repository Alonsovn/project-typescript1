import { JSX, useRef } from "react";
type Props = { image: string };

export const RandomFoxImage = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);

  return (
    <img
      ref={node}
      src={image}
      alt="Fox image"
      width={320}
      height="auto"
      className="rounded"
    />
  );
};
