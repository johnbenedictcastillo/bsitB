const PROJECT_URL = "https://unrtwlhsybkttfnqvtgr.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucnR3bGhzeWJrdHRmbnF2dGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2ODc1NzksImV4cCI6MTk3MzI2MzU3OX0.08okn3PJ6NcEyCk3OEQjrZRrMvKWMjV_YIQ6KP__YFw"




const database = supabase.createClient(PROJECT_URL,API_KEY);

async function saveUser(email, username, password){

  const { data, error } = await connection.from("user").insert({
    emailadd: email,
    uname: username,
    psw: password,
})
  if(data) {
    console.log(data)
    //getUser();

  }
  if(error) {
    console.log(error)
    //return null

  }
}

    $( "#registration" ).submit(function( event ) {
      event.preventDefault();
      let email = $('#emailadd').val();
      let username = $('#uname').val();
      let password = $('#psw').val();
      saveUser(email,username,password);
    });
