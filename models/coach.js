const mongoose = require("mongoose");

//create coach schema
const coachSchema = new mongoose.Schema({
    name: String,
    seasons: Number,
    isActive: Boolean,
    totalRegularSeasonGames: Number, 
    regularSeasonWins: Number,
    regularWinPercent: Number,
    playoffBerths: Number,
    playoffByes: Number, 
    playoffGames: Number,
    playoffWins: Number,
    playoffWinPercent: Number,
    superBowlAppearances: Number,
    superBowlWins: Number,
});

// create coach model
const Coach = mongoose.model("Coach", coachSchema);

// export coach model
module.exports = Coach;
