import { Images } from "utils";
import { HeaderMenuItem } from "shared";
import { HeaderMenu } from "./header.menu";

function Header() {
  const menuItems: HeaderMenuItem[] = [
    {
      path: "",
      title: "Dashboard",
    },
  ];
  return (
    <header className="header align-items-stretch" title="header">
      <div className="container-xxl d-flex align-items-center">
        <div className="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
          <img
            alt="Logo"
            src={Images.Logo}
            className="logo-default"
            width={100}
            height={100}
          />
        </div>
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          <div className="d-flex align-items-stretch">
            <HeaderMenu items={menuItems} />
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
