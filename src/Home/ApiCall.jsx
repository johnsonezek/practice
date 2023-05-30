// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

//  function ApiCall() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }
// export default ApiCall;

import React, { useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  return (
    <div>
    </div>
    // Your component's JSX goes here
  );
}

export default MyComponent;
