export const addExpense = ({title,price,date}) => ({
    type:"ADD",
    title,
    price,
    date,
});
export const deletExpense = id=> ({
    type:"DELETE",
    id:id,
})