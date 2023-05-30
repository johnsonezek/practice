import { useState } from "react";

function Home() {
  // const [count,setCount] = useState(5)
  const [test,seTest]=useState(5);
  const [text, setText]=useState("Johnson")
  const [liked, setLiked] = useState(true)

  function handleChange(e) {
    setText(e.target.value)
  }
  function handleLiked (e) {
    setLiked(e.target.checked);
  }
  return (
    <div>
      <p>Prabakaran : {test}</p>
      <button onClick={() => seTest(test + 1)}>Increment</button> &nbsp;&nbsp;&nbsp;
      <button onClick={() => seTest(test - 1)}>Decrement</button>
      <div>
        <input value={text} onChange={handleChange} />
        <p>You typed : {text}</p>
        <button onClick={() => setText("Johnson")}> Reset</button>
      </div>
      <div>
        <label>
            <input type="checkbox" checked={liked} onChange={handleLiked}/> I like this
        </label>
        <p>You {liked ? 'liked' : 'did not like'} this.</p>
      </div>
    </div>
  )
}
export default Home;