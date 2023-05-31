export default function CurrentDate() {
  const date = new Date();
  const options1 = {
    dateStyle: "full",
  };
  const CurrentData = new Intl.DateTimeFormat("en-GB", options1).format(date);
  return (
    <div>
      <h3 style={{ color: "red" }}>{CurrentData}</h3>
    </div>
  );
}
