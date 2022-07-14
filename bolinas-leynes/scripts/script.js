const PROJECT_URL = "https://unrtwlhsybkttfnqvtgr.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucnR3bGhzeWJrdHRmbnF2dGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2ODc1NzksImV4cCI6MTk3MzI2MzU3OX0.08okn3PJ6NcEyCk3OEQjrZRrMvKWMjV_YIQ6KP__YFw"

const connection = supabase.createClient(PROJECT_URL,API_KEY)

const signUpUser = async (email, username, password) => {
  const { user, session, error } = await connection.auth.signUp(
    {
      email,
	    username,
      password
    }
  )

  return user;
}

const logInUser = async (username, password) => {
  const { user, session, error } = await connection.auth.signIn(
    {
      username,
      password
    }
  )
  console.log("user: ", user)
  console.log("session: ", connection.auth.session())

}
