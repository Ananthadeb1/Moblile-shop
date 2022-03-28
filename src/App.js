
import './App.css';
import { useEffect, useState } from 'react';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <h1>How React Works</h1>
        <p>A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. React uses a declarative paradigm that makes it easier to reason about the application and aims to be both efficient and flexible by designing simple views for each state in the application, and React will efficiently update and render just the right component when the data changes. The declarative view makes your code more predictable and easier to debug.</p>

      <h1>State Vs. Props</h1>

    <h2>State</h2>
    <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
<h2>Props</h2>
<p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
    </div>
  );
}

export default App;