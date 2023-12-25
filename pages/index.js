import TodoList from "../components/home/todoList"
import HomeLayout from "../layouts/home"


const Home = () => {
    return (
        <>
            <hr className="mt-4" />
            <TodoList />
            <hr className="mt-4" />

        </>
    )
}

Home.layout = HomeLayout
export default Home