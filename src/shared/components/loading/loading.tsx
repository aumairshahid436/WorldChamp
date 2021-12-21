import Loader from "react-loader-spinner";
interface Props {
  type?:
    | "Audio"
    | "BallTriangle"
    | "Bars"
    | "Circles"
    | "Grid"
    | "Hearts"
    | "Oval"
    | "Puff"
    | "Rings"
    | "TailSpin"
    | "ThreeDots"
    | "Watch"
    | "RevolvingDot"
    | "Triangle"
    | "Plane"
    | "MutatingDots"
    | "CradleLoader";
  color?: string;
  height?: number;
  width?: number;
}
// Resubale loading component
function Loading({
  type = "ThreeDots",
  color = "#000",
  height = 100,
  width = 100,
}: Props) {
  return (
    <div className="d-flex justify-content-center">
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        data-testid="loading-cmp"
      />
    </div>
  );
}

export { Loading };
