var count = 0; //Count begins at god().
var mood = 5; //Initialize mood.
var feelings = 0; //Initialize feelings.
var name = false; //Initialize name.
var t = 0; //Initialize t, later equal to setTimeout(eyeIrises, 3000).
var tt = 0; //Initialize tt, later equal to setTimeout(callBlink, 2500).
var ttt = 0; //Initialize ttt, later equal to setTimeout(emotion, mouthRate).
var mouthSmallChange = 1; //Initialize mouthSmallChange.
var mouthBigChange = 1; //Initialize mouthBigChange.
var browPosition = 4; //Initialize browPosition.
var tempBrowPosition = 3; //Initialize tempBrowPosition.
var randomOffset = 0; //Initialize randomOffset for eyebrows.
var devilBrowSwitch = false; //Initialize devilBrowSwitch.
var devilAtLeastOnce = false; //Initialize devilAtLeastOnce so that afterwards the angel can appear.
var haloBrowSwitch = false; //Initialize haloBrowSwitch but technicaly it doesn't matter if it's true or false since devilAtLeastOnce will be the operative variable in dictating halo state long after haloBrowSwitch has probably already changed to false numerous times.

//BABY CUP TOGGLES OPACITY ONCE ON LOAD TO CONCEAL HALO, DEVIL STATE AND TEARS AS THEY LOAD
var babyCup = document.getElementById('babyCup');
babyCup.onload = appearToggle();
function appearToggle() {
    babyCup.classList.toggle('babyCup-1');
    babyCup.classList.toggle('babyCup-2');
};

//LEFT EYE POSITION TOGGLES
var leftEye = document.getElementById('lefteye');
leftEye.onclick = leftEyeToggle();
function leftEyeToggle() {
    leftEye.classList.toggle('lefteye__1');
    leftEye.classList.toggle('lefteye__2');
};
//RIGHT EYE POSITION TOGGLES
var rightEye = document.getElementById('righteye');
rightEye.onclick = rightEyeToggle();
function rightEyeToggle() {
    rightEye.classList.toggle('righteye__1');
    rightEye.classList.toggle('righteye__2');
};

//CUP COMPENSATION POSITION TOGGLES
var cupCompensation = document.getElementById('cup-compensation');
cupCompensation.onclick = cupCompensationToggle();
function cupCompensationToggle() {
    cupCompensation.classList.toggle('cup-compensation__1');
    cupCompensation.classList.toggle('cup-compensation__2');
};

//CUP POSITION TOGGLES
var cup = document.getElementById('cup');
cup.onclick = cupToggle();
function cupToggle() {
    cup.classList.toggle('cup__1');
    cup.classList.toggle('cup__2');
};

//CUP COLOR TOGGLES
var cupOverlay = document.getElementById('cup-overlay');
cupOverlay.onclick = cupOverlayToggle();
function cupOverlayToggle() {
    cupOverlay.classList.toggle('cup-overlay-1');
    cupOverlay.classList.toggle('cup-overlay-2');
};
var invisibleNoseBridge = document.getElementById('invisible-nose-bridge');
invisibleNoseBridge.onclick = invisibleNoseBridgeToggle();
function invisibleNoseBridgeToggle() {
    invisibleNoseBridge.classList.toggle('invisible-nose-bridge-1');
    invisibleNoseBridge.classList.toggle('invisible-nose-bridge-2');
};

//HANDLE POSITION TOGGLES
var handle = document.getElementById('handle');
handle.onclick = handleToggle();
function handleToggle() {
    handle.classList.toggle('handle__1');
    handle.classList.toggle('handle__2');
};

//LEFT IRIS SWITCHES AMONG 56 DIFFERENT CLASSES WHEN BEHAVIOR IS DICTATED BY PYRAMID OF RANDOM SOLUTIONS AND 9 DIFFERENT CLASSES WHEN INTERACTING VIA VOICE COMMAND
function irisLeftEyeSwitch(position) {
    var newTempStr = `<div id="iris-lefteye" class="iris-${position}"></div>`;
    var child = document.getElementById('iris-lefteye');
    var parent = document.getElementById('lefteye')
    child.parentNode.removeChild(child);
    parent.insertAdjacentHTML('beforeend', newTempStr);
};

//RIGHT IRIS SWITCHES AMONG 56 DIFFERENT CLASSES WHEN BEHAVIOR IS DICTATED BY PYRAMID OF RANDOM SOLUTIONS AND 9 DIFFERENT CLASSES WHEN INTERACTING VIA VOICE COMMAND
function irisRightEyeSwitch(position) {
    var newTempStr = `<div id="iris-righteye" class="iris-${position}"></div>`;
    var child = document.getElementById('iris-righteye');
    var parent = document.getElementById('righteye')
    child.parentNode.removeChild(child);
    parent.insertAdjacentHTML('beforeend', newTempStr);
};

//FUNCTION THAT CALLS THE TWO IRIS FUNCTIONS SO THEY CAN HAVE THEIR OWN SEPERATE TIMING WITHIN THE INTERVAL THAT GOD() DOESN'T CALL THEM/CLEAR THE ASSOCIATED TIMEOUT
function eyeIrises() {
    let position;
    if (name == true) {
        position = 56 + Math.ceil((Math.random() * 9));
    } else if (name == false) {
        position = Math.ceil((Math.random() * 56));
    }
    irisLeftEyeSwitch(position);
    irisRightEyeSwitch(position);
    t = setTimeout(eyeIrises, 3000);
};

//EYES PARENT CLASS TOGGLES BETWEEN VISIBLE AND HIDDEN (OPEN VS SHUT)
var eyes = document.getElementById('eyes');
eyes.onclick = eyesToggle();
function eyesToggle() {
    eyes.classList.toggle('eyes__1');
    eyes.classList.toggle('eyes__2');
};
//THE EYES PARENT CLASS TOGGLING FUNCTION IS CALLED TWICE IN SUCCESSION (A BLINK) AT A RATE DESIGNATED BY A RANDOM VARIABLE BETWEEN 20ms AND 120ms DEPICTING THE LENGTH OF TIME THE EYES ARE CLOSED
function blink() {
    var blinkSuspenseTime = Math.random()*100 + 20;
    eyesToggle();
    setTimeout(function() {
        eyesToggle();
    }, blinkSuspenseTime)
};
//BLINK FUNTION CAN'T BE CALLED FROM GOD, IT HAS TO BE CALLED FROM A FUNCTION WITH ITS OWN SETTIMEOUT TO DESIGNATE THE RATE OF BLINKING, THEN THE CLEARTIMEOUT HAS TO HAPPEN FROM GOD
function callBlink() {
    blink();
    tt = setTimeout(callBlink, 2500);
};

//LEFT TEAR POSITION TOGGLES
var tearleft = document.getElementById('tearleft');
tearleft.onclick = tearLeftToggle();
function tearLeftToggle() {
    tearleft.classList.toggle('tearleft-1');
    tearleft.classList.toggle('tearleft-2');
};

//RIGHT TEAR POSITION TOGGLES
var tearright = document.getElementById('tearright');
tearright.onclick = tearRightToggle();
function tearRightToggle() {
    tearright.classList.toggle('tearright-1');
    tearright.classList.toggle('tearright-2');
};

//HALO POSITION TOGGLES
var halo = document.getElementById('halo');
halo.onclick = haloToggle();
function haloToggle() {
    halo.classList.toggle('halo-1');
    halo.classList.toggle('halo-2');
};

//HORN POSITION TOGGLES
var horns = document.getElementById('horns');
horns.onclick = hornsToggle();
function hornsToggle() {
    horns.classList.toggle('horns-1');
    horns.classList.toggle('horns-2');
};

//LEFT EYEBROW POSITION CHANGES AMONG 6 POSITIONS WHEN BOTH BROWS CHANGE AND SETS BOOLEANS FOR devilAtLeastOnce, devilBrowSwitch AND haloBrowSwitch
function browLeftSwitchPlusSpirit(browPosition) {
    var newTempStr = `<div id="lefteyebrow" class="lefteyebrow-${browPosition}"></div>`;
    var child = document.getElementById('lefteyebrow');
    var parent = document.getElementById('eyebrows')
    child.parentNode.removeChild(child);
    parent.insertAdjacentHTML('beforeend', newTempStr);

    if (browPosition === 0) {
        devilAtLeastOnce = true; // Once Baby Cup has been devil at least once, he can toggle to angel.
        devilBrowSwitch = true; // Designates when Baby Cup is devil.
    } else {
        devilBrowSwitch = false; //Designates when Baby Cup is not devil.
    }

    if (browPosition === 5) {
        haloBrowSwitch = true; //Designates when Baby Cup is angel.
    } else {
        haloBrowSwitch = false; //Designates when Baby Cup is not angel.
    }
};

//LEFT EYEBROW POSITION CHANGES AMONG 6 POSITIONS WHEN RECEIVING AN OFFSET CHANGE FOR ONE BROW
function browLeftSwitch(browPosition) {
    var newTempStr = `<div id="lefteyebrow" class="lefteyebrow-${browPosition}"></div>`;
    var child = document.getElementById('lefteyebrow');
    var parent = document.getElementById('eyebrows')
    child.parentNode.removeChild(child);
    parent.insertAdjacentHTML('beforeend', newTempStr);
};

//RIGHT EYEBROW POSITION CHANGES AMONG 6 POSITIONS WHEN EITHER BOTH BROWS CHANGE OR WHEN RECEIVING AN OFFSET CHANGE FOR ONE BROW
function browRightSwitch(browPosition) {
    var newTempStr = `<div id="righteyebrow" class="righteyebrow-${browPosition}"></div>`;
    var child = document.getElementById('righteyebrow');
    var parent = document.getElementById('eyebrows')
    child.parentNode.removeChild(child);
    parent.insertAdjacentHTML('beforeend', newTempStr);
};

 //MOUTH SWITCHES AMONG 72 POSITIONS WITHOUT VOICE COMMAND, 120 POSITIONS WITH - 3 LARGE STATES (5 IN THE CASE OF VOICE COMMAND), 3 SMALL STATES FOR EACH OF THE LARGE STATES, AND 8 POSITIONS FOR EACH OF THE 3 SMALL STATES
function mouthSwitch(mouthBigChange, mouthSmallChange, mouthPosition) {
    var newTempStr = `<div id="mouth" class="mouth__${mouthBigChange}-${mouthSmallChange}-${mouthPosition}"></div>`;
    var child = document.getElementById('mouth');
    var parent = document.getElementById('cup')
    child.parentNode.removeChild(child);
    parent.insertAdjacentHTML('beforeend', newTempStr);
};

