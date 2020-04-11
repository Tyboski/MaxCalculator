//Calculate your 1 rep max

function getMax(weightLifted, repsCompleted) {
    // Ask for weight lifted
    var weightLifted = prompt("Input your weight lifted.");

    // Ask for reps completed
    var repsCompleted = prompt("How many reps did you complete?");

    //Calculate the 1 rep max based of the amount of times you can lifte a given weight.

    var max = (1.0278-(0.0278 * repsCompleted));
    max = weightLifted / max;
    
    //console.log(Math.round(max));
    return "You repped " + weightLifted + " " + repsCompleted + " times" + " Making your estimated 1 rep max " + Math.round(max);
}

getMax();