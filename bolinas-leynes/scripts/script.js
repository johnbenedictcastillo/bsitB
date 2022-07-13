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

async function getUser() {
  $('#user-table').show();
  let tbody = $("#tbody");
  let loading = $("#loading");
  let tr = "";
  loading.text("Loading....")
  const { data, error } = await connection.from("user").select("*");
  if (data) {
      for (var i in data) {
          tr += `<tr>
            <td>${data[i].id}</td>
            <td>${data[i].email}</td>
            <td>${data[i].uname}</td>
            <td>${data[i].psw}</td>
            </tr>`;
            }
      tbody.html(tr);
      loading.text("")

  }

}

$(document).ready(function(){

  
    $('#students-table').hide();
    // jQuery methods go here
    $( "#registration" ).submit(function( event ) {
      event.preventDefault();
    });
    $( "#get-user" ).click(function( event ) {
      event.preventDefault();
        getUser();
    })
  });