//WHEN BABY CUP IS ACTIVATED BY VOICE COMMAND, emotion() PULLS MOOD VARIABLE FROM GLOBAL SCOPE TO CALCULATE BROW AND MOUTH POSITIONS, OTHERWISE THEY ARE CALCULATED BY HIGHER TIERS IN THE PYRAMID OF RANDOMNESS
function emotion() {

    var chanceOfEyebrowChange;
    var chanceOfEyebrowOffset;
    var tearProbability;
    var affectLeftOrRight;
    var chanceOfMouthSmallChange;

    chanceOfMouthSmallChange = Math.ceil(Math.random() * 5) === 1; //20% probability that small mouth state could change.

    if (name == false) {

        var chanceOfMouthBigChange;

        if  (mouthBigChange === 4 || mouthBigChange === 5) {
            mouthBigChange = Math.ceil(Math.random() * 3);
        }

        if (mouthBigChange === 3) {
            chanceOfMouthBigChange = Math.ceil(Math.random() * 4) === 1; //25% probability that large mouth state could change if it's in range 3.
        } else {
            chanceOfMouthBigChange = Math.ceil(Math.random() * 10) === 1; //10% probability that large mouth state could change.
        }

        if (chanceOfMouthSmallChange && chanceOfMouthBigChange) { //If large mouth state is in range 3 there's 5% probability that it could change, otherwise there's 2%.

            if (mouthBigChange === 3) {
                mouthBigChange = Math.ceil(Math.random() * 2); //If large mouth state is in range 3 it could change to either range 1 or range 2 with 50% probability.
            } else if (mouthBigChange === 2) {
                mouthBigChange = 3;
            } else if (mouthBigChange === 1) {
                mouthBigChange = 3;
            }

        } else if (chanceOfMouthSmallChange) {
            mouthSmallChange = Math.ceil(Math.random() * 3); //If there's going to be a small mouth change it could change among all 3 respective states (including the one it's currently in) with 33% probability.
        }

        var mouthRate = 800 / mouthSmallChange; //The rate at which the mouth animates is 800ms divided by 1, 2 or 3, the indices of any given set of small mouth state changes (i.e. a factor of how open it is).

    }


    if (name == true) {

        if (mood === 5) {
            mouthBigChange = 3;
            if (chanceOfMouthSmallChange) {
                mouthSmallChange = Math.ceil(Math.random() * 2);
            }
        }
        if (mood === 6) {
            mouthBigChange = 4
            if (chanceOfMouthSmallChange) {
                mouthSmallChange = Math.ceil(Math.random() * 3);
            }
        }
        if (mood === 7) {
            mouthBigChange = 1;
            mouthSmallChange = 1;
        }
        if (mood === 8) {
            mouthBigChange = 1;
            mouthSmallChange = 2;
        }
        if (mood === 9) {
            mouthBigChange = 1;
            mouthSmallChange = 3;
        }
        if (mood === 10) {
            mouthBigChange = 1;
            mouthSmallChange = 3;
        }
        if (mood === 4) {
            mouthBigChange = 5
            if (chanceOfMouthSmallChange) {
                mouthSmallChange = Math.ceil(Math.random() * 3);
            }
        }
        if (mood === 3) {
            mouthBigChange = 2;
            mouthSmallChange = 1;
        }
        if (mood === 2) {
            mouthBigChange = 2;
            mouthSmallChange = 2;
        }
        if (mood === 1) {
            mouthBigChange = 2;
            mouthSmallChange = 3;
        }
        if (mood === 0) {
            mouthBigChange = 2;
            mouthSmallChange = 3;
        }
        var mouthRate = 200;

    }

    if (mouthBigChange === 2) {

        tearProbability = Math.ceil(Math.random() * 3); //If large mouth state is in range 2 tears could fall from the left eye, right eye or both, with 33% probability.

        if (tearProbability === 1) {
            tearLeftToggle();
        } else if (tearProbability === 2) {
            tearRightToggle();
        } else {
            tearLeftToggle();
            tearRightToggle();
        }

    }

    var mouthPosition = Math.ceil(Math.random() * 8); //There are 8 positions within each small mouth state to randomly switch among at each mouth iteration.

    mouthSwitch(mouthBigChange, mouthSmallChange, mouthPosition); //The mouthSwitch function is called and 3 variables are passed into the template string of the new markup.


    chanceOfEyebrowChange = Math.ceil(Math.random() * 7) === 1; //14% probability that both eybrows will change simultaneously.
    chanceOfEyebrowOffset = Math.ceil(Math.random() * 2) === 1; //50% probability that only a single eyebrow could change.
    affectLeftOrRight = Math.ceil(Math.random() * 2); //If a single eyebrow is going to change it could happen on the left or right side with 50% probability.

    if (tempBrowPosition !== browPosition) { //If the position of both brows would not equal its current position if it were updated...

        if (chanceOfEyebrowOffset && browPosition !== 0) { //...if a single eyebrow is attempting to change, it will change to a half its current brow position rounded up + 1, which will actually be the same in the case of positions 2 & 3, and affect either the left or right brow with 50% probability.

            randomOffset = Math.ceil(browPosition/2 + 1);

            if (affectLeftOrRight === 1) {
                browLeftSwitch(randomOffset);
            } else if (affectLeftOrRight === 2) {
                browRightSwitch(randomOffset);
            }
        }

        if (chanceOfEyebrowChange) { //...change it and if it changes to position 0 turn to devil mode, if it's changing out of position 0 change out of devil mode. If it changes to position 5 turn to halo mode, if it's changing out of position 5 change out of halo mode.

            browPosition = tempBrowPosition;

            if ((browPosition === 0 && devilBrowSwitch === false) || (browPosition !== 0 && devilBrowSwitch === true)) {
                invisibleNoseBridgeToggle();
                cupOverlayToggle();
                hornsToggle();
            }

            if ((devilAtLeastOnce === true && browPosition === 5 && haloBrowSwitch === false) || (devilAtLeastOnce === true && browPosition !== 5 && haloBrowSwitch === true)) {
                haloToggle();
            }

            browLeftSwitchPlusSpirit(browPosition);
            browRightSwitch(browPosition);

        }

    };

    if (name == false) {
        tempBrowPosition = Math.floor((Math.random() * 6)); //Recalculate a new brow position to test against the old position.
    } else if (name == true) {
        tempBrowPosition = (2 + Math.floor(Math.random() * 3))
    };

    ttt = setTimeout(emotion, mouthRate);
};

//IMMEDIATELY INVOKED TAIL RECURSIVE FUNCTION (CALLS ITSELF, THEN CONTINUES TO CALL ITSELF AFTER CALLING ALL THE OTHER FUNCTIONS)
(function god() {
    var rate;
    count += 1;

    if (count === 1) { //Set setTimeout to 1 second on load, after that it will be random between 5 and 10 seconds.
        rate = 10;
    } else {
        rate = Math.random() * 5000 + 5000;
    }

    setTimeout(function() {
            clearTimeout(t); //Clear the timeout for the eye iris function.
            clearTimeout(tt); //Clear the timeout for the function that calls blink.
            clearTimeout(ttt); //Clear the timeout for the emotion function.
            cupToggle();
            cupCompensationToggle();
            handleToggle();
            leftEyeToggle();
            rightEyeToggle();
            eyeIrises();
            callBlink();
            emotion();
            god();
    }, rate);
}());

/*
ID 'INTERCEPT' WAS GIVEN TO A CHILD BUTTON OF THE BODY TAG IN ORDER TO TEST THE MECHANICS OF BABY CUP
document.getElementById('intercept').addEventListener('click', function(e){
    e.preventDefault();
        haloToggle(); //This is just an example of functions tested with this button.
});
*/




















const dial1 = document.getElementById('dial-1');
const dial2 = document.getElementById('dial-2');
const dial3 = document.getElementById('dial-3');
const button1 = document.getElementById('button');
const liquid1a = document.getElementById('espresso-pour');
const liquid1b = document.getElementById('espresso-dribble');
const liquid2a = document.getElementById('milk-pour');
const liquid2b = document.getElementById('milk-dribble');
const liquid3a = document.getElementById('water-pour')
const liquid3b = document.getElementById('water-dribble');
const liquid4 = document.getElementById('syrup-pour');

//1500 AFTER FUNCTION IS CALLED RELEASE A GLOB OF SYRUP ACCORDING TO THE COLOR PARAMETER AND THEN RESET THE ANIMATION TO AN EMPTY STRING
function syrupPour(color) {
    setTimeout(function() {
        liquid4.style.backgroundColor = color;
        liquid4.style.animation = `blast 2s linear`;
    }, 1500);
    setTimeout(function() {
        liquid4.style.animation = ``;
    }, 3500);
}

//WATER POUR IS CALLED WHEN BUTTON IS BEING HELD DOWN AND WATER STOP IS CALLED WHEN BUTTON IS RELEASED, WHICH ALSO RESETS POURING, CAUSES, DRIBBLING, THEN RESETS DRIBBLING
function waterPour() {
    liquid3a.style.animation = `pour 3s ease`;
}
function waterStop() {
    liquid3a.style.animation = ``;
    liquid3b.style.animation = `dribble 3.5s linear`; //Having more than 2 positions in the keyframe seems to cause problems with all my custom bezier curves (overriding them as linear) so deceleration of dribble had to be depicted by the percentages themselves in the stylesheet, which ended working out better since I could control the rate at which drops fell without compromising gravitational integrity.
    setTimeout(function() {
        liquid3b.style.animation = ``;
    }, 3500);
}

//1500ms AFTER FUNCTION IS CALLED POUR THE ESPRESSO AND THEN RESET ANIMATIONS TO EMPTY STRING ONCE COMPLETE.
function milkPour() {
    setTimeout(function() {
        liquid2a.style.animation = `pour 3.5s ease`;
    }, 1500);
    setTimeout(function() {
        liquid2a.style.animation = ``;
    }, 5000);
    setTimeout(function() {
        liquid2b.style.animation = `dribble 3s linear`; //Having more than 2 positions in the keyframe seems to cause problems with all my custom bezier curves (overriding them as linear) so deceleration of dribble had to be depicted by the percentages themselves in the stylesheet, which ended working out better since I could control the rate at which drops fell without compromising gravitational integrity.
    }, 5000);
    setTimeout(function() {
        liquid2b.style.animation = ``;
    }, 8000);
}

