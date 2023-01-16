import ToDoItem from "./todoitem";

function ToDoList(props) {
  return (
    <div>
      {props.todo.map((item, index) => {
        <ToDoItem key={index} item={item} />;
      })}
    </div>
  );
}
export default ToDoList;
