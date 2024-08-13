export function Stats({ items }) {
  const packedItems = items.reduce((count, i) => {
    return count + (i.packed ? 1 : 0);
  }, 0);
  return (
    <p className="stats">
      💼 You have {items.length === 0 ? "no" : items.length} item
      {items.length === 1 ? "" : "s"} on your list and you have packed{" "}
      {packedItems === 0 ? "no" : packedItems} item
      {packedItems === 1 ? "" : "s"} (
      {(packedItems === 0 ? 0 : (packedItems / items.length) * 100).toFixed(2)}
      %)
    </p>
  );
}
