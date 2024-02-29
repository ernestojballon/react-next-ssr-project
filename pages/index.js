import fetch from 'isomorphic-fetch'

const App = (props) => {
  return (
    <div>
      <h1>My todos</h1>
      <ul>
     {props.todos.map(todo => (
      <li key={todo.id}>{todo.title}</li> 
     ))}
    </ul> 
    </div>
    
  )
}

App.getInitialProps = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const response = await fetch(url)
  const todos = await response.json() 
  return {
    todos
  }
}

export default App


