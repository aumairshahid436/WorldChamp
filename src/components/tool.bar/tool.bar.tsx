import { Title, BreadCrums } from "shared";

function ToolBar() {
  return (
    <div className="toolbar py-5 py-lg-15">
      <div className="container-xxl d-flex flex-stack flex-wrap">
        <div className="page-title d-flex flex-column me-3">
          <Title title={"Dashboard"} />
          <BreadCrums />
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
