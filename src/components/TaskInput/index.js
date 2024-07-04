import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TaskList from '../TaskList'

class TodoApplication extends Component {
  state = {tasksList: [], taskInput: ''}

  addTask = () => {
    const {taskInput} = this.state
    if (taskInput === '') {
      alert('Enter a Valid Input')
    } else {
      const newTask = {
        todo: taskInput,
        todoId: uuidv4(),
        isChecked: false,
      }
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newTask],
        taskInput: '',
      }))
    }
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  saveList = () => {
    const {tasksList} = this.state
    console.log(tasksList)
  }

  onClickInput = id => {
    const {todoId} = this.state
    if (todoId === id) {
      this.setState(prevState => ({isChecked: !prevState.isChecked}))
    }
  }

  onClickDelete = todoId => {
    const {tasksList} = this.state
    const filteredList = tasksList.filter(
      eachTodo => eachTodo.todoId !== todoId,
    )
    this.setState({tasksList: filteredList})
  }

  getTodoListFromLocalStorage = () => {
    const stringifiedTodoList = localStorage.getItem('MY_TODO_LIST')
    const parsedTodoList = JSON.parse(stringifiedTodoList)
    this.setState({tasksList: parsedTodoList})
  }

  render() {
    const {taskInput, tasksList} = this.state
    return (
      <div className="todos-bg-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="todos-heading">Todos</h1>
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <input
                onChange={this.onChangeTaskInput}
                value={taskInput}
                type="text"
                id="todoUserInput"
                className="todo-user-input"
                placeholder="What needs to be done?"
              />
              <button
                type="button"
                className="button"
                id="addTodoButton"
                onClick={this.addTask}
              >
                Add
              </button>
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              <ul className="todo-items-container" id="todoItemsContainer">
                {tasksList.map(eachTodo => (
                  <TaskList
                    todoList={eachTodo}
                    onClickInput={this.onClickInput}
                    onClickDelete={this.onClickDelete}
                    key={eachTodo.todoId}
                  />
                ))}
              </ul>
              <button
                type="button"
                onClick={this.saveList}
                className="button"
                id="saveTodoButton"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApplication
