const PROJECT_URL = "https://unrtwlhsybkttfnqvtgr.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucnR3bGhzeWJrdHRmbnF2dGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2ODc1NzksImV4cCI6MTk3MzI2MzU3OX0.08okn3PJ6NcEyCk3OEQjrZRrMvKWMjV_YIQ6KP__YFw"



const connection = supabase.createClient(PROJECT_URL,API_KEY);

async function sentUser(firstname, lastname, email, country, subject){

  const { data, error } = await connection.from("contactus").insert({
    firstname: firstname,
    lastname: lastname,
    email: email,
    country: country,
    subject: subject
})
  if(data) {
    alert("Sent");
    console.log(data)
    //getUser();

  }
  if(error) {
    console.log(error)
    //return null

  }
  
}

$(document).ready(function(){

    $( "#sent" ).submit(function( event ) {
      event.preventDefault();
      let firstname = $('#firstname').val();
      let lastname = $('#lastname').val();
      let email = $('#email').val();
      let country = $('#country').val();
      let subject = $('#subject').val();
      sentUser(firstname, lastname, email, country, subject);
      //location.replace('/bolinas-leynes/index.html')
    });
 
  });
