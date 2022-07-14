const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwd3VucG5ramphaGd0anBmZW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3Njc2MjMsImV4cCI6MTk3MjM0MzYyM30.yncQeUCnT5GlDuqiSFsHGtcFFdvqv4QFwS7M-KV18zQ";

const url="https://spwunpnkjjahgtjpfenx.supabase.co";

const database=supabase.createClient(url,key);


const save=document.querySelector("#register");
save.addEventListener("click",async(e)=> {
alert("working")
e.preventDefault();
 const name=document.querySelector("#name").value; 
 const email=document.querySelector("#email").value;
 const password=document.querySelector("#password").value;
 save.innerText ="saving...";  
 save.setAttribute("disabled","True");

 const res=await database.from("users").insert({
    name:name,
    email:email,
    password:password
 })
 if(res){
    save.innerText ="register"
    save.setAttribute("disabled","false");
    console.log(res);
    

 }
 

})
