import { useState } from "react";
import Footer from "../component/footer";
import NavBar from "../component/navBar";
import ToDoList from "../component/todolist";

function Home(){
    const[ todo, setToDo] = useState([
        {
             "id": 1,
             "title": "Go to the market",
            "description": "buy some groceries"
        
         },
    //     {
    //         "id": 2,
    //         "title": "learn react",
    //         "description": "very nice, very nice"
    //     }
    ])
    // console.log(todo);
    return(
        <div>
            <NavBar />
            <ToDoList todo = {todo}/>
            <Footer />
        </div>
    )
}
export default Home;