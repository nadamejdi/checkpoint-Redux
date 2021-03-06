import React ,{useState}from 'react';
import "./Todo.css"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Todo = ({toggleTodo,task,completed,id}) => {
  return (
  <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      <CSSTransition key="normal" timeout={500} classNames="task-text">
    <li className="Todo-task" onClick={toggleTodo}>
        {task}

    </li>

      </CSSTransition>

  </TransitionGroup>
  );
};

export default Todo;
