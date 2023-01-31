// Adding the Onclick calculateGrade function

$("#calculateGrade").click(function () {

    // Creating variables to hold input value to caclulate the grade

    let assignments = $("#assignmentPercentage").val()
    let groupWork = $("#groupPercentage").val()
    let quizzes = $("#quizPercentage").val()
    let midterm = $("#midtermPercentage").val()
    let final = $("#finalPercentage").val()
    let intex = $("#intexPercentage").val()

    //Add all the grade percentages together

    let finalGrade = (assignments * .5) + (groupWork * .1) + (quizzes * .1) + (midterm * .1) + (final * .1) + (intex * .1);

    // Long list of if statements to determine letter grades

    if (finalGrade >= 94) {
        letterGrade = 'A'
    }
    else if (finalGrade >= 90) {
        letterGrade = 'A-'
        
    }
    else if (finalGrade >= 87) {
        letterGrade = 'B+'
        
    }
    else if (finalGrade >= 84) {
        letterGrade = 'B'
        
    }
    else if (finalGrade >= 80) {
        letterGrade = 'B-'
        
    }
    else if (finalGrade >= 77) {
        letterGrade = 'C+'
        
    }
    else if (finalGrade >= 74) {
        letterGrade = 'C'
        
    }
    else if (finalGrade >= 70) {
        letterGrade = 'C-'
        
    }
    else if (finalGrade >= 67) {
        letterGrade = 'D+'
        
    }
    else if (finalGrade >= 64) {
        letterGrade = 'D'
        
    }
    else if (finalGrade >= 60) {
        letterGrade = 'D-'
        
    }
    else {
        letterGrade = 'E'
    }
    //Display final percentage and grade

    $("#showGrade").html("Your final grade percentage is: " + finalGrade + " and your final letter grade is: " + letterGrade);

});