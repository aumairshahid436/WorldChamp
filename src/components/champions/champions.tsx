import { useHistory } from "react-router-dom";
import { ListContainer, setPage } from "shared";
import { useDispatch } from "react-redux";
import { GetChampions } from "./action";
import { ChampionTableColumns } from "./table.columns";
import useFetch from "shared/hooks/use.fetch";
import { RouteNames } from "routes";

function Champions() {
  const history = useHistory();
  const dispatch = useDispatch();
  // used common hook for state management
  const { state } = useFetch({
    action: GetChampions,
  });

  const onRowClick = () => {
    dispatch(setPage(1));
    history.push(RouteNames.Winners);
  };
  return (
    <ListContainer
      title={"F1 World Champions"}
      loading={state.isLoading}
      count={state.total}
      columns={ChampionTableColumns}
      rows={state.data}
      onRowClick={onRowClick}
    />
  );
}

export default Champions;
