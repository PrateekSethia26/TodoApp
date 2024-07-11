import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault(); // It will prevent from refresh the page as button clicked
    setTodos([...todos, todo]); // For storing in a single array
    setTodo({ name: "", done: false }); // As add button clicks the field get cleared.
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        {/* For putting in one line  */}
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter you task..."
        />
        <button type="submit" className={styles.modernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
