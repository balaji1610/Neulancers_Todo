export default function Dropdown({ value, onChange, options, style }) {
  return (
    <div>
      <select style={style} value={value} onChange={onChange}>
        {options.map((options) => {
          return <option value={options.value}>{options.label}</option>;
        })}
      </select>
    </div>
  );
}
