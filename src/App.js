import { useState } from "react";
import Home from "./Home/Home";
import Counter from "./Home/Counter";
import ApiCall from "./Home/ApiCall";
import Promises from "./Home/Promises";
import Effect from "./Home/Effect";
import SearchComponent from "./Home/SearchComponent";
import Demo from "./Home/Demo";
import CallStack from "./Home/CallStack";
import BookForm from "./Home/BookForm";

function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <BookForm/>
    </div>
  )
}
export default App;
