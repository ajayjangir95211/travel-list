import { useState } from "react";

export function Form({ addItem }) {
  const [id, setId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState("");
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        if (!desc) return;
        addItem({
          id: String(id).padStart(5, "0"),
          quantity,
          desc,
          packed: false,
        });
        setId((id) => id + 1);
        setDesc("");
        setQuantity(1);
      }}
    >
      <p>What do you need for your trip?</p>
      <div className="form-control">
        <select
          name=""
          id=""
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {Array(10)
            .fill(0)
            .map((e, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
        </select>
        <input
          type="text"
          value={desc}
          placeholder="Item..."
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
}
