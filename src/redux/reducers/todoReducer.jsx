
const initial = {
    todos:[
        {id:1, title:"Write Journal/Plan tomorrow’s tasks", completed:false},
        {id:2, title:"Read 30 minutes of a book", completed:true},
        {id:3, title:"Call or text a friend/family member", completed:false},
        {id:3, title:"Drink a water bottle ", completed:true},
        {id:4, title:"Do the laundry", completed:true},
    ]
}

const todoReducer = (state=initial,{type, payload}) => {
switch (type) {
    //case value:"ADD_TODO"
        

    default:
        return state
      
}
};

export default todoReducer;