export default function BtnComponent({
  className,
  onClick,
  type,
  label,
  style,
}) {
  return (
    <div>
      <button className={className} onClick={onClick} type={type} style={style}>
        {label}
      </button>
    </div>
  );
}
