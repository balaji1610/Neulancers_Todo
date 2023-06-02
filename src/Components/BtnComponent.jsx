export default function BtnComponent({
  className,
  onClick,
  type,
  label,
  style,
  disabled,
}) {
  return (
    <div>
      <button
        disabled={disabled}
        className={className}
        onClick={onClick}
        type={type}
        style={style}
      >
        {label}
      </button>
    </div>
  );
}
