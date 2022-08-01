import React from 'react';
import TodoList from './tasks/components/TodoList.jsx';
import {Provider} from "react-redux";
import store from "./store";

const App = () => {
    return <Provider store={store}>
        <TodoList/>
    </Provider>;
};

export default App;
