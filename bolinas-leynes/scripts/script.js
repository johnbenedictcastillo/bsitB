const PROJECT_URL = "https://zzivlqstynxhbfabxhpi.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6aXZscXN0eW54aGJmYWJ4aHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0MDE5NzAsImV4cCI6MTk2OTk3Nzk3MH0.wntGDWfy7wcuhepHw2XwbInty25vUG_6AI4U4GsJTKg"


// Create a single supabase client for interacting with your database 
const connection = supabase.createClient(PROJECT_URL,API_KEY)


async function saveUser(email, uname, psw){

  const { data, error } = await connection.from("user").insert({
    email: email,
    uname: uname,
    psw: psw,
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
    });
    $( "#get-user" ).click(function( event ) {
      event.preventDefault();
        getUser();
    })
  });
