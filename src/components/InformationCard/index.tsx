export default function InformationCard({
  title = '',
  value = 0,
  value_diff = 0,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{value_diff}</p>
      <p>{value}</p>
    </div>
  );
}
