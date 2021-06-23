let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome': //If Employee logs in, display Welcome.
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);