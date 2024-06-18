import React, { useContext, useState } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const getTodoTitleStyle = () => {
    return { textDecoration: todo.completed ? 'line-through' : 'none' };
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTitle.trim() !== '') {
      todo.title = editedTitle;
      setIsEditing(false);
    }
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          style={{ ...styles.title, ...styles.editInput }}
        />
      ) : (
        <p style={{...styles.title, ...getTodoTitleStyle()}} onDoubleClick={handleEdit}>
          {todo.title}
        </p>
      )}
      <button
        style={styles.button}
        onClick={() => deleteTodo(todo.id)}
      >
        x
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    margin: '10px 0',
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  title: {
    flex: '1',
    margin: '0 10px',
    textAlign: 'left',
    cursor: 'pointer',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  editInput: {
    border: '1px solid #ccc',
    padding: '5px',
  },
};

export default TodoItem;
