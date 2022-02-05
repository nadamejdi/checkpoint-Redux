import React from "react";
import TodoInput from "./TodoInput";
import Todo from "./Todo"
import "./TodoList.css" ;
import {CSSTransition,TransitionGroup} from "react-transition-group";
import { useSelector,useDispatch } from "react-redux";
import {completeTodo,addTodo} from "../redux/action";

const TodoList = () => {
    const state =useSelector((state) =>({...state.todos}));
    let dispatch = useDispatch();
    const create =(newTodo) =>{
    dispatch(addTodo(newTodo))};
        return(
        <div className="TodoList">
            <h1>TodoApp with react js </h1>
            <TodoInput createTodo={create}/>
            <ul>
                <TransitionGroup className="todo=list">
            {state.todos &&
            state.todos.map((todo) => {
                return(
                    <CSSTransition Key={todo.id} classNames="todo">
                        <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        toggleTodo={() => dispatch(completeTodo(todo))}
                        
                        />
                    </CSSTransition>
                );
            })}


                </TransitionGroup>
            </ul>
        </div>
    );
};
export default TodoList;