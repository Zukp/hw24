import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addExpense } from './actions/actions';
import {useState} from 'react'
const INPUT = styled.input`
width: 400px;
padding:5px;
background: ${({isValid}) => isValid ? 'red' : 'white'};

`
const LABEL =  styled.label`
color: white;
`
const BUTTON = styled.button`
  margin-left: 305px;
  width: 100px;
`
const Input = () => {

    const dispatch = useDispatch()
    const [data,setData] = useState({title:'',price:'',date:'',});
    const [isValid,setIsvalid] = useState(false)
 

    const inputHandler = (e) => {
        const value = e.target.value
        setData({
          ...data,
          [e.target.name]:value,
        })
       
      
    };
   
    const submitHandler = (e) => {
        e.preventDefault()
        if(data.title.trim() === '' && data.price.trim()  === '' && data.date.trim() ===''){
            setIsvalid(true)
            return 
        }
        dispatch(addExpense(data))
        setData({
        title:'',
        price:'',
        date:'',
        })
        setIsvalid(false)
      }
    return (
        <>
        <form onSubmit={submitHandler}>
        <div className='control'>
          <LABEL>Title</LABEL>
          <INPUT  isValid={isValid} type={"text"} value={data.title} name='title' onChange={inputHandler}/>
        </div>
        <div className='control'>
          <LABEL>Price</LABEL>
          <INPUT isValid={isValid} type={"number"} value={data.price} name='price' onChange={inputHandler}/>
        </div>
        <div className='control'>
          <LABEL>Date</LABEL>
          <INPUT isValid={isValid} type={"date"} value={data.date} name='date' onChange={inputHandler}/>
        </div>
       <BUTTON>add</BUTTON>
     </form>
        
        </>
    )
}

export default Input