export default function BtnComponent({ className, onClick, type, label }) {
  return (
    <div>
      <button className={className} onClick={onClick} type={type}>
        {label}
      </button>
    </div>
  );
}
