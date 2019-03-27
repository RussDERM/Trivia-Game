// Ensure document is ready, then load game function
$('document').ready(function () {

    $('#timeRemaining').hide();


});

//game variables and questions
var questions = {
    current: 0,
    rightAnswer: 0,
    wrongAnswer: 0,
    noAnswer: 0,
    timerId: '',
    timer: 20,
    timerRunning: false,

    questions: {
        q1: 'What has roots as nobody sees, Is taller than trees, Up, Up it goes, And yet never grows?',
        q2: 'Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still. What are they?',
        q3: 'Voiceless it cries, Wingless it flutters, Toothless it bites, Mouthless it mutters. What is it?',
        q4: 'As eye in a blue face, Saw an eye in a green face. "That eye is like to this eye" Said the first eye, "But in a low place, Not in a high place." What are they two eyes?',
        q5: 'It cannot be seen, cannot be felt, Cannot be heard cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter. What is it?',
        q6: 'A box without hinges, key or lid, Yet treasure inside is hid. What is it?',
        q7: 'Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking. What am I?',
        q8: 'This thing all things devour: Birds, beasts, trees, flowers; Frans iron, bites steel; Grinds hard stones to meal; Slays King, ruins town, and beats high mountain down. What is it?',
    },
    answerOptions: {
        q1: ['A Mountain', 'A Tree', 'An Adult', 'Minas Tirith'],
        q2: ['Thirty Horses...?', 'Marshmellows', 'Aliens', 'Teeth'],
        q3: ['Night', 'Wind', 'Cold', 'Death'],
        q4: ['Two people looking at each other', 'A Calico Cat', 'The Sun, looking on a single flower', 'Gibberish'],
        q5: ['Sadness', 'Solitude', 'Winter', 'Dark'],
        q6: ['The Third Eye', 'Cryptocurrency', 'Inner peace', 'An Egg'],
        q7: ['Undead Soliders', 'NPCs', 'Fish', 'The Cryptkeeper'],
        q8: ['Global Warming', 'Entropy', 'Post-Moderism', 'Time']
    },

    rightAnswer: {
        q1: 'A Mountain',
        q2: 'Teeth',
        q3: 'Wind',
        q4: 'The Sun, looking on a single flower',
        q5: 'Dark',
        q6: 'An Egg',
        q7: 'Fish',
        q8: 'Time',
    },
    //Gamestart function
    gameStart: function () {
        //resets variables for clear restart
        questions.current = 0;
        questions. 
}