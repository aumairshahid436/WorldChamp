import { RootState, useTypedSelector } from "shared";

function Pages() {
  const appState = useTypedSelector(
    (rootState: RootState) => rootState.appReducer
  );
  return (
    <span className="fw-bolder">
      {`Page ${appState.page} of ${appState.totalPages}`}{" "}
    </span>
  );
}

export { Pages };
