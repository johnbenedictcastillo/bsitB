const PROJECT_URL = "https://unrtwlhsybkttfnqvtgr.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucnR3bGhzeWJrdHRmbnF2dGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2ODc1NzksImV4cCI6MTk3MzI2MzU3OX0.08okn3PJ6NcEyCk3OEQjrZRrMvKWMjV_YIQ6KP__YFw"



const database = supabase.createClient(PROJECT_URL,API_KEY);

const usersaccount=document.querySelector("#usersaccount");
usersaccount.addEventListener("click",async(e)=> {
alert("Done")
e.preventDefault();
 const email=document.querySelector("#emailadd").value; 
 const username=document.querySelector("#uname").value;
 const password=document.querySelector("#psw").value;
 usersaccount.innerText ="Saving...";  
 usersaccount.setAttribute("disabled","True");

 const res=await database.from("user").insert({
    email:emailadd,
    username:uname,
    password:psw
 })
 if(res){
    usersaccount.innerText ="Registered"
    usersaccount.setAttribute("disabled","false");
    console.log(res);
  
 }
 
})
