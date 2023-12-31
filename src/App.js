import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./CreatePost";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/create"} element={<CreatePost/>}/>
            <Route path={"/post/:id"} element={<PostPage/>}/>
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
