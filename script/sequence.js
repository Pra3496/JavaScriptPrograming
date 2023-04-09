function fact()
{
    let chk = 0;
    chk = document.getElementById("values").value;
    if((chk < 1 ) || ( (chk > '!') && (chk < '/')))
    {
        document.getElementById("res").innerHTML = "please Enter Valid input";
    }
    else
    {
        chk = Number(document.getElementById("values").value);
        switch(chk)
        {
            case 1:
                let randomNumber = 0;
                randomNumber = Math.floor(Math.random()*100);
                //console.log(randomNumber);
               

                document.getElementById("res").innerHTML = "====:RESULT:===";
                document.getElementById("result").innerHTML = "Code  <br> randomNumber = Math.floor(Math.random()*100) <br>  "+randomNumber;
                break;
            case 2:
                let die = (Math.floor(Math.random() * 10)%6)+1;

                document.getElementById("res").innerHTML = "====:RESULT:===";
                document.getElementById("result").innerHTML = "-- Code --<br>let die = (Math.floor(Math.random() * 10)%6)+1; <br> Result  is : " +die;
                break;

            case 3:
                let sumAvg = 0;
                let num1 = Math.floor(Math.random()*10);
                let num2 = Math.floor(Math.random()*10);
                let num3 = Math.floor(Math.random()*10);
                let num4 = Math.floor(Math.random()*10);
                let num5 = Math.floor(Math.random()*10);

                sumAvg = num1 + num2 + num3 + num4 + num5;

                document.getElementById("res").innerHTML = "====:RESULT:===";
                document.getElementById("result").innerHTML = "<br>Random number : "+num1+" "+num2+" "+num3+" "+num4+" "+num5+"<br>Sum is : "+sumAvg+"<br> Average  is : " +sumAvg/5;
            
                break;

            case 4:
                let die_One= (Math.floor(Math.random() * 10)%6)+1;
                let die_Two= (Math.floor(Math.random() * 10)%6)+1;
                sum = die_One + die_Two;
               
                document.getElementById("res").innerHTML = "====:RESULT:===";
                document.getElementById("result").innerHTML = "-- Code --<br>let die_One= (Math.floor(Math.random() * 10)%6)+1 <br>let die_Two= (Math.floor(Math.random() * 10)%6)+1<br> Result  is : " +sum;
                
                break;

            default: 
                document.getElementById("res").innerHTML = "Please enter correct number";
                break;

            

        }
        

       
    }

    

}






