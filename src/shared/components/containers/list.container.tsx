import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RouteNames } from "routes";
import {
  DropDown,
  Table,
  ChampionList,
  TableColumn,
  Count,
  setYear,
  setPageSize,
  Pages,
  ButtonWithIcon,
  setPreviousPage,
  setNextPage,
  useTypedSelector,
  RootState,
} from "shared";
import { WinnersList } from "shared/types";
import { PageSize, Years } from "utils";

interface Props {
  title: string;
  loading: boolean;
  count: number;
  columns: TableColumn[];
  rows: ChampionList[] | WinnersList[] | any[];
  onRowClick?: (...args: any) => void;
  showBack?: boolean;
}
/*
 **** Note ***
 * Reusable ListContainer component, currently we displaying a list of champions and winners
 * Instead I create a separate component for both created a generic component and use in champions and winners component
 */
function ListContainer({
  title,
  loading,
  count,
  columns,
  rows,
  onRowClick,
  showBack,
}: Props) {
  const dispatch = useDispatch();

  const appState = useTypedSelector(
    (rootState: RootState) => rootState.appReducer
  );
  // following method will update state in reducer
  const onChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setYear(+e.target.value));
  };
  const onChangePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(+e.target.value));
  };
  const onPreviousPage = () => {
    dispatch(setPreviousPage());
  };
  const onNextPage = () => {
    dispatch(setNextPage());
  };
  return (
    <div className="col-xl-12">
      <div className="card card-xl-stretch mb-5 mb-xl-8">
        <div className="card-header border-0 pt-5">
          <div className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">{title}</span>
            <span className="mt-1 fw-bold fs-7 flex">
              <Count loading={loading} count={count} />
            </span>
            {showBack && (
              <span className="mt-1 fw-bold fs-7">
                <Link to={RouteNames.Default}>Go Back</Link>
              </span>
            )}
          </div>
          <div className="card-toolbar">
            <DropDown
              label={"Select Year"}
              options={Years}
              onChange={onChangeYear}
              selectedValue={appState.selectedYear}
              id="year"
            />
            <DropDown
              label={"Show Records"}
              options={PageSize}
              onChange={onChangePageSize}
              selectedValue={appState.pageSize}
              id="page-size"
            />
          </div>
        </div>
        <div className="card-body py-3">
          <Table
            columns={columns}
            rows={rows}
            isLoading={loading}
            onRowClick={onRowClick}
          />
          {!loading && (
            <div className="d-flex justify-content-between mt-5">
              <Pages />
              <div className="d-flex justify-content-center">
                <ButtonWithIcon
                  onClick={onPreviousPage}
                  iconClass="fa fa-arrow-left"
                  name="previous-page"
                />
                <ButtonWithIcon
                  onClick={onNextPage}
                  iconClass="fa fa-arrow-right"
                  name="next-page"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { ListContainer };
