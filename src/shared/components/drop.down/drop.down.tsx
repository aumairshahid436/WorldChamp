import { DropDownOptions } from "shared/types";

interface Props {
  label: string;
  options: DropDownOptions[];
  onChange: (e: any) => void;
  selectedValue: string | number;
  id: string;
}

// Reusable dropdown component
function DropDown({ label, options, onChange, selectedValue, id }: Props) {
  return (
    <div className="d-flex flex-stack flex-wrap">
      <div className="m-3">
        <div className="fw-bolder">{label}</div>
      </div>
      <div>
        <select
          className="form-select form-select-solid"
          onChange={onChange}
          defaultValue={selectedValue}
          data-testid={`${id}-select`}
        >
          {options.map((opt) => (
            <option
              value={opt.value}
              key={`opt-${opt.value}`}
              data-testid={`${id}-select-option`}
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export { DropDown };
