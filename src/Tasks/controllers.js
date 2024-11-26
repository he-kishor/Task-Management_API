const errorHandler = require('../../settings/error_handling/errorHandler');
const createtask = require('./services/create_task');
const getallTask = require('./services/get_alltask');
const updateTask = require('./services/update_task');

const create_Task = async(req,res)=>{
    try{
        const id = req.userid;
        const taskData = await createtask(id,req.body);
        res.status(200).json(taskData);
        
    }
    catch (error) {
        errorHandler(res,error);
       
       }
};

const get_allTask = async(req,res)=>{
    try{
        const id = req.userid;
        const usersTask = await getallTask(id);
        res.status(200).json(usersTask);
    }
    catch(error){
        errorHandler(res,error);
    }
}

const update_task = async(req,res)=>{
    try{
        const tasks = await updateTask(req.body);
        res.status(200).json(tasks);

    }
    catch(error){
        errorHandler(res,error);
    }
}

module.exports ={create_Task, get_allTask, update_task};