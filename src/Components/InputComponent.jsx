export default function InputComponent({
  type,
  name,
  placeholder,
  value,
  onChange,
  style,
  disabled,
}) {
  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        disabled={disabled}
      />
    </div>
  );
}