//1000ms AFTER FUNCTION IS CALLED POUR THE ESPRESSO AND THEN RESET ANIMATIONS TO EMPTY STRING ONCE COMPLETE.
function espressoPour() {
    setTimeout(function() {
        liquid1a.style.animation = `pour 2s ease`;
    }, 1000);
    setTimeout(function() {
        liquid1a.style.animation = ``;
    }, 3000);
    setTimeout(function() {
        liquid1b.style.animation = `dribble 3s linear`; //Having more than 2 positions in the keyframe seems to cause problems with all my custom bezier curves (overriding them as linear) so deceleration of dribble had to be depicted by the percentages themselves in the stylesheet, which ended working out better since I could control the rate at which drops fell without compromising gravitational integrity.
    }, 3000);
    setTimeout(function() {
        liquid1b.style.animation = ``;
    }, 7000);
}

//ADD ALL EVENT LISTENERS TO THE BUTTON
function allowButtonEvents() {
    ['mousedown', 'touchstart'].forEach(function(e) {
        button1.addEventListener(e, function() {
            if (e = 'touchstart') {
                //e.preventDefault(); //In this case, prevents selecting the button on touchscreens when touching long enough to pour water.
            }
            button1.classList.add('button__2');
            waterPour();
        });
    });
    ['mouseup', 'touchend'].forEach(function(e) {
        button1.addEventListener(e, function() {
            button1.classList.remove('button__2');
            waterStop();
        });
    });
}

//ADD EVENT LISTENER TO WHICHEVER DIAL IS PASSED AS AN ARGUMENT
function allowDialEvents(dial) {
    ['click', 'touchstart'].forEach(function(e){
        if (dial === dial1) {
            dial.addEventListener(e, dial1Spin);
        }
        if (dial === dial2) {
            dial.addEventListener(e, dial2Spin);
        }
        if (dial === dial3) {
            dial.addEventListener(e, dial3Spin);
        }
    });
};

//REMOVE EVENT LISTENER TO WHICHEVER DIAL IS PASSED AS AN ARGUMENT
function removeDialEvents(dial) {
    ['click', 'touchstart'].forEach(function(e){
        if (dial === dial1) {
            dial.removeEventListener(e, dial1Spin);
        }
        if (dial === dial2) {
            dial.removeEventListener(e, dial2Spin);
        }
        if (dial === dial3) {
            dial.removeEventListener(e, dial3Spin);
        }
    });
};

//DIAL1 ALTERNATE ANIMATION HAPPENS ON TOUCHSTART OR CLICK, ITS EVENT LISTENERS ARE REMOVED, AS SOON AS ANIMATION IS COMPLETE THE DEFAULT ANIMATION IS REINSTATED AND EVENT LISTENERS ARE ADDED AGAIN
function dial1Spin() {
    espressoPour();
    dial1.style.animation = `rotateDial1B 6s ease`; //Custom cubic bezier curves are causing an initial jerking of the dials, pre-defined "ease" works.
    removeDialEvents(dial1);
    setTimeout(function() {
        dial1.style.animation = `rotateDial1A 6s infinite linear`;
    }, 6000);
    setTimeout(allowDialEvents, 6000, dial1);
};

//DIAL2 ALTERNATE ANIMATION HAPPENS ON TOUCHSTART OR CLICK, ITS EVENT LISTENERS ARE REMOVED, AS SOON AS ANIMATION IS COMPLETE THE DEFAULT ANIMATION IS REINSTATED AND EVENT LISTENERS ARE ADDED AGAIN
function dial2Spin() {
    milkPour();
    dial2.style.animation = `rotateDial2B 13s ease`; //Custom cubic bezier curves are causing an initial jerking of the dials, pre-defined "ease" works.
    removeDialEvents(dial2);
    setTimeout(function() {
        dial2.style.animation = `rotateDial2A 5s infinite linear`;
    }, 13000);
    setTimeout(allowDialEvents, 13000, dial2);
};

//DIAL3 ALTERNATE ANIMATION HAPPENS ON TOUCHSTART OR CLICK, ITS EVENT LISTENERS ARE REMOVED, AS SOON AS ANIMATION IS COMPLETE THE DEFAULT ANIMATION IS REINSTATED AND EVENT LISTENERS ARE ADDED AGAIN
function dial3Spin() {
    let color = `#DCA352`; //Eventually change to crazy multicolors that cycle randomly
    syrupPour(color);
    dial3.style.animation = `rotateDial3B 7s ease`; //Custom cubic bezier curves are causing an initial jerking of the dials, pre-defined "ease" works.
    removeDialEvents(dial3);
    setTimeout(function() {
        dial3.style.animation = `rotateDial3A 7s infinite linear`;
    }, 7000);
    setTimeout(allowDialEvents, 7000, dial3);
};

//FIRE UP EVENT LISTENERS - PASS EACH DIAL ELEMENT TO THE FUNCTION THAT ADDS THE TOUCHSTART AND CLICK EVENT LISTENERS, AND ADD THE EVEN LISTENERS TO THE BUTTON
allowDialEvents(dial1);
allowDialEvents(dial2);
allowDialEvents(dial3);
allowButtonEvents();














































