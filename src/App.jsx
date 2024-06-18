import React, { useState, createContext } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => 
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <input 
          type="text" 
          placeholder="Search Todos" 
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
        <TodoForm addTodo={addTodo} />
        <Todos todos={filteredTodos} />
        <button style={styles.clearButton} onClick={clearCompleted}>
          Hapus Yang Sudah Selesai
        </button>
      </div>
    </TodoContext.Provider>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  clearButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#BB0000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  searchInput: {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  }
};

export default App;
