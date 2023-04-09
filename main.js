
//variables
var receiveMessageButton = document.querySelector('.receive-message-button')
var affirmationMessage = document.querySelector('#affirmation')
var mantrasMessage = document.querySelector('#mantra')
var outputBox = document.querySelector('.output-box')
var meditateImg = document.querySelector('.meditate-img')
var messageDisplay = document.querySelector('section')
var clearMessage = document.querySelector('.clear-button')

//event listener
receiveMessageButton.addEventListener('click', receiveMessage)
// affirmationMessage.addEventListener('click', affirmationMsg)
// mantrasMessage.addEventListener('click', mantraMsg)
clearMessage.addEventListener('click', clearMessage)


// functions

function receiveMessage() {
    meditateImg.classList.add('hidden')
    var isMantraChecked = mantrasMessage.checked
    var isAffirmationChecked = affirmationMessage.checked
    var messageOutput;
    // is there to reassign later 
    if (isMantraChecked) {
        // assign message output to mantra message
       messageOutput = mantraMsg()
       outputBox.innerHTML = `
       <p>${messageOutput}</p>
       `;
    } else if(isAffirmationChecked){
        // assign message out to affirmation message 
        messageOutput = affirmationMsg()
        outputBox.innerHTML = `
        <p>${messageOutput}</p>
        `
    } else if(!isMantraChecked || !isAffirmationChecked) {
        meditateImg.classList.remove('hidden')
        return alert('Select A Message Option')
    }
        
// console.log(outputBox)
    // display message output in output box



    // console.log('hello', mantrasMessage.checked)
    // console.log('alice', affirmationMessage.checked)
}



function clearMessage() {
    
}

function affirmationMsg() {
    var randomNum = Math.floor(Math.random() * affirmationMessages.length)
    // console.log('hey')
    var affirmation = affirmationMessages[randomNum]
// return message
    return affirmation
}



function mantraMsg() {
    // Give me a random number based on the length of the mantrasMessage
      // let's say it's 10, give me a radom number between 0 and 9
      // => 3
    var randomNum = Math.floor(Math.random() * mantrasMessages.length)
    // Using the mantrasMessages, give me the message at index randomNumber
      // => 
    // mantrasMessages[3]
    var mantra = mantrasMessages[randomNum]

    return mantra
    // return message
}


var affirmationMessages = [`I forgive myself and set myself free`,
`I believe I can be all that I want to be.`, `I am in the process of becoming the best version of myself.`, `I have the freedom & power to create the life I desire.`,
`I choose to be kind to myself and love myself unconditionally.`, `My possibilities are endless.`, `I am worthy of my dreams.`,
`I am enough.`, `I deserve to be healthy and feel good.`, `I am full of energy and vitality and my mind is calm and peaceful.`,
`Every day I am getting healthier and stronger.`, `I honor my body by trusting the signals that it sends me.`, `I manifest perfect health by making smart choices.`]


var mantrasMessages = [ `Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.`, `Do not let yesterday take up too much of today.`,
`Every day is a second chance.`, `Tell the truth and love everyone.`, `I am free from sadness.`, `I am enough.`, `In the beginning it is you, in the middle it is you and in the end it is you.`, 
`I love myself.`, `I am present now.`, `Inhale the future, exhale the past.`, `This too shall pass.`, `Yesterday is not today.`,  `The only constant is change.`, `Onward and upward.`, `I am the sky, the rest is weather.`]













    