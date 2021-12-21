import { Link } from "react-router-dom";
import { HeaderMenuItem } from "shared";

interface Props {
  items: HeaderMenuItem[];
}
function HeaderMenu({ items }: Props) {
  return (
    <div className="header-menu align-items-stretch" title="header-menu">
      {items.map((item: HeaderMenuItem) => (
        <div
          className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
          key={`header-menu-${item.title}`}
        >
          <div className="menu-item here show menu-lg-down-accordion me-lg-1">
            <Link to={item.path} className="menu-link active py-3">
              <span className="menu-title">{item.title}</span>
              <span className="menu-arrow d-lg-none" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export { HeaderMenu };
