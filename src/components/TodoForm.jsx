import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
   const [title, setTitle] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      if (title.trim() !== '') {
         addTodo(title);
         setTitle('');
      }
   };

   const handleChangeTitle = (event) => {
      setTitle(event.target.value);
   };

   return (
      <div style={styles.container}>
         <form onSubmit={handleSubmit} style={styles.form}>
         <input
            type="text"
            placeholder="Add your Todo"
            style={styles.formInput}
            value={title}
            onChange={handleChangeTitle}
         />
         <button type="submit" style={styles.button}>Add Todo</button>
         </form>
      </div>
   );
};

const styles = {
   container: {
      marginBottom: '32px',
   },
   form: {
      display: 'flex',
      justifyContent: 'center',
   },
   formInput: {
      height: '40px',
      width: '60%',
      fontSize: '16px',
      padding: '0 16px',
      marginRight: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
   },
   button: {
      height: '44px',
      fontSize: '16px',
      padding: '0 16px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
   },
};

export default TodoForm;
