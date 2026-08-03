// Study Score Service

function studyScore(score1, score2, score3, score4, score5) {

    const   highScore = 5,
            numOfScores = 5,
            highestPossibleScore = numOfScores * highScore,
            reqScoreSum = (score1 + score2 + score3 + score4 + score5),
            scoreOutOf100 = (reqScoreSum / highestPossibleScore) * 100;

    return scoreOutOf100;
};

module.exports = { studyScore };
