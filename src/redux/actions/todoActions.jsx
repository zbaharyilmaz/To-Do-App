export const add = (title) => ({
    type: "ADD",
    payload: { 
      id: Date.now(), //!
      title, 
      completed: false 
    },
  });
  
  export const remove = (id) => ({
    type: "REMOVE",
    payload: { id },
  });
  export const welldone=(id)=>({
    type:"DONE",
    payload:{id}
  })
  
