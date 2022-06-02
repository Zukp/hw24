import {  useSelector,useDispatch } from "react-redux"
import { deletExpense } from "./actions/actions"
import styled from 'styled-components'
const LI = styled.li`
display:flex;
justify-content: space-between;
background-color: white;
width:400px;
margin-left:-38px;
padding:5px;
`
const Todo = () => {
    const dispatch = useDispatch()
   const expenses = useSelector((state) => state.expense)
   const deleteHandler = (id) => {
    dispatch(deletExpense(id))
  }
  return (
      <ul>
          {expenses.map((item) => {
        return <LI key={item.id}>
          <span>{item.title}</span>
          <span>{item.price}</span>
          <span>{item.date}</span>
          <button onClick={() => deleteHandler(item.id)}>X</button>
          </LI>
      })}
      </ul>
  )
}
export default Todo