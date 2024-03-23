import Radio from "./Radio";

type OptionType = {
  value: string;
  label: string;
};

export interface RadioGroupProps {
  defaultChecked?: string;
  disabled?: boolean;
  name: string;
  onChange: (value: string) => void;
  options: OptionType[];
}

const RadioGroup = (props: RadioGroupProps) => {
  const {
    defaultChecked,
    disabled,
    name,
    onChange,
    options,
  } = props;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    onChange(event.currentTarget.value);

  return (
    <div className="flex flex-col">
      {options.map(({ label: optionLabel, value }) => (
        <div key={value} className="flex gap-2 items-center">
          <Radio
            id={value}
            name={name}
            disabled={disabled}
            defaultChecked={defaultChecked === value}
            label={optionLabel}
            onChange={handleChange}
            value={value}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
