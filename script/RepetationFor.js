function fun()
{
    let chk = 0;
    chk = document.getElementById("values").value;
    if((chk < 1 ) || (( (chk >= '!') && (chk <= '/')) || (( (chk >= ':') && (chk <= '~')))))
    {
        document.getElementById("res").innerHTML = "Please Enter Valid input";
    }
    else
    {
        {
            let opt = Number(document.getElementById("values").value);

            switch(opt)
            {
               
                case 1:
                    let num = Number(prompt("Table of 2*n Program\nEnter the Number :"));
                    let resut = "";
                    document.getElementById("res").innerHTML = "===: Result :===";
                    for(let i = 1; i <= num; i++)
                    {
                        resut += 2*i+", ";
                    }
                    document.getElementById("result").innerHTML = "Table ofx 2*n :<br>"+resut;
                    break;
                case 2:
                    {
                        
                        let num = Number(prompt("Harmonic Number Series\nEnter the Number : "));
                        let newStr = "";
                        let result = 0.0;
                        document.getElementById("res").innerHTML = "===: Result :===";
                        for(let i = num; i >= 1; i--)
                        {
                            result+= 1/i;
                            newStr += result+", ";
                        }
                        document.getElementById("result").innerHTML = "Harmonic Series :<br>"+newStr;
                        
                    }
                    break;
                case 3:
                    {
                            
                        let num = Number(prompt("Prime Number Program\nEnter the Number :"));
                        let newStr = "";
                        let result = 0;
                        let i = 0;
                        document.getElementById("res").innerHTML = "===: Result :===";
                        for(i = 2; i <= num; i++)
                        {
                            if( (num%i) == 0)
                            {
                                break;
                            }

                            
                        }
                            if(i >= num)
                            {
                                document.getElementById("result").innerHTML = num+" is Prime Number";
                            }
                            else
                            {
                                document.getElementById("result").innerHTML = num+" is NOT Prime Number";

                            }
                            
                    }
                    break;
                case 4:
                    {
                            
                        let num = Number(prompt("Prime Number Range Program\nEnter the Number :"));
                        let newStr = "";
                        let result = 0;
                        let i = 0;
                        document.getElementById("res").innerHTML = "===: Result :===";
                        for(i = 2; i <= num; i++)
                        {
                            let j = 2;
                            for(j = 2;j < i;j++)
                            {
                                if( (i%j) == 0)
                                {
                                   break;
                                }
                            }

                            if(j >= i)
                             {
                                newStr += i+", ";
                             }
                            
                        }

                        document.getElementById("result").innerHTML = "Prime Number upto "+num+"<br>"+newStr;
                           
                            
                    }
                    
                    break;

                case 5:
                    {
                            
                        let num = Number(prompt("Factorial Program\nEnter the Number :"));
                        let newStr = "";
                        let result = 1;
                        let i = 0;
                        document.getElementById("res").innerHTML = "===: Result :===";
                        for(i = 1; i <= num; i++)
                        {
                            
                            result *= i; 
                                
                        }
    
                            document.getElementById("result").innerHTML = "Factorial of "+num+" is : "+result;
                               
                                
                        }
                        
                        break;
           
                
                
                default:
                    document.getElementById("res").innerHTML = "Please Enter Valid Input"
            }
        } 
    }
}