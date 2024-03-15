import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type:String,
    required: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high']
  },
  category: String
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
