import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Tu lista no esta actualizada.</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                    >
                        Actualizar
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };