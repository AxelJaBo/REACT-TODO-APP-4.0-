import { useState } from 'react';
import './TodoForm.css';

function TodoForm({addTodo, setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Esribe tu nuevo TODO</label>
            <textarea
                placeholder="Escribe aquí..."
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };