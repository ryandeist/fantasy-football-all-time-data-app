const mongoose = require("mongoose");

//create coach schema
const coachSchema = new mongoose.Schema({
    name: String,
    seasons: Number,
    totalRegularSeasonGames: Number, 
    regularSeasonWins: Number,
    regularSeasonLosses: Number,
    regularSeasonWinningPercentage: Number,
    playoffBerths: Number,
    playoffByes: Number, 
    playoffGames: Number,
    playoffWins: Number,
    playoffLosses: Number,
    playoffWinPercentage: Number,
    superBowlAppearances: Number,
    superBowlWins: Number,
    topThreeFinishes: Number,
});

// create coach model
const Coach = mongoose.model("Coach", coachSchema);

// export coach model
module.exports = Coach;