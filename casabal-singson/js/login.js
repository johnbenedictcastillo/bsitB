const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwd3VucG5ramphaGd0anBmZW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3Njc2MjMsImV4cCI6MTk3MjM0MzYyM30.yncQeUCnT5GlDuqiSFsHGtcFFdvqv4QFwS7M-KV18zQ";

const url="https://spwunpnkjjahgtjpfenx.supabase.co";

const database=supabase.createClient(url,key);


 
 
var button = document.getElementById("log");
button.addEventListener("click", myfunction);

async function myfunction(){

   var email = document.getElementById("email");
   var pass = document.getElementById("password");

   const { data, error } = await database.from("users").select("*").eq('email', email.value).eq('password', pass.value);
   if (data){
    if (data.length > 0){
         window.alert("Successfully Login!");
         sessionStorage.setItem("name", data[0].name);
         sessionStorage.setItem("email", data[0].email);
        sessionStorage.setItem("password", data[0].password);
        location.replace('/casabal-singson/product.html')

    }else {
        window.alert("Failed to Log-In!");
         email.value = null;
         pass.value = null;
    }
        

   }
    if(error){
      window.alert("Failed to Log-In!");
         email.value = null;
         pass.value = null;
    }
    
}

