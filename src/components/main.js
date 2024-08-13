import { useState } from "react";
import { Form } from "./form";
import { ItemsList } from "./list-view";
import { ListControl } from "./list-control";
import { Stats } from "./stats";

export default function Main() {
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems((items) => [...items, item]);
  const removeItem = (id) =>
    setItems((items) => items.filter((i) => i.id !== id));
  const clearList = () => setItems([]);
  const changeStatus = (id) =>
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );

  const updateList = (order) =>
    setItems((items) => {
      switch (order) {
        case "input":
          return items.slice().sort((a, b) => +a.id - +b.id);
        case "desc":
          return items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
        case "packed":
          return items.slice().sort((a, b) => {
            if (a.packed === b.packed) return 0;
            return a.packed ? 1 : -1;
          });
        default:
          return items.slice(); // Default case: return a shallow copy if no valid sortOrder is provided
      }
    });
  return (
    <main>
      <Form addItem={addItem} />
      <ItemsList
        items={items}
        changeStatus={changeStatus}
        removeItem={removeItem}
      />

      <ListControl updateList={updateList} clearList={clearList} />
      <Stats items={items} />
    </main>
  );
}