var positiveString = `abound, abounding, abounds, abracadabra, absolute, absolutely, absorbed, abundance, abundant, accentuate, accept, acceptable, acceptance, accepted, accepting, accessible, acclaim, acclaimed, acclaiming, acclaims, acclamation, accolade, accommodate, accommodated, accommodating, accommodation, accommodative, accomplish, accomplished, accomplishing, accomplishment, accomplishments, accountability, accuracy, accurate, accurately, achievable, achieve, achieved, achievement, achievements, acknowledgement, actability, action, activate, active, acumen, adaptability, adaptable, adaptive, addition, adequate, adjustable, admirable, admirably, admiration, admire, admired, admirer, admires, admiring, admiringly, adorable, adorably, adoration, adore, adored, adorer, adores, adoring, adoringly, adroit, adroitly, adulated, adulation, adulatory, advanced, advantage, advantageous, advantageously, advantages, adventure, adventuresome, adventurous, advocated, affability, affable, affably, affection, affectionate, affinity, affirm, affirmation, affirmative, affluence, affluent, afford, affordable, affordably, ageless, agile, agilely, agility, agree, agreeable, agreeableness, agreeably, aim, airless, alacrity, alert, alertness, aligned, alive, aliveness, all is well, allow, allowing, allure, alluring, alluringly, aloha, alternative healing, altruism, altruistic, altruistically, amaze, amazed, amazement, amazes, amazing, amazing words, amazingly, amazingness, ambition, ambitious, ambitiously, ameliorate, amenity, amiability, amiable, amiably, amicability, amicable, amicably, amity, ample, amply, amuse, amused, amusing, amusingly, angel, angelic, angelical, angelically, anticipation, apotheosis, appeal, appealing, appeals, applaud, appreciable, appreciate, appreciated, appreciates, appreciation, appreciation of beauty, appreciative, appreciative joy, appreciatively, appreciativeness, appropriate, approval, approve, approved, approves, approving, approvingly, aptitude, ardent, ardor, aroused, art of appreciation, art of stillness, art of well-being, assertive, assertiveness, assume your own value, assurance, astonished, astonishing, astonishingly, astonishment, astounding, attentiveness, attraction, attractive, attractiveness, audacity, authentic, authentic happiness, authenticity, awaken, awakening, aware, awareness, awed, awesome, awesomeness, balance, balanced, beatify, beatitude, beautiful, beautifully, beautifulness, beautify, beauty, befitting, believer, belong, belonging, beloved, benefactor, beneficial, beneficially, benefit, benefited, benefits, benevolence, benevolent, benevolently, best, better, blasting, blazing, bless, blessed, blessing, blinding, bliss, bliss on tap, blissful, blissfulness, bloom, blossom, boldness, bountiful, bounty, brave, bravely, bravery, bravo, breathtaking, breeziness, bright, brighten, brightness, brilliance, brilliant, brilliantly, brio, briskness, bubbling, bubbly, bullishness, buoyancy, busting, calm, calming, calmly, candor, capability, capable, capably, care, carefree, carefreeness, carefulness, caress, caring, celebrate, celebrated, celebration, celebratory, champ, champion, charisma, charismatic, charitable, charity, charm, charmer, charming, cheer, cheerful, cheerfulness, cheering, cheers, cheery, comfort, comfortable, comforting, commend, commendable, commending, commitment, communion, companionship, compassion, compassionate, competence, competency, competent, complimentary, confidence, confident, congenial, congeniality, congenially, congratulation, congratulations, congratulatory, connectedness, consciousness, considerate, consistency, consistent, contentment, continuity, contribution, cool, cooperation, cordial, courage, courageous, courageously, courteous, courtesy, coziness, create, creative, creatively, creativeness , creativity, cuddle, cuddling, cute, cutely, cuteness, cutest, cutie, dandy, daring, dazzle, dazzled, dazzling, debonair, decent, decisiveness, dedicated, delicious, deliciousness, delight, delighted, delightful, delightfully, delightfulness, dependability, dependable, deserve, deservedness, deservingness, desirable, desire, determination, devoted, devotion, dignity, diligence, discipline, discovery, disney, diversity, divine, dreamy, drive, duty, dynamic, earnest, ease, easier, easily, easy, ebullience, ecstasy, ecstatic, educate, educated, education, effective, effectiveness, effervescent, efficacy, efficiency, efficient, effortless, effortlessly, effortlessness, elated, elation, elegance, elegant, elegantly, embrace, empathize, empathy, emphatic, empower, empowered, empowering, enabled, enchanted, enchanting, enchantingly, enchantment, encourage, encouraged, encouragement, encouraging, endorse, endorsed, endurance, energetic, energetically, energize, energized, engaged, engaging, enjoy, enjoyable, enjoying, enjoyment, enlightened, enlightenment, enlivened, enthralled, enthusiasm, enthusiastic, enthusiastically, entranced, equality, equanimity, equitable, equitably, esteem, esteemed, ethical, ethically, exaltation, exalting, excellence, excellent, exceptional, excite, excited, excitement, exciting, exemplary, exhilarating, experience, expertise, exploration, expressiveness, exquisite, exquisitely, extraordinary, exuberance, exuberant, exultant, fabulous, fabulously, fabulousness, fair, fairness, faith, faithful, fame, famous, famously, fancy, fantastic, fantastically, fascinate, fascinated, favor, favorable, favorably, favorite, fearless, feasible, felicity, festive, festiveness, fidelity, fine, flashy, flawless, flawlessly, flexibility, flourish, flourishing, focus, forgive, forgiveness, forgiving, fortitude, fortuitous, fortunate, fortunately, fortune, free, free spirited, freedom, freely, fresh, freshly, freshness, friend, friendliness, friendly, friendship, fulfill, fulfilled, fun, funny, generate, generosity, generous, generously, genial, genially, genius, gentleman, genuine, genuinely, genuineness, giddy, gift, giggling, giving, givingly, glad, glamor, glamorous, glamorously, glow, glowed, glowing, glowingly, glows, goddess, good, goodness, goodwill, goody, gorgeous, gorgeously, gorgeousness, grace, graceful, gracefully, graciousness, grand, grateful, gratefulness, gratitude, great, greatest, greatness, grin, grinned, grinning, grins, groovy, grounded, halcyon, handsome, handsomely, happiest, happily, happiness, happy, harmonious, harmoniously, harmonize, harmony, he liked, he likes, he'd like, he'll like, heal, healed, healing, heals, health, healthy, heartfelt, heartily, heartiness, heartwarming, hearty, heavenliness, heavenly, helpful, helpfulness, helping, hero, heroism, high-spirited, holistic, honest, honesty, honor, honorable, honored, honors, hope, hopefulness, hospitable, hospitality, hug, hugged, hugging, hugs, humble, humor, i like, i liked, i'd like, i'll like, ideal, idealism, illuminated, illumination, illustrious, imagination, imaginative, impressive, impressiveness, improvement, independence, influence, ingenuity, innocent, innovate, innovating, innovation, innovative, inquisitive, insightful, insightfulness, inspiration, inspirational, inspire, inspired, integrity, intellect, intellectual, intelligence, intelligent, interested, interesting, intimacy, intrepid, intrigued, intuition, intuitive, intuitiveness, inventive, inventiveness, invigorate, invigorated, invincible, it liked, it likes, jolly, jovial, joy, joyful, joyous, jubilance, jubilant, juvenescent, keen, kind, kind-heart, kindly, kindness, kiss, kittens, knowledge, knowledgeable, laugh, laughed, laughing, leadership, learning, legendary, liberty, likable, liveliness, lively, longevity, lovable, love, loved, loveliness, lovely, loves, loving, loyal, loyalty, luck, luckily, lucky, luminosity, luminous, luminously, lustrous, luxury, magic, magnificent, majesty, marvel, marveled, marveling, marvelous, marvelousness, masterful, mastering, mastery, meaningful, meaningfully, meditation, meliorism, mellow, mercy, merit, meritorious, mindfulness, miracle, miraculous, miraculously, modesty, motivate, motivated, motivating, motivation, motivational, mutuality, natural, naturally, nature, neat, nice, nicely, niceness, noble, nourish, nourished, nourishing, nourishment, nurture, nurtured, nurtures, nurturing, nutrition, nutritious, nutritiously, obedient, oneness, openness, opportunity, optimism, optimist, optimistic, optimistically, originality, outgoing, outstanding, overcome, paradise, paradisiac, participation, passion, passionate, patience, peace, peaceful, pep, peppiness, perceptiveness, perfect, perfection, perfectly, perfectness, perkiness, perseverance, persistence, phenomenal, piquancy, play, playful, playfulness, pleasance, pleasant, please, pleased, pleasurable, pleasure, pleasured, pleasures, plentiful, plentifully, plucky, poise, poised, polished, polite, politeness, popular, positive, positiveness, positivity, power, powerful, powerfully, practicality, precious, preparedness, presence, preservation, prettiness, pretty, priceless, pride, principled, privilege, proactive, proactivity, productive, productivity, progress, prominence, prominent, promptness, propitious, prosperity, prosperous, protect, protected, protection, protectiveness, proud, proudly, punctual, punctuality, puppies, pure, quaint, quality, queenly, quickening, quiddity, quiescent, quietness, radiant, radiate, rainbow, rapture, rapturous, rationality, readiness, reassured, reassuring, reassuringly, reborn, recognition, recommend, refined, refresh, refreshed, refreshing, refreshingly, rejoice, rejoicing, rejuvenate, rejuvenated, relatedness, relationships, relax, relaxed, reliability, reliable, relief, relieve, relieved, rely, remarkable, remarkably, renew, renewed, renowned, repose, resilience, resilient, resounding, resourcefulness, respect, respected, respectful, rested, restore, restored, revelation, reverence, revived, reward, rewarded, rewarding, rewards, righteousness, robust, romance, romantic, rosiness, sacred, safe, safely, safety, satisfied, savor, savoring, secure, secured, secures, security, selflessness, serendipity, serene, serenity, sexiness, sexy, she liked, she likes, she'd like, she'll like, shine, shining, sincerity, skill, skilled, skillful, skills, smart, smile, smiles, smiley, smiling, sorry, soulful, soulfully, soulmate, sparkle, sparkles, sparkling, sparkly, special, spectacular, spirited, splendid, spontaneity, spontaneous, spunky, stability, steadfastness, stimulating, stimulation, strength, studious, stunning, stunningly, stupendous, stupendously, style, sublime, success, successfully, succulent, sufficient, sunniness, sunny, sunshine, super, superb, supercharged, supported, supporting, supportive, supreme, surprise, surprising, surprisingly, sweet, sweetheart, sweetness, sympathetic, synergy, teamwork, tenacity, tender, tenderly, terrific, terrifically, thank, thank you, thankful, thankfulness, therapeutic, they like, they liked, they'd like, they'll like, thrill, thrilled, thrilling, thrills, thrive, thrived, thrives, thriving, tickled, timeliness, tolerance, topped, tops, tranquil, tranquility, transformation, transformative, transforming, triumph, trust, trustful, trusting, trusting , truth, truthful, truthfulness, ultimate, unconditional, understanding, unification, unify, unique, unity, unwavering, unwaveringly, upbeat, upgrade, uplift, upright, upstanding, useful, valid, valuable, value, valued, values, viable, vibrance, vibrant, vibrantly, victorious, victoriously, victory, vigor, virtue, virtuous, virtuousness, vital, vitality, vivacious, vow, we like, we liked, we'd like, we'll like, wealth, wealthiness, wealthy, welcome, wellness, wholesome, will like, willing, willingly, wonderful, wonderfully, wondrous, wondrously, worthy, would like, you like, you liked, you'd like, you'll like, yummy, zeal`;

