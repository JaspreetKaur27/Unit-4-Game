$(document).ready(function()
{
    //on-click event on div to display the another div for reading rules
    $("#rulediv").click(function()
    {
        $("#descdiv").show("slow");   
    }); 

    //generating random number between 1 to 120
    var randomNumber = Math.floor(Math.random() * 119) + 1;

    //grabing references of the placeholders in the html and storing in the variables
    var randnumber = $("#rand_number").text(randomNumber);
    var win = $("#wins").text(wins);
    var loss = $("#losses").text(losses);
    var usertotal = $("#user_total").text(total);

    //decalaring and intializing three variables so later on it can work as counter to increment value
    var wins = 0;
    var losses = 0;
    var total = 0;

    //decalring 4 variables to generate 4 random numbers for the 4 gems buttons to genrate random value
    var rednum = Math.floor(Math.random() * 11) + 1;
    var yellownum = Math.floor(Math.random() * 11) + 1;
    var greennum = Math.floor(Math.random() * 11) + 1;
    var bluenum = Math.floor(Math.random() * 11) + 1;

    //this fucntion reset all values when results declared as win or loss
     function reset()
     {
        randomNumber = Math.floor(Math.random() * 119) + 1;
        randnumber.text(randomNumber);
        rednum = Math.floor(Math.random() * 11) + 1;
        yellownum = Math.floor(Math.random() * 11) + 1;
        greennum = Math.floor(Math.random() * 11) + 1;
        bluenum = Math.floor(Math.random() * 11) + 1;

        total = 0;
        usertotal.text(total);  
     }


     /*function winNum which is called when win condition will true, and then it will increment the win placeholder,
        show alert box and call reset function to reset the all values and new game started
     */
     function winNum()
     {
        alert("Congrats! You Are the winner :)");
        wins++;
        win.text(wins);
        reset();
     }

     /*function lossNum which is called when loss condition will true, and then it will increment the loss placeholder,
        show alert box and call reset function to reset the all values and new game started
     */
     function lossNum()
     {
         alert("Oops! You lose :(. Your Total was: " + total + ". That does not match random number. Let's Try Again");
         losses++;
         loss.text(losses);
        reset();
     }


     //onclick function on the red gem button 
     $("#redgem").click(function()
    {
        total = total + rednum;
        usertotal.text(total);

        if(total == randomNumber)
        {
            winNum();
        }
        else if (total > randomNumber)
        {
            lossNum();
        }
    });

    //onclick function on the green gem button
    $("#greengem").click(function()
    {
        total = total + greennum;
        usertotal.text(total);

        if(total == randomNumber)
        {
            winNum();
        }
        else if (total > randomNumber)
        {
            lossNum();
        }

    });

    //onclick function on the yellow gem button
    $("#yellowgem").click(function()
    {
        total = total + yellownum;
        usertotal.text(total);

        if(total == randomNumber)
        {
            winNum();
        }
        else if (total > randomNumber)
        {
            lossNum();
        }
    });

    //onclick function on the blue gem button
    $("#bluegem").click(function()
    {
        total = total + bluenum;
        usertotal.text(total);

        if(total == randomNumber)
        {
            winNum();
        }
        else if (total > randomNumber)
        {
            lossNum();
        }
    });
});