import { ListContainer, RootState, useTypedSelector } from "shared";
import useFetch from "shared/hooks/use.fetch";
import { GetWinners } from "./action";
import { WinnerTableColumns } from "./table.columns";

function Winners() {
  // used common hook for state management
  const { state } = useFetch({
    action: GetWinners,
  });
  const appState = useTypedSelector(
    (rootState: RootState) => rootState.appReducer
  );
  return (
    <ListContainer
      title={`Winners of Year ${appState.selectedYear}`}
      loading={state.isLoading}
      count={state.total}
      columns={WinnerTableColumns}
      rows={state.data}
      showBack
    />
  );
}

export default Winners;
