export default function ImageComponent({ className, width, height, src, alt }) {
  return (
    <div>
      <img
        className={className}
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    </div>
  );
}