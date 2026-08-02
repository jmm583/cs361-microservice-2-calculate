// build service functions here and export so that controller has access to them

function studyScore(score1, score2, score3, score4, score5) {

    const   highScore = 5,
            numOfScores = 5,
            highestPossibleScore = numOfScores * highScore,
            reqScoreSum = (score1 + score2 + score3 + score4 + score5),
            scoreOutOf100 = (reqScoreSum / highestPossibleScore) * 100;

    return scoreOutOf100;
};


// console.log(studyScore(5, 4, 5, 5, 5, 5));

module.exports = { studyScore };