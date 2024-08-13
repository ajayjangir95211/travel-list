import { useState } from "react";

export function ListControl({ updateList, clearList }) {
  const [sortOrder, setSortOrder] = useState("");
  return (
    <div className="control">
      <select
        name="sort-order"
        id=""
        value={sortOrder}
        onChange={(e) => {
          setSortOrder(e.target.value);
          updateList(e.target.value);
        }}
      >
        <option value="input">Sort By Input Order</option>
        <option value="desc">Sort By Description </option>
        <option value="packed">Sort By Packed Status</option>
      </select>
      <button onClick={() => clearList()}>Clear List</button>
    </div>
  );
}
