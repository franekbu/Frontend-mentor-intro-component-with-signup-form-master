const FIELDSET = document.querySelectorAll('fieldset')
const INPUTS = document.querySelectorAll('.input')
const LABELS = document.querySelectorAll('.label')
const EMAIL_VALIDATION =  /\S+@\S+\.\S+/
const SUBMIT = document.querySelector('.submit')

INPUTS.forEach( (input) => {
        input.addEventListener( 'keyup', hideLabelv3 )
    })

    
function hideLabelv3() {
    for ( let i = 0; i < 4; i++ ) {
        if( INPUTS[i].value ) {
            LABELS[i].style.display = 'none'
        } else {
            LABELS[i].style.display = 'block'
        }
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    for ( let i = 0; i < 4; i++) {
        if( !INPUTS[i].value ) {
            FIELDSET[i].classList.add('error')
            e.preventDefault()
        } else if( i == 2 &&  !EMAIL_VALIDATION.test( INPUTS[2].value ) ) {
            FIELDSET[i].classList.add('error')
            e.preventDefault()
        } else {
            FIELDSET[i].classList.remove('error')
        }
    }
})


//Próby


// działa ale w pizdu pisania
// const FIELDSET_FIRST_NAME = document.querySelector('.fieldset--first__name')
// const FIELDSET_LAST_NAME = document.querySelector('.fieldset--last__name')
// const FIELDSET_EMAIL = document.querySelector('.fieldset--email')
// const FIELDSET_PASSWORD = document.querySelector('.fieldset--password')

// const INPUT_FIRST_NAME = document.querySelector('#first__name')
// const INPUT_LAST_NAME = document.querySelector('#last__name')
// const INPUT_EMAIL = document.querySelector('#email')
// const INPUT_PASSWORD = document.querySelector('#password')

// const LABEL_FIRST_NAME = document.querySelector('.label--first__name')
// const LABEL_LAST_NAME = document.querySelector('.label--last__name')
// const LABEL_EMAIL = document.querySelector('.label--email')
// const LABEL_PASSWORD = document.querySelector('.label--password')
// INPUTS.forEach( (input) => {
//     input.addEventListener('keyup', hideLabel)
// })
// function hideLabel() {
//     if ( INPUT_FIRST_NAME.value ) {
//         LABEL_FIRST_NAME.style.display = 'none'
//     } else {
//         LABEL_FIRST_NAME.style.display = 'block'
//     }

//     if ( INPUT_LAST_NAME.value ) {
//         LABEL_LAST_NAME.style.display = 'none'
//     } else {
//         LABEL_LAST_NAME.style.display = 'block'
//     }

//     if ( INPUT_EMAIL.value ) {
//         LABEL_EMAIL.style.display = 'none'
//     } else {
//         LABEL_EMAIL.style.display = 'block'
//     }

//     if ( INPUT_PASSWORD.value ) {
//         LABEL_PASSWORD.style.display = 'none'
//     } else {
//         LABEL_PASSWORD.style.display = 'block'
//     }
// }



// TO SAMO Z FOR EACH

// indexOf()

// czemu nie działa xd?????

// function hideLabelForEach () {
//     INPUTS.forEach( (input) => {
//         input.addEventListener('keyup', whichLabel)
//         function whichLabel() {
//           LABELS.forEach( (label) => {
//             if ( LABELS.indexOf(label) == INPUTS.indexOf(input) && input.value ) {
//                 label.style.display = 'none'
//             } else {
//                 label.style.display = 'block'
//             }
//             })  
//         }
//     })
// }
// hideLabelForEach()


