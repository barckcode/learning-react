import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
    { text: 'Test1', completed: true },
    { text: 'Test2', completed: false },
    { text: 'Test3', completed: true },
    { text: 'Test4', completed: false },
]


function App() {
    return (
        <>
            <TodoCounter completed={16} total={20} />
            <TodoSearch />

            <TodoList>
                {defaultTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
