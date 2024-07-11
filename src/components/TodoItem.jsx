import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete item ", item); // Just for check
    setTodos(todos.filter((todo) => todo !== item)); // Will filter out the item to be delted
  }

  function handleClick(name) {
    // For marking item as completed as item clicked
    const updatedArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedArray);
  }

  const taskCompleted = item.done ? styles.completed : ""; // For marking line on completed item as clicked

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={taskCompleted} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
