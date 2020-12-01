function valid()
{
var name= document.getElementById("t1").value;
var email= document.getElementById("t2").value;
var uniname= document.getElementById("t3").value;
var bran= document.getElementById("t4").value;
var state= document.getElementById("t5").value;
var address= document.getElementById("t6").value;
var pno= document.getElementById("t7").value;
var age= document.getElementById("t8").value;
var uname= document.getElementById("t9").value;
var pwd= document.getElementById("t10").value;
var cpwd= document.getElementById("t11").value;
var pwd_expr = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
var letters = /^[A-Za-z]+$/;
var cap = /^[A-Z]/;
var add = /^[a-zA-Z0-9_\.\-]/;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var numbers = /^[0-9]+$/;
        if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if (uniname=='') 
		{
            alert('Please enter your university/college name');
		}
		else if (!letters.test(uniname))
		{
			alert('Invalid');
		}
		else if(bran=='')
		{
			alert('Please enter your branch');
		}
		else if (!letters.test(bran))
		{
			alert('Invalid branch');
		}
		else if(state=='')
		{
			alert('Please enter your state');
		}
		else if (!letters.test(state))
		{
			alert('Invalid state');
		}
		else if(address=='')
		{
			alert('Please enter your address');
		}
		else if (!add.test(address))
		{
			alert('Invalid address');
		}
		else if(pno=='')
		{
			alert('Please enter your phone number');
		}
		
		else if (!numbers.test(pno))
		{
			alert('Invalid phone number');
		}
		else if (pno<10) 
		{
			alert('Please enter 10 digit number');
		}
		else if(age=='')
		{
			alert('Please enter your user age');
		}
		
		else if (!numbers.test(age))
		{
			alert('Invalid age');
		}
		else if (age<=0) 
		{
			alert('Please enter a valid age');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pwd_expr.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("t11").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("t11").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{
			alert('Thank You for the submission');
			window.location="docc.html";
		}
}