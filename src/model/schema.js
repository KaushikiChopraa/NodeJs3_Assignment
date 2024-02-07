import mongoose from 'mongoose';
const { Schema } = mongoose;



const empSchema = new Schema({
    name:  {
        type: String,
        
      },
    dob :  {
        type: Date,
      },
    phoneNumber : {
        type: Number,
        
      },
    email :{
        type: String,
       
      },

});


const employee = mongoose.model("employee", empSchema);

export default employee
