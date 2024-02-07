import employee from "../model/schema.js"

// To add a employee

export let add = async(req,res)=>{
    try{
    const {name, dob, phoneNumber, email } = req.body

    const create =  await employee.create({
      
        name: name,
        dob : dob,
        phoneNumber : phoneNumber,
        email : email
       });

       if(create){
        res.status(200).send({message : "Employee created successfully", data : create})
       }
    }catch(error){
        res.status(500).send(error)

    }

}


// To get a employee

export let getById = async(req,res) =>{
    try{
    const {id} = req.params;
    let data = await employee.findById(id);

    if(data){
        res.status(200).send({message : "Employee retrived successfully", data : data})
    }else{
        res.status(404).send({message : "No employee found"})

    }
}catch(error){
    console.log("errorr",error)
    res.status(500).send(error)

}
}

// To update any field in user 

export let updateOne = async(req,res) =>{
    try{
    const {id} = req.params;
    const {name, dob, email, phoneNumber} = req.body;

    let data = await employee.findById(id);
    if(data){
        if(name){
        data.name = name;
        }
        else if(email){
            data.email= email;
        }
        else if(phoneNumber) {
            data.phonenumber = phoneNumber; 
        }
        else if(dob) {
            data.dob = dob;   
        }
        data.save()
        res.status(200).send({message : "Employee updated successfully", data : data})

    }else{
    res.status(404).send({message : "No employee found"})
    }
    }
    catch(error){
        console.log("errorr",error)
        res.status(500).send(error)

    }
   
      
}



// To update all field in employee 

export let update = async(req,res) =>{
    try{
    const {id} = req.params;
    const {name, dob, email, phoneNumber} = req.body;

    let data = await employee.findById(id);
    if(data){
        data.name = name ? name: ""
        data.email = email ? email : ""
        data.phoneNumber = phoneNumber ?  phoneNumber : ""
        data.dob = dob ? dob : ""
        data.save()
        res.status(200).send({message : "Employee updated successfully", data : data})
    }else{
        res.status(404).send({message : "No employee found"})
    }
}catch(error){
    console.log("errorr",error)
    res.status(500).send(error)
}

   
   
   
}



//To delete a user

export let deletes = async(req,res) =>{
    try{
    const {id} = req.params;
    let empExist = await employee.findByIdAndDelete({"_id":id}) ;
    if(empExist){
        res.status(200).send({message : "Employee deleted successfully"})

    }else{
        res.status(404).send({message : "No employee found"})

    }
    }catch(error){
        console.log("errorr",error)
        res.status(500).send({error : error})

    }
   
    

}




  





