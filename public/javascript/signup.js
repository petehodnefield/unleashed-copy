const errorEl = document.querySelector('#error');

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    console.log(username, password)

  
    if (username == "" || password == "" || email == "") {
      const response = await fetch('/api/user', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('this is a success')
        const response = await fetch('/api/user/login', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
  
        // check the response status
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          console.log('heybro');          
          alert(response.statusText);
        }
      } else {
        console.log('yayadude')
        errorEl.innerHTML= 'Please fill out Sign Up Form Completely!';
        // alert(response.statusText);
      }
    }
  }
  
document.querySelector('.login-form').addEventListener('submit', signupFormHandler)