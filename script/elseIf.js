function fun()
{
    let chk = 0;
    chk = document.getElementById("values").value;
    if((chk < 1 ) || ( (chk > '!') && (chk < '/')))
    {
        document.getElementById("res").innerHTML = "Please Enter Valid input";
    }
    else
    {
        chk = Number(document.getElementById("values").value);
        switch(chk)
        {
            case 1:

                {
                    let chk = Number(prompt("Enter the Number\n"));
                    if(chk == 1)
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is One";
                    }
                    else if(chk == 2)
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is Two";
                    }
                    else if(chk == 3) 
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is Three";
                    }
                    else if(chk == 4)
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is Four";
                    }
                    else if(chk == 5)
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is Five";
                    }
                    else if(chk == 6)
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is Six";
                    }
                    else if(chk == 7)
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is Seven"; 
                    }
                    else if(chk == 8)
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is Eight"; 
                    }
                    else if(chk == 9)
                    {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = chk+" is Nine"; 
                    }
                    else
                    {
                        document.getElementById("result").innerHTML = "Invalid Input"; 
                    
                    }
                }

                break;
              
            case 2:
            
               {

                let num = Number(prompt("Enter the Number (eg. 1 - 9)\n"));
                if(num == 1)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Monday"; 
                }
                else if(num == 2)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Tuesday"; 
                }
                else if(num == 3)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Wednesday"; 
                }
                else if(num == 4)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Thursday"; 
                }
                else if(num == 5)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Friday"; 
                }
                else if(num == 6)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Saturday"; 
                }
                else if(num == 7)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Sunday";  
                }
                else
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+"-"+month+" is InValid";

                }
               }
        
             break;
                
            case 3:

            {

                let num = Number(prompt("Enter the Number(eg. 1-100000000 )\n"));
                if(num == 1)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is one"; 
                }
                else if(num == 10)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Ten"; 
                }
                else if(num == 100)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Hundread"; 
                }
                else if(num == 1000)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Thousand"; 
                }
                else if(num == 10000)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Ten-Thousand"; 
                }
                else if(num == 100000)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Lac"; 
                }
                else if(num == 1000000)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Ten-Lac";  
                }
                else if(num == 10000000)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+" is Cores";  
                }
                else
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = num+"-"+month+" is InValid";

                }
               }
                break;

            case 4:
               {
                   let a = Math.floor(Math.random() * 10);
                   let b = Math.floor(Math.random() * 10);
                   let c = Math.floor(Math.random() * 10);
                   
                   let num1 = a + b * c;
                   let num2 = a % b + c;
                   let num3 = c + a / b;
                   let num4 = a * b + c;

                   if((num1 > num2) && (num1 > num3) && (num1 > num4))
                   {
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = "Randam Numbers : "+a+" "+b+" "+c+"<br>operation <br> (a + b * c) : "+num1+"<br>( a % b + c ) : "+num2+"<br>( c + a / b ) : "+num3+"<br>( a * b + c ) : "+num4+"<br><br>Maximum : "+num1;                         
                   }
                   else if((num2 > num1) && (num2 > num3) && (num2 > num4))
                   {
                       document.getElementById("res").innerHTML = "====:RESULT:===";
                       document.getElementById("result").innerHTML = "Randam Numbers : "+a+" "+b+" "+c+"<br>operation <br> (a + b * c) : "+num1+"<br>( a % b + c ) : "+num2+"<br>( c + a / b ) : "+num3+"<br>( a * b + c ) : "+num4+"<br><br>Maximum : "+num2;                         
                   }
                   else if((num3 > num1) && (num3 > num2) && (num3 > num4))
                   {
                       document.getElementById("res").innerHTML = "====:RESULT:===";
                       document.getElementById("result").innerHTML = "Randam Numbers : "+a+" "+b+" "+c+"<br>operation <br> (a + b * c) : "+num1+"<br>( a % b + c ) : "+num2+"<br>( c + a / b ) : "+num3+"<br>( a * b + c ) : "+num4+"<br><br>Maximum : "+num3;                         
                   }
                   else if((num4 > num1) && (num4 > num2) && (num4 > num3))
                   {
                       document.getElementById("res").innerHTML = "====:RESULT:===";
                       document.getElementById("result").innerHTML = "Randam Numbers : "+a+" "+b+" "+c+"<br>operation <br> (a + b * c) : "+num1+"<br>( a % b + c ) : "+num2+"<br>( c + a / b ) : "+num3+"<br>( a * b + c ) : "+num4+"<br><br>Maximum : "+num4;                         
                   }
                    //Minimum
                   if((num1 < num2) && (num1 < num3) && (num1 < num4))
                   {
                        
                        document.getElementById("min").innerHTML = "Minimum : "+num1;                         
                   }
                   else if((num2 < num1) && (num2 < num3) && (num2 < num4))
                   {
                       document.getElementById("res").innerHTML = "====:RESULT:===";
                       document.getElementById("min").innerHTML = "Minimum : "+num2;                         
                   }
                   else if((num3 < num1) && (num3 < num2) && (num3 < num4))
                   {
                       document.getElementById("res").innerHTML = "====:RESULT:===";
                       document.getElementById("min").innerHTML = "Minimum : "+num3;                         
                   }
                   else if((num4 < num1) && (num4 < num2) && (num4 < num3))
                   {
                       document.getElementById("res").innerHTML = "====:RESULT:===";
                       document.getElementById("min").innerHTML = "Minimum : "+num4;                         
                   }
                  
                   

               }
                break;

            default: 
                document.getElementById("res").innerHTML = "Please Enter Valid Input..!!"; 
                break;

            

        }
        

       
    }

    

}