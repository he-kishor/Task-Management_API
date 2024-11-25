const Task_Model = require('../../Models/taskmodel');

const createtask =async(userId,{task_title, task_description})=>{
    if (!task_title || !task_description){
       throw({status:400, message:"Please provide all required fields"});
    }
    console.log(userId);
   const task_data = await Task_Model.create(
    { 
        t_title:task_title,
        t_description:task_description,
        modified_time: Date.now(),
        t_pipelineName:"Todo",
        u_id:userId
    });
    return task_data

};

module.exports = createtask;