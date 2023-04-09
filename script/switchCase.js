
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
                let num = Math.floor(Math.random()*10);
                    switch(num)
                    {
                        case 1:
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is One";
                            break;
                        case 2:
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is Two";
                            break;
                        case 3: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is Three";
                            break;
                        case 4:
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is Four";
                            break;
                        case 5: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is Five";
                            break;
                        case 6: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is Six";
                            break;
                        case 7: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is Seven"; 
                            break;
                        case 8: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is Eight"; 
                            break;
                        case 9: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" is Nine"; 
                            break;
                        default: document.getElementById("result").innerHTML = "Invalid Input";  
                    }
                }
                break;
              
            case 2:
                    let day = Number(document.getElementById("values").value);
                    switch(day)
                    {
                        case 1: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = day+" is Monday"; 
                         break;
                        case 2: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = day+" is Tuesday"; 
                         break;
                        case 3: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = day+" is Wednesday"; 
                          break;
                        case 4: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = day+" is Thursday"; 
                          break;
                        case 5: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = day+" is Friday"; 
                         break;
                        case 6: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = day+" is Saturday"; 
                         break;
                        case 7: 
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = day+" is Sunday";  
                         break; 
                        default: document.getElementById("result").innerHTML = "Invalid Input";  
                    }

                break;
                
            case 3:

               {
                    num = 100;
                    switch(num)
                    {
                        case 1 :  
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = num+" One"; 
                         break;
                        case 10:  
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" Ten"; 
                         break;
                        case 100:  
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" Hundred";  
                            break;
                        case 1000:     
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" Thousand";
                            break;
                        case 10000:     
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" Ten-Thousand";
                            break;
                        case 100000:     
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+" Lac";
                            break;
                        case 1000000:     
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+"Ten-Lac";
                            break;
                        case 10000000:     
                            document.getElementById("res").innerHTML = "====:RESULT:===";
                            document.getElementById("result").innerHTML = num+"Core";
                            break;
                    }
               }
                break;

            case 4:

                let unit = Number(Math.floor(Math.random()*10));
                
                let option = Number(prompt("Unit Conversion\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\nOptions:"));
                
                switch(option)
                {
                    case 1: 
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = "for Unit : "+unit+"<br>Feet to Inches : "+unit*12;
                      break;
                    case 2: 
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = "Feet to Meter : "+unit*0.3048;
                      break;
                    case 3: 
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = "Feet to Inches : "+unit/12;  
                      break;
                    case 4: 
                        document.getElementById("res").innerHTML = "====:RESULT:===";
                        document.getElementById("result").innerHTML = "Feet to Inches : "+unit/0.3048; 
                      break;
                }

            default: 
                document.getElementById("res").innerHTML = "Please Enter Valid Input..!!"; 
                break;

            

        }
        

       
    }

    

}



/*
//uc1
num=6;



//UC2
day=7;

switch(day)
{
    case 1: 
        console.log("Monday"); 
        break;
    case 2: 
        console.log("Tuesday"); 
        break;
    case 3: 
        console.log("Wednesday"); 
        break;
    case 4: 
        console.log("Thursday"); 
        break;
    case 5: 
        console.log("Friday"); 
        break;
    case 6: 
        console.log("Saturday"); 
        break;
    case 7: 
        console.log("Sunday"); 
        break;   
}


//UC3
num = 100;

switch(num)
{
    case 1   :  console.log("one"); break;
    case 10  :  console.log("Ten"); break;
    case 100 :  console.log("Hundred"); break;
    case 1000:  console.log("Thousend"); break;
}
// uc4  

let unit=24;
let option=1;

switch(option)
{
    case 1: 
        console.log("Feet to Inch: "+ unit*12); 
        break;
    case 2: 
        console.log("Feet to Meter: " + unit*0.3048); 
        break;
    case 3:
         console.log("Inch to Feet: "+ unit/12); 
        break;
    case 4: 
        console.log("Meter to Feet: "+ unit/0.3048);
         break;
}
*/