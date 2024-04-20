
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const jwt =  require("jsonwebtoken");

const studentModel = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"First Name is required"],
        minLength:[4,"First Name should have atleast be 4 characters"],

    },
    lastname:{
        type:String,
        required:[true,"Last Name is required"],
        minLength:[4,"Last Name should have atleast be 4 characters"],

    },
    
    contact:{
        type:String,
        required:[true,"Contact is required"],
        minLength:[10,"Contact should have atleast be 10 characters"],
        maxLengtth:[10,"Contact must not exceed 10 characters"],

    },

    city:{
        type:String,
        required:[true,"City is required"],
        minLength:[3,"City should have atleast be 3 characters"],

    },
    gender:{
        type:String,
        enum:["Male" , "Female" , "Others"],
    },

    email:{
        type:String,
        unique:true,
        required:[true,"Email is required"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please fill a valid email address"]
    },
    password:{
        type:String,
        select:false,
        maxLength:[15,"Password cannot be more than 15 characters"],
        minLength:[6,"Password should have atleast be 6 characters"],
        // match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,"Password should have atleast one lowercase, uppercase, number and special character"]
    },

    resetPasswordToken :{
        type:String,
        default:"0"
    },
    avatar:{
        type:Object,
        default:{
            fileId:"",
            url:"https://images.unsplash.com/photo-1691157415248-a7346d7501a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        },
    },

    resume:{
        education:[],
        jobs:[],
        internships:[],
        responsibilities:[],
        courses:[],
        projects:[],
        skills:[],
        accomplishments:[],
    },
 
    internships:[
        { type: mongoose.Schema.Types.ObjectId, ref: 'internship' } 
    ],
    
    jobs:[
        { type: mongoose.Schema.Types.ObjectId, ref: 'job' }
    ],

    




},{timestamps:true});


studentModel.pre("save",function(){
    if (!this.isModified("password")) {

        return;
        
    }
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password,salt);
});

studentModel.methods.comparepassword = function(password){
    return bcrypt.compareSync(password , this.password);
}



studentModel.methods.getjwttoken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{

        expiresIn:process.env.JWT_EXPIRE,
        
    })
}


const student = mongoose.model("students",studentModel);

module.exports = student;