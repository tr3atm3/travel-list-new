function Item({ item, onDeleteItem, checked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => checked(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
