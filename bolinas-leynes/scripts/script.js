const PROJECT_URL = "https://zzivlqstynxhbfabxhpi.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6aXZscXN0eW54aGJmYWJ4aHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0MDE5NzAsImV4cCI6MTk2OTk3Nzk3MH0.wntGDWfy7wcuhepHw2XwbInty25vUG_6AI4U4GsJTKg"


// Create a single supabase client for interacting with your database 
const connection = supabase.createClient(PROJECT_URL,API_KEY)


async function saveUser(emailadd, uname, psw){

  const { data, error } = await connection.from("user").insert({
    Email: emailadd,
    Username: uname,
    Password: psw,
})
  if(data) {
    console.log(data)
    //getStudent();

  }
  if(error) {
    console.log(error)
    //return null

  }

}

$(document).ready(function(){
  
    $( "#registration" ).submit(function( event ) {
      event.preventDefault();
      let emailadd = $('#emailadd').val();
      let uname = $('#uname').val();
      let psw = $('#psw').val();
      saveUser(email,uname,psw)
    });
  });
