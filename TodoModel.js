const { Sequelize,DataTypes,Model }=require("sequelize");

const { sequelize }=require("./connectDB.js");

class Todo extends Model {
    static async addTask(params){
        return await  Todo.create(params);
    }

    // displayableString(){
    //     return `${this.id}. ${this.title} - ${this.dueDate}`
    // }
    displayableString(){
        return `${this.completed ? '[x]' : '[ ]'} ${this.id} . ${this.title} - ${this.dueDate}`
    }
}
      
Todo.init(
    {
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        dueDate:{
            type:DataTypes.DATEONLY,
        },
        completed:{
            type:DataTypes.BOOLEAN,
        },
    },
    {
        sequelize
    }

);

module.exports=Todo;


Todo.sync();