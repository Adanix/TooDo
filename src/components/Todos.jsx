import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.length === 0 ? (
        <p style={styles.noTodosText}>No Todos Available</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
  },
  noTodosText: {
    fontSize: '18px',
    color: '#777',
  }
};

export default Todos;
