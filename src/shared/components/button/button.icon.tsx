import "./button.css";

interface Props {
  onClick: () => void;
  name: string;
  iconClass?: string;
}
function ButtonWithIcon({ onClick, name, iconClass = "fa fa-home" }: Props) {
  return (
    <button
      type="button"
      className={`m-2 arrow-icon ${iconClass}`}
      onClick={onClick}
      name={name}
    />
  );
}

export { ButtonWithIcon };
