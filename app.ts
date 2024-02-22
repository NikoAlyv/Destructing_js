//TODO task1
//!Part 
// interface IStudentProfile{
//    name: string;
//    age: number;
//    course?:string;
//    hobbies: string[];
// }
// const studentProfile:IStudentProfile={
//     name:'Nihad',
//     age:19,
//     course:'React-native',
//     hobbies:['Read the book','Sports']
//  }
 
//  delete studentProfile.course;
//  console.log(studentProfile);
 
 
 //!Part2
 
//  const {name:studentName,age:studentAge,...rest}=studentProfile
//  console.log(studentAge,studentName,rest)
 
 
 //!Part3
//  const grades:number[] =[85,92,78,95]
//  console.log(grades[0],grades[1]);
 
 //!Part4
//  interface IAdditionalInfo{
//    address:string,
//    phoneNumber:string
//  }
 
//  const additionalInfo ={
//     address:'Astara',
//     phoneNumber:'0775329507'
//  }
 
//  const completeProfile:IAdditionalInfo & IStudentProfile= {...studentProfile,...additionalInfo}
//  console.log(completeProfile);

 //TODO task2
// type TEmployeeDetails={
//    fullName: string;
//    position: string;
//    yearsOfExperience: number;
//    skills: string[];
//    contact: {
//        email?: string;
//        phone: string;
//    };
// }
// const employeeDetails:TEmployeeDetails ={
//    fullName:"Ilqar Xakimov",
//    position:"Mobile developer",
//    yearsOfExperience:5,
//    skills:['five foreign language','coding'] ,
//    contact:{
//       email:'ixakimov13@gmail.com',
//       phone:'0556890404'
//    }
// }
//!Part1

// delete employeeDetails.contact.email
// employeeDetails["department"]  = "Engineer";
// console.log(employeeDetails)


//!Part2

// const{fullName:employeeName,position,contact,...rest} = employeeDetails
// console.log(employeeName,'\n',position,'\n',contact,'\n',rest)

//!Part3

// type TProjectScores = {
//    projectId:number,
//    score:number
// }
 
// const projectScores:TProjectScores[] =[
//    {
//       projectId:1,
//       score:50
//    },
//    {
//       projectId:2,
//       score:60
//    },
//    {
//       projectId:3,
//       score:80
//    }
// ]

// console.log("projectId:",projectScores[0].projectId,"Score:",projectScores[0].score);

//!Part4
// type TPersonalInfo={
//    homeAddress: string;
//     emergencyContact: string;
//     maritalStatus: string;
// }
// const personalInfo ={
//    homeAddress:"AAAf park",
//    emergencyContact:'077656011',
//    maritalStatus:'unmarried'
// }

// const completeEmployeeProfile:TEmployeeDetails & TPersonalInfo ={...employeeDetails,...personalInfo}
// console.log(completeEmployeeProfile);