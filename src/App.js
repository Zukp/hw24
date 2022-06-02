import styled from 'styled-components'
import Todo from './redux/Todo';
import './App.css';
import Input from './redux/Input';

const SECTION = styled.section `
background-color: blue;
width: 400px;
padding: 50px;
margin-top: 20px;
margin-left: 50vh;
border-radius: 20px;

`
function App() {
  return (
    <SECTION>
      <h1>Reduc Practice</h1>
      <Input />
       <Todo />
    </SECTION>
  );
}

export default App;
