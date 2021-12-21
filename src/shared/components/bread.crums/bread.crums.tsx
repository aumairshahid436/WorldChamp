import { Link } from "react-router-dom";

function BreadCrums() {
  return (
    <ul
      className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
      data-testid="bread-cumb-cmp"
    >
      <li className="breadcrumb-item text-white opacity-75">
        <Link to="" className="text-white text-hover-primary">
          Home
        </Link>
      </li>
      <li className="breadcrumb-item">
        <span className="bullet bg-white opacity-75 w-5px h-2px" />
      </li>
      <li className="breadcrumb-item text-white opacity-75">World Champions</li>
    </ul>
  );
}

export { BreadCrums };
