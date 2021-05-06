


class UI{
    constructor(formId){
        this.contactForm = document.querySelector(formId);
        this.email = document.querySelector('#email');
        this.name = document.querySelector('#name');
        this.phone = document.querySelector('#phone');
        this.textArea = document.querySelector('#text-area');
        this.errorMessage =`can't be empty`
    }



    // this fucntion checks for any field that is empty if empty it send a error message to the form
    checkRequiredFields(){
        if(this.email.value === ''){
            //send error message to email
            // console.log('Yo')
            this.sendErrorMessage(this.email)
        }
        if(this.name.value === ''){
            this.sendErrorMessage(this.name)
                }
        if(this.phone.value === ''){
            this.sendErrorMessage(this.phone)

        }
 
    }

    //this method send the error message to the front end depending on the input object it recives
    sendErrorMessage(inputObj){
        let inputBox = inputObj.parentElement
        // console.log(inputBox)
        // inputBox.innerHTML ='hwolk'

        let messageDiv = document.createElement('div')
        let imgIcon = document.createElement('img');
        imgIcon.src ='./img/alert-error.svg'

        messageDiv.setAttribute('class','message')
        messageDiv.innerText += this.errorMessage
        
        messageDiv.appendChild(imgIcon)
        // console.log(messageDiv.innerHTML)
        inputBox.appendChild(messageDiv)
    }

    // clear message
    clearMessage(){
        let messageDiv = document.querySelectorAll('.message')
        
        messageDiv.forEach(elment=>{
            elment.remove();
            
        })
    }
    //this method is what brings the class alive and working or active
    run(){
        this.contactForm.addEventListener('submit',e=>{
            e.preventDefault()
            this.clearMessage()
            this.checkRequiredFields()
        })
    }

}



formUI = new UI('#contact_us_form');

formUI.run()