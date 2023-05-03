import React from 'react';

const Blog = () => {
    return (
        <div>
        <div>
          <h2>Question 1: Differences between uncontrolled and controlled components</h2>
          <p>
            Uncontrolled components manage their own state internally, while controlled components have their state managed by React. With uncontrolled components, React does not keep track of the component's value, while with controlled components, the component's value is stored in state and updated via a change handler.
          </p>
        </div>
        <div>
          <h2>Question 2: How to validate React props using PropTypes</h2>
          <p>
            You can use the PropTypes library to specify the type and shape of props that a component expects. To require that a prop be a specific type, you can use the PropTypes module, like so:
          </p>
          <pre>
            {`
            import PropTypes from 'prop-types';
  
            const MyComponent = ({ name }) => {
              return <div>Hello, {name}!</div>;
            };
  
            MyComponent.propTypes = {
              name: PropTypes.string.isRequired
            };
  
            export default MyComponent;
            `}
          </pre>
        </div>
        <div>
          <h2>Question 3: Difference between Node.js and Express.js</h2>
          <p>
            Node.js is a runtime environment for executing JavaScript outside of a web browser, while Express.js is a web application framework built on top of Node.js. Node.js provides a way to execute JavaScript on the server side, while Express.js provides a set of tools and conventions for building web applications on top of Node.js.
          </p>
        </div>
        <div>
          <h2>Question 4: What is a custom hook, and why will you create a custom hook?</h2>
          <p>
            A custom hook is a JavaScript function that uses React's built-in hooks to encapsulate some specific behavior that can be reused across multiple components. Custom hooks can simplify complex logic, make it more reusable and easier to test. We create custom hooks to extract and share logic between components without having to rely on higher-order components, render props, or other patterns.
          </p>
        </div>
      </div>
    );
  };

export default Blog;