 
//get user data function
function Register()
{
    debugger;
    alert("hello working");
    var Firstname = document.getElementById("Firstname");
    var Firstname = Firstname.value;

    var Lastname = document.getElementById("Lastname");
    var Lastname = Lastname.value;

    var Age = document.getElementById("Age");
    var Age = Age.value;

    var Email = document.getElementById("Email");
    var Email = Email.value;

    
    
    selectElement = document.querySelector('#Gender');
    output = selectElement.value;
  


            const Register={
                Firstname: Firstname.value,
                Lastname : Lastname.value,
                Age : Age.value,
                Email : Email.value
            }
}