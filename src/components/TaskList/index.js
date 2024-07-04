import './index.css'

const TaskList = props => {
  const {todoList, onClickInput, onClickDelete} = props
  const {todoId, todo, isChecked} = todoList

  const checkedLabel = isChecked ? 'checked' : ''
  const inputClicked = () => {
    onClickInput(todoId)
  }
  const deleteClicked = () => {
    onClickDelete(todoId)
  }
  return (
    <li className="todo-item-container">
      <div className="label-container">
        <input
          onClick={inputClicked}
          className="checkbox-input"
          type="checkbox"
          id="todo"
        />
        <label htmlFor="todo" className={`checkbox-label ${checkedLabel}`}>
          {todo}
        </label>
      </div>
      <button className="delete-btn" type="button" onClick={deleteClicked}>
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete icon"
        />
      </button>
    </li>
  )
}

export default TaskList