var negativeString = `not like, don't like, didn't like, doesn't like, won't like, can't like, wouldn't like, couldn't like, shouldn't like, mustn't like, needn't like, abnormal, abnormally, abominable, abominably, abominate, abomination, abort, aborted, aborts, abortion, abrade, abrasive, abrupt, abruptly, absent-minded, absent minded, absurd, absurdity, absurdly, absurdness, abuse, abused, abuses, abusive, abysmal, abysmally, abyss, accidental, accident, accidentally, accost, accursed, accusation, accusations, accuse, accused, accuses, accusing, accusingly, acerbate, acerbic, acerbically, ache, ached, aches, aching, acrid, acridly, acridness, acrimonious, acrimoniously, acrimony, adamant, adamantly, addict, addicted, addicting, addicts, admonish, admonisher, admonishingly, admonishment, admonition, adulterate, adulterated, adulteration, adversarial, adversary, adverse, adversity, afflict, affliction, afflictive, affront, afraid, aggravate, aggravating, aggravation, aggression, aggressive, aggressiveness, aggressor, aggrieve, aggrieved, aghast, agonies, agonize, agonizing, agonizingly, agony, aground, ailing, ailment, aimless, alarm, alarmed, alarming, alarmingly, alienate, alienated, alienation, allegation, allegations, allege, allergic, allergies, allergy, aloof, altercation, ambiguity, ambiguous, ambivalence, ambivalent, ambush, amiss, amputate, anarchism, anarchist, anarchistic, anarchy, anemic, anger, angrily, angriness, angry, anguish, animosity, annihilate, annihilation, annoy, annoyance, annoyances, annoyed, annoying, annoyingly, annoys, antagonism, antagonist, antagonistic, antagonize, anti, antipathy, antithetical, anxieties, anxiety, anxious, anxiously, anxiousness, apathetic, apathetically, apathy, apocalypse, apocalyptic, appall, appalled, appalling, appallingly, apprehension, apprehensions, apprehensive, apprehensively, arbitrary, arcane, archaic, arduous, arduously, argumentative, arrogance, arrogant, arrogantly, ashamed, asinine, asininely, askance, asperse, aspersion, aspersions, assail, assailant, assassin, assassinate, assault, astray, atrocious, atrocities, atrocity, atrophy, attack, attacks, attacking, austere, authoritarian, autocrat, autocratic, avalanche, avarice, avaricious, avariciously, avenge, averse, aversion, awful, awfully, awfulness, awkward, awkwardness, back-logged, back logged, backache, backaches, bad, badly, balk, banal, bane, banish, banishment, bankrupt, barbarian, barbaric, barbarically, barbarity, barbarous, barbarously, barren, baseless, bash, bashed, bashful, bashing, battered, battering, batter, bearish, beastly, bedlam, bedlamite, befoul, beg, beggar, beggarly, begging, beguile, beleaguer, belie, belittle, belittled, belittling, bellicose, belligerence, belligerent, belligerently, bemoan, bemoaning, berate, bereave, bereavement, bereft, beset, besiege, besmirch, betray, betrayal, betrayals, betrayer, betraying, betrays, bewail, bewilder, bewildered, bewildering, bewilderingly, bewilderment, bicker, bickering, bigotries, bigotry, bigot, bitingly, bitter, bitterly, bitterness, blackmail, blame, blameworthy, bland, blandish, blaspheme, blasphemous, blasphemy, blasted, blatant, blatantly, blather, bleak, bleakly, bleakness, bleed, bleeding, bleeds, blemish, blind, blinding, blindingly, blindside, blister, blistering, bloated, blockage, blockhead, bloodshed, bloodthirsty, bloody, blotchy, blow, blunder, blundering, blunders, boastful, bogus, boisterous, bomb, bombard, bombardment, bombastic, bondage, botch, bother, bothered, bothering, bothers, bothersome, bowdlerize, boycott, braggart, bragger, brainless, brainwash, brash, brashly, brashness, brat, bravado, brazen, brazenly, brazenness, breach, break, break-up, break-ups, break up, break ups, breakdown, breaking, breaks, breakup, breakups, bribery, brimstone, bristle, brittle, broke, broken, broken-hearted, broken hearted, brood, browbeat, bruise, bruised, bruises, bruising, brusque, brutal, brutalities, brutality, brutalize, brutalizing, brutally, brute, brutish, bugging, buggy, bulkier, bulkiness, bulky, bull****, bullies, bulls..t, bully, bullying, bullyingly, bum, bungle, bungler, bungling, bunk, burden, burdensome, burdensomely, burn, burned, burning, burns, bust, busts, butcher, butchery, byzantine, cackle, calamities, calamitous, calamitously, calamity, callous, calumniate, calumniation, calumnies, calumnious, calumniously, calumny, cancer, cancerous, cannibal, cannibalize, capitulate, capsize, careless, carelessness, carnage, cash-strapped, cash strapped, castigate, castrated, casualty, cataclysm, cataclysmal, cataclysmic, cataclysmically, catastrophe, catastrophes, catastrophic, catastrophically, caustic, caustically, cautionary, censure, chafe, chaff, chagrin, challenging, chaos, chaotic, chasten, chastise, chastisement, cheapen, cheat, cheated, cheater, cheating, cheats, cheerless, cheesy, chide, childish, chintzy, choke, choleric, choppy, chore, chronic, chunky, clamor, clamorous, clash, clog, clogged, clogs, clouding, cloudy, clueless, clumsy, clunky, coarse, cocky, coerce, coercion, coercive, cold, coldly, collapse, collude, collusion, combative, combust, commiserate, complacent, complain, complained, complaining, complains, complaint, complaints, complicated, complication, complicit, compulsion, compulsive, conceit, conceited, concern, concerned, concerns, condemn, condemnable, condemnation, condemned, condemns, condescend, condescending, condescendingly, condescension, confined, conflict, conflicted, conflicting, conflicts, confound, confounded, confounding, confront, confrontation, confrontational, confuse, confused, confuses, confusing, confusion, confusions, congested, congestion, conspicuous, conspicuously, conspiracies, conspiracy, conspirator, conspiratorial, conspire, consternation, contagious, contaminate, contaminated, contaminates, contaminating, contamination, contempt, contemptible, contemptuous, contemptuously, contend, contention, contentious, contort, contortions, contradict, contradiction, contradictory, contrariness, contravene, contrive, contrived, controversial, controversy, convoluted, corrode, corrosion, corrosions, corrosive, corrupt, corrupted, corrupting, corruption, corrupts, costlier, costly, counter-productive, counter productive, counterproductive, covetous, coward, cowardly, crabby, crack, cracked, cracks, craftily, crafty, cramp, cramped, cramping, cranky, crap, crappy, craps, crash, crashed, crashes, crashing, crass, craven, cravenly, craze, crazily, craziness, creak, creaking, creaks, credulous, creep, creeping, creeps, creepy, crept, crime, criminal, cringe, cringed, cringes, cripple, crippled, cripples, crippling, crisis, critic, critical, criticism, criticisms, criticize, criticized, criticizing, critics, cronyism, crook, crooked, crooks, crowded, crowdedness, crude, cruel, crueler, cruelest, cruelly, cruelness, cruelties, cruelty, crumble, crumbling, crummy, crumple, crumpled, crumples, crushed, crushing, cry, crying, cried, cries, culpable, culprit, cumbersome, curse, cursed, curses, curt, cuss, cussed, cutthroat, cynical, cynicism, damage, damaged, damages, damaging, damn, damnable, damnably, damnation, damned, damning, damper, danger, dangerous, dangerousness, dastard, dastardly, daunt, daunting, dauntingly, dead, deadbeat, deadlock, deadly, deadweight, deaf, dearth, death, debacle, debase, debasement, debaser, debauch, debaucher, debauchery, debilitate, debilitating, debility, debt, debts, decadence, decadent, decay, decayed, deceit, deceitful, deceitfully, deceitfulness, deceive, deceiver, deceivers, deceiving, deception, deceptive, deceptively, declaim, decline, declines, declining, decrement, decrepit, decrepitude, decry, defamation, defamations, defamatory, defame, defect, defective, defects, defensive, deficiencies, deficiency, deficient, defile, defiler, deform, deformed, defrauding, defunct, defy, degenerate, degenerately, degeneration, degradation, degrade, degrading, degradingly, dehumanization, dehumanize, deign, deject, dejected, dejectedly, dejection, delay, delayed, delaying, delays, delinquency, delinquent, delirious, delirium, delude, deluded, deluge, delusion, delusional, delusions, demean, demeaning, demise, demolish, demolisher, demon, demonic, demonize, demonized, demonizes, demonizing, demoralize, demoralizing, demoralizingly, denial, denied, denies, denigrate, denounce, dented, denunciate, denunciation, denunciations, deny, denying, deplete, deplorable, deplorably, deplore, deploring, deploringly, deprave, depraved, depravedly, deprecate, depress, depressed, depressing, depressingly, depression, depressions, deprive, deprived, deride, derision, derisive, derisively, derisiveness, derogatory, desecrate, desertion, desolate, desolately, desolation, despair, despairing, despairingly, desperate, desperately, desperation, despicable, despicably, despise, despised, despoil, despoiler, despondence, despondency, despondent, despondently, despot, despotic, despotism, destitute, destitution, destroy, destroyer, destruction, destructive, deteriorate, deteriorating, deterioration, detest, detestable, detestably, detested, detesting, detests, detriment, detrimental, devastate, devastated, devastates, devastating, devastatingly, devastation, devil, devilish, devilishly, devilment, devilry, devious, deviously, deviousness, devoid, diabolic, diabolical, diabolically, diatribe, diatribes, dick, dictator, dictatorial, die, died, dies, dying, difficult, difficulties, difficulty, diffidence, dilapidated, dilemma, dire, direly, direness, dirty, disable, disabled, disaccord, disadvantage, disadvantaged, disadvantageous, disadvantages, disaffect, disaffected, disaffirm, disagree, disagreeable, disagreeably, disagreed, disagreeing, disagreement, disagrees, disallow, disappoint, disappointed, disappointing, disappointingly, disappointment, disappointments, disappoints, disapprobation, disapproval, disapprove, disapproving, disarm, disarray, disaster, disastrous, disastrously, disavow, disavowal, disbelief, disbelieve, disbeliever, disclaim, discombobulate, discomfit, discomfort, discompose, disconcert, disconcerted, disconcerting, disconcertingly, disconsolate, disconsolately, disconsolation, discontent, discontented, discontentedly, discontinued, discontinuity, discontinuous, discord, discordance, discordant, discountenance, discourage, discouragement, discouraging, discouragingly, discourteous, discourteously, discredit, discrepant, discriminate, discrimination, discriminatory, disdain, disdained, disdainful, disdainfully, disfavor, disgrace, disgraced, disgraceful, disgracefully, disgruntle, disgruntled, disgust, disgusted, disgustedly, disgustful, disgustfully, disgusting, disgustingly, dishearten, disheartening, dishearteningly, dishonest, dishonestly, dishonesty, dishonor, dishonorable, disillusion, disillusioned, disillusionment, disillusions, disinclination, disinclined, disingenuous, disingenuously, disintegrate, disintegrated, disintegrates, disintegration, disinterest, disinterested, dislike, disliked, dislikes, disliking, dislocated, disloyal, disloyalty, dismal, dismally, dismalness, dismay, dismayed, dismaying, dismayingly, dismissive, dismissively, disobedience, disobedient, disobey, disorder, disordered, disorderly, disorganized, disorient, disoriented, disown, disparage, disparaging, disparagingly, dispensable, dispirit, dispirited, dispiritedly, dispiriting, displace, displaced, displease, displeased, displeasing, displeasure, disproportionate, disprove, disputable, dispute, disputed, disquiet, disquieting, disquietingly, disquietude, disregard, disregardful, disreputable, disrepute, disrespect, disrespectable, disrespectful, disrespectfully, disrespectfulness, disrespecting, disrupt, disruption, disruptive, dissatisfaction, dissatisfactory, dissatisfied, dissatisfies, dissatisfy, dissatisfying, dissed, dissemble, dissembler, dissension, dissent, dissenter, dissension, disservice, disses, dissidence, dissident, dissidents, dissing, dissolute, dissolution, dissonance, dissonant, dissonantly, dissuade, dissuasive, disdains, distaste, distasteful, distastefully, distort, distorted, distortion, distorts, distract, distracting, distraction, distraught, distraughtly, distress, distressed, distressing, distressingly, distrust, distrustful, distrusting, disturb, disturbance, disturbed, disturbing, disturbingly, disunity, disvalue, divergent, divisive, divisively, divisiveness, dizzy, doddering, dogged, doggedly, dogmatic, doldrums, domineer, domineering, doom, doomed, doomsday, doubt, doubtful, doubtfully, doubts, douchebag, douchebags, downbeat, downcast, downer, downfall, downfallen, downgrade, downhearted, downheartedly, downhill, downside, downsides, downturn, downturns, drab, draconian, draconic, drag, dragged, dragging, dragoon, drags, drain, drained, draining, drains, drastic, drastically, drawback, drawbacks, dread, dreadful, dreadfully, dreadfulness, dreary, dripped, dripping, drippy, drips, drones, droop, droops, drop-out, drop-outs, drop out, drop outs, dropout, dropouts, drought, drowning, drunkard, drunken, dubious, dubiously, dubitable, dud, dullard, dumb, dumbfound, dump, dumped, dumping, dumps, dunce, dungeon, dungeons, dupe, dust, dusty, dwindling, earsplitting, eccentric, eccentricity, effigy, effrontery, egocentric, egomania, egotism, egotistical, egotistically, egregious, egregiously, elimination, emaciated, emasculate, embarrass, embarrassing, embarrassingly, embarrassment, embattled, embroil, embroiled, embroilment, emergency, emphatic, emphatically, emptiness, encroach, encroachment, endanger, enemies, enemy, enervate, enfeeble, enflame, engulf, enmity, enrage, enraged, enraging, enslave, entangle, entanglement, entrap, entrapment, envious, enviously, enviousness, epidemic, equivocal, erode, erodes, erosion, err, errant, erratic, erratically, erroneous, erroneously, error, errors, eruptions, evasive, evil, evildoer, evils, eviscerate, exacerbate, exaggerate, exaggeration, exasperate, exasperated, exasperating, exasperatingly, exasperation, excessive, excessively, exclusion, excoriate, excruciating, excruciatingly, excuses, execrate, exhausted, exhaustion, exhausts, exhort, exile, exorbitant, exorbitantly, expel, expensive, expire, expired, exploit, exploitation, explosive, expropriate, expropriation, exterminate, extort, extortion, extraneous, extravagance, extravagant, extravagantly, extremism, extremist, extremists, eyesore, fabricate, fabrication, fail, failed, failing, fails, failure, failures, fainthearted, faithless, fake, fallacies, fallacious, fallaciously, fallaciousness, fallacy, falling, fallout, false, falsehood, falsely, falsify, falter, faltered, famine, famished, fanatic, fanatical, fanatically, fanaticism, fanatics, farce, farcical, farcically, farfetched, fascism, fascist, fastidious, fastidiously, fatal, fatalistic, fatalistically, fatally, fateful, fatefully, fathomless, fatigue, fatigued, fatty, fatuity, fatuous, fatuously, fault, faults, faulty, faze, fear, fearful, fearfully, fears, fearsome, feckless, feeble, feebleminded, feign, feint, felon, felonious, ferociously, ferocity, fetid, fever, feverish, fevers, fiasco, fib, fibber, fickle, fictitious, fidget, fidgety, fiend, fiendish, filth, filthy, finagle, finicky, fissures, fist, flabbergast, flabbergasted, flagrant, flagrantly, flair, flairs, flakey, flaking, flaky, flare, flares, flat-out, flat out, flaw, flawed, flaws, flee, fled, fleeing, fleer, flees, fleeting, flighty, flimflam, flimsy, flounder, floundering, flout, fluster, foe, fool, fooled, foolhardy, foolish, foolishly, foolishness, forbid, forbidden, forbidding, forceful, foreboding, forebodingly, forfeit, forged, forgetful, forgetfully, forgetfulness, forlorn, forlornly, forsake, forsaken, forswear, foul, foully, foulness, fractious, fractiously, fracture, fragile, fragmented, frail, frantic, frantically, franticly, fraud, fraudulent, fraught, frazzle, frazzled, freak, freaking, freakish, freakishly, freaks, frenzied, frenzy, fret, fretful, frets, friction, frictions, frigging, fright, frighten, frightening, frighteningly, frightful, frightfully, frigid, frown, fruitless, fruitlessly, frustrate, frustrated, frustrates, frustrating, frustratingly, frustration, frustrations, fugitive, fulminate, fumble, fume, fumes, fundamentalism, furious, furiously, furor, fury, fuss, fussy, fustigate, fusty, futile, futilely, futility, gabble, gaffe, gainsay, gainsayer, gall, galling, gallingly, galls, gangster, gape, garbage, garish, gasp, gauche, gaudy, gawk, gawky, geezer, genocide, ghastly, ghetto, ghosting, gibber, gibberish, gibe, glare, glaringly, glib, glibly, glitch, glitches, gloatingly, gloom, gloomy, glum, glut, gnawing, goad, goading, god awful, god-awful, goof, goofy, goon, gossip, graceless, gracelessly, graft, grainy, greed, greedy, grief, grievance, grievances, grieve, grieving, grievous, grievously, grim, grimace, gripe, gripes, grisly, gross, grossly, grotesque, grouch, grouchy, groundless, growl, grudge, grudges, grudging, grudgingly, gruesome, gruesomely, grumble, grumpier, grumpiest, grumpily, grumpy, guilt, guiltily, guilty, gutless, gutter, hacks, haggard, haggle, halfhearted, halfheartedly, hamper, hampered, handicapped, haphazard, hapless, harangue, harass, harassed, harasses, harassment, hard-hit, hard hit, hardball, hardheaded, hardhearted, hardship, hardships, harm, harmed, harmful, harms, harpy, harridan, harried, harrow, harsh, harshly, hassle, hassled, hassles, hastily, hasty, hate, hated, hateful, hatefully, hatefulness, hater, haters, hates, hating, hatred, haughtily, haughty, haunt, haunting, havoc, hawkish, hazard, hazardous, head-aches, head-ache, head aches, head ache, headache, headaches, heartbreaker, heartbreaking, heartbreakingly, heartless, heathen, heavy handed, heavy-handed, heavyhearted, heckle, heckled, heckles, hectic, hedonistic, heedless, heinous, hell, hellion, hells, helpless, helplessly, helplessness, heresy, heretic, heretical, hesitant, hideous, hideously, hideousness, high-priced, high priced, hinder, hindrance, hiss, hissed, hissing, hoard, hoax, hobble, hoodwink, hoodwinked, hooligan, hopeless, hopelessly, hopelessness, horde, horrendous, horrendously, horrible, horrid, horrific, horrified, horrifies, horrify, horrifying, hostage, hostile, hostilities, hostility, hotbeds, hothead, hotheaded, hothouse, hubris, huckster, humid, humiliate, humiliating, humiliation, hurt, hurtful, hurting, hurts, hustler, hype, hypocrisy, hypocrite, hypocrites, hypocritical, hypocritically, hysteria, hysteric, hysterical, hysterically, hysterics, idiocies, idiocy, idiot, idiotic, idiotically, idiots, idle, ignoble, ignominious, ignominiously, ignominy, ignorance, ignorant, ignore, illegal, illegally, illegitimate, illicit, illiterate, illness, illogical, illogically, illusion, illusions, illusory, imaginary, imbalance, imbecile, imbroglio, immature, immobilized, immoderate, immoderately, immodest, immoral, immorality, immorally, immovable, impair, impaired, impasse, impatience, impatient, impatiently, impeach, impedance, impede, impediment, impending, impenitent, imperfect, imperfection, imperfections, imperfectly, imperialist, imperil, imperious, imperiously, impermissible, impersonal, impertinent, impetuous, impetuously, impiety, impinge, impious, implacable, implausible, implausibly, implicate, implicated, implicates, implode, impolite, impolitely, impolitic, importunate, importune, impose, imposers, imposing, imposition, impossible, impossibly, impotent, impoverish, impoverished, impractical, imprecate, imprecise, imprecisely, imprecision, imprison, imprisonment, improper, improperly, impropriety, imprudence, imprudent, impudence, impudent, impudently, impugn, impulsive, impulsively, impunity, impure, impurity, inability, inaccuracies, inaccuracy, inaccurate, inaccurately, inaction, inactive, inadequacy, inadequate, inadequately, inadvisable, inane, inanely, inappropriate, inappropriately, inapt, inarticulate, inattentive, inaudible, incapable, incapably, incautious, incendiary, incense, incessant, incessantly, incite, incitement, incivility, inclement, incoherence, incoherent, incoherently, incommensurate, incomparable, incompatible, incompetence, incompetent, incompetently, incomprehensible, incomprehension, inconceivable, inconceivably, incongruous, incongruously, inconsiderate, inconsiderately, inconsistencies, inconsistency, inconsistent, inconsolable, inconsolably, inconstant, inconvenience, inconveniently, incorrect, incorrectly, incorrigible, incorrigibly, incredulous, incredulously, indecency, indecent, indecently, indefensible, indelicate, indifference, indifferent, indigent, indignant, indignantly, indignation, indignity, indoctrinate, indoctrination, indolent, ineffective, ineffectively, ineffectiveness, ineffectual, ineffectually, inefficacy, inefficiency, inefficient, inefficiently, inelegance, inelegant, ineligible, inept, ineptitude, ineptly, inequalities, inequality, inequitable, inequitably, inequities, inescapable, inescapably, inexcusable, inexcusably, infamous, infamously, infamy, infected, infection, infections, inferior, inferiority, infernal, infest, infested, infidel, infidels, infiltrator, infiltrators, infirm, inflame, inflammation, inflammatory, inflationary, inflexible, inflict, infraction, infringe, infringement, infringements, infuriate, infuriated, infuriating, infuriatingly, inglorious, ingrate, ingratitude, inhospitable, inhuman, inhumane, inhumanity, inimical, inimically, iniquitous, iniquity, injudicious, injure, injurious, injury, injustice, injustices, inoperable, inopportune, insecure, insecurity, insensible, insensitive, insensitively, insensitivity, insidious, insidiously, insignificance, insignificant, insignificantly, insincere, insincerely, insincerity, insolence, insolent, insolently, insolvent, insouciance, instability, instigate, instigator, instigators, insubordinate, insubstantial, insubstantially, insufferable, insufferably, insufficiency, insufficient, insufficiently, insular, insult, insulted, insulting, insultingly, insults, insupportable, insurmountable, insurmountably, insurrection, interfere, interference, interferes, interrupt, interruption, interruptions, intimidate, intimidating, intimidatingly, intimidation, intolerable, intolerance, intractable, intransigence, intransigent, intrude, intrusion, intrusive, inundate, inundated, invader, invalid, invalidate, invalidity, invasive, invective, inveigle, invidious, invidiously, invidiousness, irascible, irate, irately, irk, irked, irking, irks, irksome, irksomely, irksomeness, irrational, irrationality, irrationally, irreconcilable, irrecoverable, irrecoverably, irredeemable, irredeemably, irreparable, irrepressible, irresolute, irresponsible, irresponsibly, irretrievable, irreversible, irritable, irritably, irritant, irritate, irritated, irritating, irritation, irritations, isolate, isolated, isolation, issue, issues, itch, itching, itchy, jabber, jaded, jagged, jarring, jaundiced, jealous, jealously, jealousness, jealousy, jeer, jeering, jeeringly, jeers, jeopardize, jeopardy, jerk, jerky, jitter, jitters, jittery, jobless, joker, jolt, judder, juddering, judders, junk, junky, junkyard, kill, killed, killer, killing, killjoy, kills, knotted, kook, kooky, lackadaisical, lackluster, lag, lagged, lagging, lags, laid-off, laid off, lambast, lambaste, lame, lament, lamentable, lamentably, languid, languish, languor, languorous, languorously, lapses, lascivious, laughingstock, lawbreaker, lawbreaking, lawless, lawlessness, layoff, lazy, leak, leakage, leakages, leaking, leaks, leaky, lecher, lecherous, lechery, leech, leer, leery, letch, lethal, lethargic, lethargy, lewd, lewdly, lewdness, liability, liable, liar, liars, licentious, licentiously, licentiousness, lie, lied, lies, lifeless, limp, listless, litigious, livid, lividly, loath, loathe, loathing, loathly, loathsome, loathsomely, loneliness, lonely, lonesome, longing, longingly, loot, lose, loser, losers, loses, losing, loss, losses, lost, lousy, loveless, lovelorn, low-rated, low rated, lowly, lugubrious, lukewarm, lull, lumpy, lunatic, lurch, lurid, lurk, lurking, lying, macabre, mad, madden, maddening, maddeningly, madder, madly, madman, madness, maladjusted, maladjustment, malady, malaise, malcontent, malcontented, maledict, malevolence, malevolent, malevolently, malice, malicious, maliciously, maliciousness, malign, malignant, malodorous, maltreatment, mangle, mangled, mangles, mangling, maniac, maniacal, manic, manipulate, manipulation, manipulative, manipulators, martyrdom, massacre, massacres, meager, meaningless, meanness, measly, meddle, meddlesome, mediocre, mediocrity, melancholy, melodramatic, melodramatically, meltdown, menace, menacing, menacingly, mendacious, mendacity, menial, merciless, mercilessly, mess, messed, messes, messing, messy, militancy, mindless, mindlessly, mire, misalign, misaligned, misaligns, misapprehend, misbecome, misbecoming, misbegotten, misbehave, misbehavior, miscalculate, miscalculation, miscellaneous, mischief, mischievous, mischievously, misconception, misconceptions, miscreant, miscreants, misdirection, miser, miserable, miserableness, miserably, miseries, miserly, misery, misfit, misfortune, misgiving, misgivings, misguidance, misguide, misguided, mishandle, mishap, misinform, misinformed, misinterpret, misjudge, misjudgment, mislead, misleading, misleadingly, mismanage, mispronounce, mispronounced, mispronounces, misread, misreading, misrepresent, misrepresentation, misstatement, mistake, mistaken, mistakenly, mistakes, mistress, mistrust, mistrustful, mistrustfully, misunderstand, misunderstanding, misunderstandings, misunderstood, misuse, moan, mobster, mock, mocked, mockeries, mockery, mocking, mockingly, mocks, molest, molestation, monotonous, monotony, monster, monstrosities, monstrosity, monstrous, monstrously, moody, moot, mope, morbid, morbidly, mordant, mordantly, moribund, moron, moronic, morons, mortification, mortified, mortify, mortifying, motionless, motley, mourn, mourner, mournful, mournfully, murder, murderer, murderous, murderously, musty, nag, nagging, naive, naively, nastily, nastiness, nasty, naughty, nauseate, nauseates, nauseating, nauseatingly, naïve, needlessly, needy, nefarious, nefariously, negative, negatives, negativity, neglect, neglected, negligence, negligent, nemesis, nepotism, nervous, nervously, nervousness, nettle, nettlesome, neurotic, neurotically, nightmare, nightmarish, nightmarishly, nitpick, nitpicking, noisier, noisy, nonexistent, nonresponsive, nonsense, nosey, notorious, notoriously, noxious, nuisance, obese, obesity, objection, objectionable, objections, obliterate, obliterated, oblivious, obnoxious, obnoxiously, obscene, obscenely, obscenity, obstacle, obstinate, obstinately, obstruct, obstructed, obstructing, obstruction, obstructs, obtrusive, obtuse, occlude, occluded, occludes, occluding, offense, offend, offender, offending, offenses, offensive, offensively, offensiveness, officious, ominous, ominously, one-sided, one sided, onerous, onerously, onslaught, opinionated, opponent, opportunistic, oppose, opposition, oppositions, oppress, oppression, oppressive, oppressively, oppressiveness, oppressors, ordeal, orphan, ostracize, outbreak, outburst, outbursts, outcast, outcry, outlaw, outmoded, outrage, outraged, outrageous, outrageously, outrageousness, outrages, outsider, over act, over-act, over-acted, over acted, over-priced, over priced, over-valuation, over valuation, overact, overacted, overbearing, overbearingly, overblown, overdo, overdone, overdid, overdo, overemphasize, overheat, overkill, overloaded, overlook, overpaid, overplay, overpower, overpriced, overrated, overreach, overrun, overshadow, oversight, oversights, oversimplification, oversimplified, oversimplify, oversize, overstate, overstated, overstatement, overstatements, overstates, overtaxed, overthrow, overthrows, overweight, overwhelm, overwhelmed, overwhelming, overwhelmingly, overwhelms, overzealous, overzealously, pain, painful, painfully, pains, pale, pales, paltry, pan, pandemonium, panic, panicked, panicking, panicky, paralyzed, paranoia, paranoid, parasite, pariah, pathetic, pathetically, patronize, paucity, pauper, paupers, payback, pedantic, peeve, peeved, peevish, peevishly, penalize, penalty, perfidious, perfunctory, peril, perilous, perilously, perish, pernicious, perplex, perplexed, perplexing, perplexity, persecute, persecution, pertinacious, pertinaciously, pertinacity, perturb, perturbed, pervasive, perverse, perversely, perversion, perversity, pervert, perverted, perverts, pessimism, pessimistic, pessimistically, pest, pestilent, petrified, petrify, pettifog, petty, phobia, phobic, phony, picket, picketed, picketing, pickets, picky, pillage, pillory, pimple, pitiable, pitiful, pitifully, pitiless, pitilessly, pittance, pity, plagiarize, plague, plea, pleas, plebeian, plight, plotters, ploy, plunder, plunderer, pointless, pointlessly, poison, poisonous, poisonously, pollute, polluter, polluters, pompous, poor, poorer, poorest, poorly, posturing, pout, poverty, powerless, prate, pratfall, prattle, precarious, precariously, predatory, predicament, prejudge, prejudice, prejudices, prejudicial, preposterous, preposterously, presumptuous, presumptuously, pretense, pretentious, pretentiously, prevaricate, pricey, pricier, prideful, primitive, prison, prisoner, problem, problematic, problems, procrastinate, procrastinates, procrastination, profane, profanity, prohibit, prohibitive, prohibitively, propaganda, propagandize, prosecute, protest, protested, protesting, protests, protracted, provocation, provocative, provoke, pry, pugnacious, pugnaciously, pugnacity, punish, punishable, punitive, punk, puny, quandary, quarrel, quarrels, quarrelsome, quash, questionable, quibble, quibbles, quitter, rabid, racism, racist, racists, racy, radical, radicalization, radically, radicals, rage, ragged, raging, rain, raining, rains, rained, rampage, rampant, ramshackle, rancor, rankle, rant, ranted, ranting, rants, rape, raped, raping, rascal, rascals, rash, ravage, ravaged, rebellious, rebuke, recalcitrant, recession, recessionary, reckless, recklessly, recklessness, refusal, refuse, refused, refuses, refusing, refutation, refute, refuted, refutes, refuting, regret, regretful, regretfully, regrets, regrettable, regrettably, regretted, reject, rejected, rejecting, rejection, rejects, relapse, relentless, relentlessly, relentlessness, reluctance, reluctant, reluctantly, remorse, remorseful, remorsefully, remorseless, remorselessly, remorselessness, renounce, renunciation, repel, repetitive, reprehensible, reprehensibly, reprehension, reprehensive, repress, repression, repressive, reprimand, reproach, reproachful, reprove, reprovingly, repudiate, repudiation, repugnance, repugnant, repugnantly, repulse, repulsed, repulsing, repulsive, repulsively, repulsiveness, resent, resentful, resentment, resignation, resigned, resistance, restless, restlessness, restrict, restricted, restriction, restrictive, resurgent, retaliate, retaliatory, reticent, retract, retreat, retreated, revenge, revengeful, revengefully, revert, revile, reviled, revoke, revolt, revolting, revoltingly, revulsion, revulsive, ridicule, ridicules, ridiculous, ridiculously, rife, rift, rifts, rigid, rigidity, rigidness, rile, riled, rip-off, rip off, ripped, risk, risks, risky, rival, rivalry, roadblocks, rocky, rogue, rot, rotten, rough, rubbish, rude, rue, ruffian, ruffle, ruin, ruined, ruining, ruinous, run-down, run down, runaway, rupture, rust, rusts, rusty, rut, ruthless, ruthlessly, ruthlessness, ruts, sabotage, sacrificed, sacrifice, sad, sadden, sadly, sadness, sag, sagged, sagging, saggy, sags, salacious, sanctimonious, savage, savaged, savagery, savages, scaly, scam, scams, scandal, scandalize, scandalized, scandalous, scandalously, scandals, scant, scapegoat, scar, scarce, scarcely, scarcity, scare, scared, scarier, scariest, scarily, scarred, scars, scary, scathing, scathingly, scoff, scold, scolded, scolding, scorching, scorn, scornful, scornfully, scoundrel, scourge, scowl, scream, screech, screw-up, screw up, screwed-up, screw up, screwy, scuff, scuffs, scum, scummy, seedy, seethe, seething, self-criticism, self-defeating, self-destructive, self humiliation, self interest, self interested, self serving, self criticism, self defeating, self destructive, self humiliation, self interest, self interested, self serving, selfish, selfishly, selfishness, senile, senseless, senselessly, sermonize, servitude, set back, set backs, set-back, set-backs, setback, setbacks, sever, severe, severity, shabby, shadowy, shady, shaky, shallow, sham, shambles, shame, shameful, shamefully, shamefulness, shameless, shamelessly, shamelessness, shark, sharply, shatter, shimmer, shimmy, shipwreck, shirk, shirker, shiver, shock, shocked, shocking, shockingly, shoddy, shortage, shortchange, shortcoming, shortcomings, shortness, shortsighted, shortsightedness, shriek, shrill, shrilly, sick, sicken, sickening, sickeningly, sickly, sickness, sidetrack, sidetracked, siege, sinful, sinfully, sinister, sinisterly, sinking, skeletons, skeptic, skeptical, skeptically, skepticism, sketchy, skimpy, skinny, skittish, skittishly, skulk, slander, slanderer, slanderous, slanderously, slanders, slashing, slaughter, slaughtered, slave, slaves, sleazy, slime, slog, slogged, slogging, slogs, sloppily, sloppy, sloth, slothful, sluggish, slump, slumping, slur, sly, smug, smugly, snag, snagged, snagging, snags, snappish, snappishly, snare, snarky, snarl, sneak, sneakily, sneaky, sneer, sneering, sneeringly, snob, snobbish, snobby, snobs, snub, solemn, solicitude, somber, sore, sorely, soreness, sorrow, sorrowful, sorrowfully, sour, sourly, spank, spew, spewed, spewing, spews, spiritless, spite, spiteful, spitefully, spitefulness, split, spoil, spoilage, spoilages, spoiled, spoils, spook, spookier, spookiest, spookily, spooky, spurious, spurn, sputter, squabble, squabbling, squander, squirm, stab, stagnant, stagnate, stagnation, staid, stain, stains, stale, stalemate, stammer, standstill, startle, startling, startlingly, starvation, starve, steal, stealing, steals, steep, steeply, stench, stereotype, stereotypical, stereotypically, stern, stiff, stiffness, stifle, stifling, stiflingly, stigma, stigmatize, stinging, stingingly, stingy, stink, stinks, stodgy, stole, stolen, stooge, stooges, stormy, straggle, straggler, strain, strained, straining, strange, strangely, stranger, strangest, strangle, streaky, strenuous, stress, stresses, stressful, stressfully, stricken, strict, strictly, stridently, strife, strike, stringent, stringently, struggle, struggled, struggles, struggling, stubborn, stubbornly, stubbornness, stuck, stuffy, stumble, stumbled, stumbles, stump, stumped, stumps, stun, stunted, stupid, stupidest, stupidity, stupidly, stupor, stutter, stuttered, stuttering, stutters, sty, stymied, sub-par, sub par, subjected, subjection, subjugate, subjugation, subpoena, subpoenas, subservience, subservient, substandard, subversion, subversive, subversively, subvert, succumb, suck, sucks, sucked, sucker, sucky, sue, sued, sues, suffer, suffered, sufferer, sufferers, suffering, suffers, suffocate, suicidal, suicide, sulk, sullen, sully, sunder, sunk, sunken, superficial, superficiality, superficially, superfluous, superstition, superstitious, suppress, suppression, surrender, susceptible, suspicion, suspicions, suspicious, suspiciously, swamped, sweaty, swelled, swelling, swindle, swipe, swollen, symptom, symptoms, syndrome, taboo, tacky, taint, tainted, tamper, tank, tanked, tanks, tantrum, tardy, tarnish, tarnished, tarnishes, tarnishing, tattered, taunt, taunting, tauntingly, taunts, taxing, tease, teasingly, tedious, tediously, temerity, temper, tempest, temptation, tense, tension, tenuous, tenuously, tepid, terrible, terribleness, terribly, terror, terrorism, terrorize, testily, testy, tetchy, thankless, thorny, thoughtless, thoughtlessly, thoughtlessness, thrash, threat, threaten, threatening, threats, thug, thumb down, thumbs down, thumb-down, thumbs-down, thwart, time-consuming, time consuming, timid, timidity, timidly, tired, tiresome, tiring, tiringly, toil, toll, topple, torment, tormented, torrent, tortuous, torture, tortured, tortures, torturing, torturous, torturously, totalitarian, touchy, toughness, toxic, tragedy, tragic, tragically, traitor, traitorous, traitorously, tramp, trample, transgress, transgression, trap, trapped, trash, trashed, trashy, trauma, traumatic, traumatically, traumatize, traumatized, travesties, travesty, treacherous, treacherously, treachery, treason, treasonous, trick, tricked, trickery, tricky, trivial, trivialize, trouble, troubled, troublemaker, troubles, troublesome, troublesomely, troubling, troublingly, truant, tumble, tumbled, tumbles, tumultuous, turbulent, turmoil, two faced, two-faced, tyrannical, tyrannically, tyranny, tyrant, uglier, ugliest, ugliness, ugly, ulterior, ultimatum, ultimatums, unable, unacceptable, unacceptably, unachievable, unaffordable, unappealing, unattractive, inauthentic, unavailable, unavoidably, unbearable, unbelievable, unbelievably, uncaring, uncertain, uncivil, uncivilized, unclean, unclear, uncomfortable, uncomfortably, uncompromising, uncompromisingly, unconstitutional, unconvincing, unconvincingly, uncooperative, uncouth, uncreative, undependability, undependable, undercut, undercuts, undercutting, undermine, undermined, undermines, undermining, underpaid, underpaid, under-paid, underpowered, undersized, undesirable, undetermined, undignified, undissolved, undocumented, undone, undue, unease, uneasily, uneasiness, uneasy, uneconomical, unemployed, unequal, unethical, uneven, uneventful, unexpected, unexpectedly, unexplained, unfairly, unfaithful, unfaithfully, unfavorable, unfeeling, unfit, unforeseen, unforgiving, unfortunate, unfortunately, unfounded, unfriendly, unfulfilled, unfunded, ungovernable, ungrateful, unhappily, unhappiness, unhappy, unhealthy, unhelpful, unimaginable, unimaginably, unimportant, uninformed, uninsured, unintelligible, unjust, unjustifiable, unjustifiably, unjustified, unjustly, unkind, unkindly, unlawful, unlawfully, unlawfulness, unlicensed, unlucky, unmoved, unnatural, unnaturally, unnecessary, unneeded, unnerve, unnerved, unnerving, unnervingly, unpleasant, unpopular, unprepared, unproductive, unprofitable, unproved, unproven, unqualified, unreachable, unreadable, unrealistic, unreasonable, unreasonably, unreliability, unreliable, unresolved, unresponsive, unrest, unruly, unsafe, unsatisfactory, unsavory, unscrupulous, unscrupulously, unsettle, unsettled, unsettling, unsettlingly, unskilled, unsophisticated, unsound, unspeakable, unstable, unsteadily, unsteadiness, unsteady, unsuccessful, unsuccessfully, unsupported, unsupportive, unsure, unsuspecting, unsustainable, untenable, untested, unthinkable, unthinkably, untimely, untrue, untrustworthy, untruthful, unusable, unusably, unwanted, unwarranted, unwatchable, unwelcome, unwell, unwieldy, unwilling, unwillingly, unwillingness, unwise, unwisely, unworkable, unworthy, unyielding, upbraid, upheaval, uprising, uproar, uproarious, uproariously, uproot, upset, upsets, upsetting, upsettingly, useless, usurp, usurper, utterly, vagrant, vain, vainly, vanity, vengeance, vengeful, vengefully, vengefulness, venom, venomous, venomously, vice, vices, vicious, viciously, viciousness, victimize, vile, vileness, vilify, villainous, villainously, villains, vindictive, vindictively, vindictiveness, violate, violation, violator, violators, violent, violently, viper, virulence, virulent, virulently, virus, vociferous, vociferously, volatile, volatility, vomit, vomited, vomiting, vomits, vulgar, vulnerable, wail, wallow, wane, waning, wanton, war, warily, wariness, warned, warning, wary, waste, wasted, wasteful, wastefulness, wasting, water-down, watered-down, weak, weaken, weakening, weaker, weakness, weaknesses, weariness, wearisome, weary, weep, whimper, whine, whining, whiny, whips, whipped, wicked, wickedly, wickedness, wilt, wimpy, wince, woe, woebegone, woeful, woefully, worried, worriedly, worrier, worries, worrisome, worry, worrying, worryingly, worse, worsen, worsening, worst, worthless, worthlessly, worthlessness, wrangle, wrath, wreak, wreaked, wreaks, wreck, wrest, wrestle, wretch, wretched, wretchedly, wretchedness, writhe, wrong, wrongful, wrongly, wrought, zealot, zealous, zealously, zombie, pissed, pissed off, f******, f***, s***, b****, bish, fight, fighting, fights, fought`;

