export default function TextareaComponent({
  row,
  cols,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <textarea
        rows={row}
        cols={cols}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
