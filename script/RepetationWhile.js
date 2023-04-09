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
                    {
                        
                        let i = 1; 
                        let pwr = 1;
                        while(pwr != 256)
                        {
                            pwr = 2*i;
                            i++;
                        }

                        document.getElementById("result").innerHTML = pwr+" is Reached";
                    }
                    break;
                case 2:
                    {
                        
                        let headCount = 0;
                        let tailCount = 0;

                        let newStr = "";
                        
                        while(headCount < 11 && tailCount < 11)
                        {
                            let randomNumber=Math.floor(Math.random() * 10);
                            
                            if(randomNumber<=5)
                            {
                                newStr += "Head, "
                                headCount++;
                            }
                            else
                            {
                                newStr += "Tail, "
                                tailCount++;
                            }
                        }
                        document.getElementById("res").innerHTML = "===: Result :===";
                        document.getElementById("result").innerHTML = "Count of Head : "+headCount+"<br>Count of Tail : "+tailCount+"<br>Sequence : "+newStr;
                        
                    }
                    break;
                case 3:
                    {
                            
                        
                            
                    }
                    break;
                case 4:
                    {
                            
                        
                            
                  
                           
                            
                    }
                    
                    break;

                case 5:
                    {
                      


                    }
                    break;
           
                
                
                default:
                    document.getElementById("res").innerHTML = "Please Enter Valid Input"
            }
        } 
    }
}