export default function ImageComponent({
  className,
  width,
  height,
  src,
  alt,
  style,
}) {
  return (
    <div>
      <img
        className={className}
        width={width}
        height={height}
        src={src}
        alt={alt}
        style={style}
      />
    </div>
  );
}