var negationsString = `not, don't, didn't, doesn't, won't, can't, wouldn't, couldn't, shouldn't, hasn't, hadn't, haven't, isn't, wasn't, weren't, ain't, aren't, mustn't, needn't, no, needs, non, lack of, compromise, compromises, compromised, subtract, subtracted, subtracts, take away, takes away, took away, taken away, lost, lose, loses, without`;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

const grammar = '#JSGF V1.0;';
const recognition = new SpeechRecognition();
const speechRecognitionGrammarList = new SpeechGrammarList();

const salutations = [`baby cup`, `baby cop`, `baby tub`, `baby talk`, `baby car`, `baby gap`, `baby cub`, `baby cot`, `baby cough`, `a teacup`];
const farewells = [`bye baby cup`, `bye baby cop`, `bye baby tub`, `bye baby talk`, `bye baby car`, `bye baby gap`, `bye baby cub`, `bye baby cot`, `bye baby cough`, `buy baby cup`, `buy baby cop`, `buy baby tub`, `buy baby talk`, `buy baby car`, `buy baby gap`, `buy baby cub`, `buy baby cot`, `buy baby cough`, `by baby cup`, `by baby cop`, `by baby tub`, `by baby talk`, `by baby car`, `by baby gap`, `by baby cub`, `by baby cot`, `by baby cough`, `buybuybaby com`];

