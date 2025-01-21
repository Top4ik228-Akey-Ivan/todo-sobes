import React from 'react';
import Header from './components/Header/Header.tsx'

import './App.css';

function App() {

    const [todos, setTodos] = React.useState([])

    return (
        <div className="App">
            <Header>todos</Header>
        </div>
    );
}

export default App;
