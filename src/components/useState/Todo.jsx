/* eslint-disable no-unused-vars */
import { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });
    const [warning, setWarning] = useState(null);
    // const handleInput = (e) => {
    //     const inputValue = e.target.value;
    //     const updatedWarning = inputValue.includes('.js')
    //         ? 'You need JavaScript skill to complete the task. Do you have it?'
    //         : null;
    //     setTodo(inputValue);
    //     setWarning(updatedWarning);
    // };
    const { title, description } = todo;
    return (
        <div>
            <p>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        })
                    }
                />
            </p>
            <p>
                <textarea
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            description: e.target.value,
                        })
                    }
                />
            </p>
            <hr />
            <h2>{warning || 'Good Choice!'}</h2>
            {title && <p>Title: {title}</p>}
            {description && <p>Description: {description}</p>}
        </div>
    );
}

export default Todo;