var positives = positiveString.split(`, `);
var negatives = negativeString.split(`, `);
var negations = negationsString.split(`, `);

speechRecognitionGrammarList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionGrammarList;
recognition.lang = 'en-US';
recognition.interimResults = true;

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('').toLowerCase();

    if (e.results[0].isFinal) {

        console.log(`Transcript: ${transcript}`);

        let f, s;

            if (name == false) {
                for (s = 0; s < salutations.length; s++) {
                    if (transcript.includes(salutations[s])) {
                        name = true;
                        mood = 5;
                        count = 0;
                    }
                }
            } else if (name == true) {
                for (f = 0; f < farewells.length; f++) {
                    if (transcript.includes(farewells[f])) {
                        name = false;
                    }
                }
            }

            if (name == true) {

                let i, j, k;

                function updateMood(feelings) {
                    if ((mood > 0) && (mood < 10)) {
                        mood += feelings;
                    } else if (mood >= 10) {
                        mood = 8;
                    } else if (mood <= 0) {
                        mood = 2;
                    }
                }

                for (i = 0; i < positives.length; i++) { //For each word in the positives array...

                    if (transcript.includes(positives[i])) { //...if transcript has that positive word...


                        for (j = 0; j < negations.length; j++) { //...then for each word in the negations array...
                            let transNegationsIndex = transcript.split(' ').indexOf(`${negations[j]}`);
                            let transPositiveIndex = transcript.split(' ').indexOf(`${positives[i]}`);

                            if (transNegationsIndex > -1 && ((transNegationsIndex + 1 === transPositiveIndex) || (transNegationsIndex + 2 === transPositiveIndex) || (transNegationsIndex + 3 === transPositiveIndex))) { //...if the negation comes one, two or three places before the positive word...
                                console.log(`${negations[j]}...${positives[i]}`);
                                feelings = -1; //...update with a negative feeling...
                                updateMood(feelings);
                                return;

                            } else { //...else update with a positive feeling
                                console.log(`${positives[i]}`);
                                feelings = 1;
                            }
                        }
                        updateMood(feelings);
                        return;
                    }
                };

                for (i = 0; i < negatives.length; i++) { //For each word in the negatives array...

                    if (transcript.includes(negatives[i])) { //...if transcript has that negative word...
                        console.log(`${negatives[i]}`);

                        for (j = 0; j < negations.length; j++) { //...then for each word in the negations array...
                            let transNegationsIndex = transcript.split(' ').indexOf(`${negations[j]}`);
                            let transNegativesIndex = transcript.split(' ').indexOf(`${negatives[i]}`);

                            if (transNegationsIndex > -1 && ((transNegationsIndex + 1 === transNegativesIndex) || (transNegationsIndex + 2 === transNegativesIndex) || (transNegationsIndex + 3 === transNegativesIndex))) { //...if the negation comes one, two or three places before the negative word...
                                console.log(`${negations[j]}...${negatives[i]}`);
                                feelings = 1; //...update with a positive feeling...
                                updateMood(feelings);
                                return;

                            } else { //...else update with a negative feeling.
                                console.log(`${negatives[i]}`);
                                feelings = -1;
                            }
                        }
                        updateMood(feelings);
                        return;
                    }
                };

            }
        }

});

recognition.addEventListener('end', recognition.start); //On end, start again.
recognition.start();
