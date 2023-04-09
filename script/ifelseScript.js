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
                let num1 = 0,num2 = 0,num3 = 0,num4 = 0,num5 = 0;

                num1 = Math.floor(Math.random()*100);
                num2 = Math.floor(Math.random()*100);
                num3 = Math.floor(Math.random()*100);
                num4 = Math.floor(Math.random()*100);
                num5 = Math.floor(Math.random()*100);
                if(((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)))
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = "Random Numbers : "+num1+" "+num2+" "+num3+" "+num4+" "+num5+" <br><br> Maximum Number is : "+num1;
                }
                else if(((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)))
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = "Random Numbers : "+num1+" "+num2+" "+num3+" "+num4+" "+num5+" <br><br> Maximum Number is : "+num2;
                }
                else if(((num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5)))
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = "Random Numbers : "+num1+" "+num2+" "+num3+" "+num4+" "+num5+" <br><br> Maximum Number is : "+num3;
                }
                else if(((num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5)))
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = "Random Numbers : "+num1+" "+num2+" "+num3+" "+num4+" "+num5+" <br><br> Maximum Number is : "+num4;
                }
                else if(((num5 > num1) && (num5 > num2) && (num5 > num3) && (num5 > num4)))
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = "Random Numbers : "+num1+" "+num2+" "+num3+" "+num4+" "+num5+" <br><br> Maximum Number is : "+num5;
                }


                if(((num1 < num2) && (num1 < num3) && (num1 < num4) && (num1 < num5)))
                {
                   
                    document.getElementById("min").innerHTML = "Minimim Number is : "+num1;
                }
                else if(((num2 < num1) && (num2 < num3) && (num2 < num4) && (num2 < num5)))
                {
                    
                    document.getElementById("min").innerHTML = "Minimim Number is : "+num2;
                }
                else if(((num3 < num1) && (num3 < num2) && (num3 < num4) && (num3 < num5)))
                {
                   
                    document.getElementById("min").innerHTML = "Minimim Number is : "+num3;
                }
                else if(((num4 < num1) && (num4 < num2) && (num4 < num3) && (num4 < num5)))
                {
                    
                    document.getElementById("min").innerHTML = "Minimim Number is : "+num4;
                }
                else if(((num5 < num1) && (num5 < num2) && (num5 < num3) && (num5 < num4)))
                {
                   
                    document.getElementById("min").innerHTML = "Minimim Number is : "+num5;
                }
                
                break;
              
            case 2:
            
            let text;

            let user = String(prompt("Please enter the Date And Month e.g(01-03) : "));

            let myArrDayMon = user.split("-");
            
            let day = Number(myArrDayMon[0]);

            let month = Number(myArrDayMon[1]);

            if( ( (month > 03 ) && (month <  07) ) && ((day > 1) && (day < 32)))
            {
                if( ( (day > 19 ) && (day < 32 ) ) && (month == 03 ) )
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                     document.getElementById("result").innerHTML = day+" - MARCH<br>Valid";
                }
                else if( (day < 31 )  && (month == 04 ) )
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                     document.getElementById("result").innerHTML = day+" - APRIL<br>Valid";
                }
                else if( (day < 32 )  && (month == 05 ) )
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                     document.getElementById("result").innerHTML = day+" - MAY<br>Valid";
                }
                else if( (day < 31 )  && (month == 06 ) )
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                     document.getElementById("result").innerHTML = day+" - JUNE<br>Valid";
                }
            }
            else
            {
                document.getElementById("res").innerHTML = "====:RESULT:===";
                document.getElementById("result").innerHTML = day+"-"+month+" is InValid";

            }
            


             break;
                
            case 3:

                let year = Number(prompt("Please enter the Year : "));
                
                if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = year+" is a Leap Year";
                }
                else
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = year+" is a NOT Leap Year";
                }
                break;

            case 4:

                let randomNumber = Math.floor(Math.random() * 10);
        
                if(randomNumber <= 5)
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = "Head";
                }
                else
                {
                    document.getElementById("res").innerHTML = "====:RESULT:===";
                    document.getElementById("result").innerHTML = "Tail";
                }
                break;

            default: 
                document.getElementById("res").innerHTML = "Please Enter Valid Input..!!"; 
                break;

            

        }
        

       
    }

    

}