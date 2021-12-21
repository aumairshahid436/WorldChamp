import { TableColumn } from "shared";
import { Loading } from "../loading/loading";
import "./table.css";
interface Props {
  columns: TableColumn[];
  rows: any[];
  isLoading?: boolean;
  onRowClick?: (...args: any) => void;
}
/*
 **** Note ***
 * Reusable table component, currently we displaying a list of champions and winners instead
 * I create a separate table component for both created a generic component and use in champions and winners component
 */
function Table({ columns, rows, isLoading, onRowClick }: Props) {
  const getClass = (obj: any) => {
    const cursorCls = onRowClick ? "cursor" : "";
    const highligtCls =
      "highlight" in obj && obj.highlight ? "highlight-winner" : "";
    return `${cursorCls} ${highligtCls}`;
  };
  return (
    <div className="table-responsive">
      <table
        className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        data-testid="table-cmp"
      >
        <thead>
          <tr className="fw-bolder">
            {columns.map((item: TableColumn, index: number) => {
              if (item.show) {
                return (
                  <th
                    className="min-w-120px"
                    key={`th-${item.header}-${index}`}
                  >
                    {item.title}
                  </th>
                );
              }
              return null;
            })}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={12}>
                <Loading />
              </td>
            </tr>
          ) : (
            rows.map((obj: any, index: number) => (
              <tr
                key={`tr-${index}`}
                onClick={onRowClick}
                className={getClass(obj)}
              >
                {Object.values(obj).map((value: any, i: number) => {
                  return (
                    <td key={`td-${value}-${i}`}>
                      <div className="d-flex align-items-center">
                        <span className="text-dark  text-hover-primary fs-6">
                          {value}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export { Table };
