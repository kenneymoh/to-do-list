import Footer from "../component/footer";
import NavBar from "../component/navBar";
import ToDoList from "../component/todolist";

function Home(){
    return(
        <div>
            <NavBar />
            <ToDoList />
            <Footer />
        </div>
    )
}
export default Home;