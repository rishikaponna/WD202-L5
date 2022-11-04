
const { run } = require("jest");
const { connect }=require("./connectDB.js");

const Todo=require("./TodoModel.js");

const createTodo= async () => {
    try{
        await connect();
        // const todo =await Todo.create({
        //     title:"First Item",
        //     dueDate:new Date(),
        //     completed:false,

        // });

        const todo =await Todo.addTask({
            title:"Second Item",
            dueDate:new Date(),
            completed:false,

        });
        console.log(`created todo with id: ${todo.id}`);
    }catch(error){
        console.error(error);
    }
};

const countItems =async ()=>{
    try{
        const totalCount=await Todo.count();
        console.log(`Found ${totalCount} items in the table!`);
    }catch(error){
        console.error(error);
    }
}

// const getAllTodos =async ()=>{
//     try{
        
//         const todos=await Todo.findAll({
//             where:{
//                 completed:false
//             },
//             order: [
//                ['id','DESC']
//             ]
//     });
//        const todoList= todos.map(todo => todo.displayableString()).join("\n");
//         console.log(todoList);
//     }catch(error){
//         console.error(error);
//     }
// }

const getAllTodos =async ()=>{
    try{
        
        const todos=await Todo.findAll();
       const todoList= todos.map(todo => todo.displayableString()).join("\n");
        console.log(todoList);
    }catch(error){
        console.error(error);
    }
}



const getSingleTodo =async ()=>{
    try{
        
        const todo=await Todo.findOne({
            where:{
                completed:false
            },
            order: [
               ['id','DESC']
            ]
    });
     
        console.log(todo.displayableString());
    }catch(error){
        console.error(error);
    }
}


const updateItem =async (id)=>{
    try{
        
        const todo=await Todo.update({completed:true},{
            where:{
                id:id
            }
            
    });
     
        
    }catch(error){
        console.error(error);
    }
}

const deleteItem =async (id)=>{
    try{
        
        const deleteRowCount =await Todo.destroy({
            where:{
                id:id
            }
            
    });
     
    console.log(`Deleted ${deleteRowCount} rows!`);
    
    }catch(error){
        console.error(error);
    }
}
(async () =>{
    await getAllTodos();
    await countItems();
})(run());


// (async ()=>{ 
//    // await createTodo();
//    //await countItems();
//   await getAllTodos();
//   await deleteItem(2);
//  //await updateItem(2);
//  await getSingleTodo();
// })();