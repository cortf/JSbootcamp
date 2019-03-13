


let gradeCalc = function (studentScore, totalScore) {
    let score = 100 * (studentScore / totalScore )
    let lettergrade = 'x'

    if (score < 60){
        letterGrade = 'F'}
    if (score < 70 && score >= 60){
        letterGrade = 'D'}
    if (score < 80 && score >= 70){
        letterGrade = 'C'}
    if (score < 90 && score >= 80){
        letterGrade = 'B'}
    if(score >= 90){
        letterGrade = 'A'}

        // return  console.log(studentScore + '/'+ totalScore + '--> You got a ' + letterGrade + " " + score + '%')    
        return `${studentScore}/${totalScore} --> You got a ${letterGrade} (${score}%)`    

}
console.log(gradeCalc(60, 100))


