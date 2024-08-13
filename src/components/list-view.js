export function ItemsList({ items, changeStatus, removeItem }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i.id}>
          <input
            type="checkbox"
            name="packed"
            id=""
            value={i.packed}
            onChange={(e) => changeStatus(i.id)}
          />
          <span style={i.packed ? { textDecoration: "line-through" } : null}>
            {i.quantity} {i.desc.slice(0, 1).toUpperCase() + i.desc.slice(1)}{" "}
          </span>
          <button onClick={() => removeItem(i.id)}>&times;</button>
        </li>
      ))}
    </ul>
  );
}
