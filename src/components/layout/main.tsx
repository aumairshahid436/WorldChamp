import { ReactChild } from "react";
import { Header, Footer } from "components/layout";
import ToolBar from "components/tool.bar/tool.bar";
import "./main.css";
interface Props {
  children: ReactChild;
}

function Main({ children }: Props) {
  return (
    <div className="d-flex flex-column flex-root main" data-testid="main-cmp">
      <div className="page d-flex flex-row flex-column-fluid">
        <div className="wrapper d-flex flex-column flex-row-fluid">
          <Header />
          <ToolBar />
          <div className="d-flex flex-column-fluid align-items-start container-xxl">
            <div className="content flex-row-fluid">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export { Main };
