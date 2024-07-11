import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice() // It will create a copy of todos so that original is not effected
    .sort((a, b) => Number(a.done) - Number(b.done)); // It will sort them like done tasks at bottom

  return (
    <div className={styles.list}>
      {/* Here sortedItems will be passed to TodoItem component */}
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        /> // For looping through all the todos using a seperate component
        // Key is required for unique identification
      ))}
    </div>
  );
}
