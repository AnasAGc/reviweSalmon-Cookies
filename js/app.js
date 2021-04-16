'use stric'

function getcustom(min, max) {
    
    return Math.random() * (max - min) + min;
}

   let workinghours=['6 am', '7 am','8 am','9 am','10 am','11 am','12 pm','1 pm' ,'2 pm','3 pm' ,'4 pm','5 pm ','6 pm','7 pm ' ]
   let seattel={

    name:'seattel',
    min:23,
    max:65,
    avg:6.3,
    custom:[],
    cookiesper:[],
    totalcookies:0,

    calCookiesper: function (){
        
        for (let i = 0; i < workinghours.length; i++) {
            
            this.custom[i]=getcustom(this.min,this.max)
            this.cookiesper[i]=Math.ceil(this.custom[i] * this.avg)
            this.totalcookies+=this.cookiesper[i]

        }
    },

    rander: function(){

    let container=document.getElementById('anas');
    let list1=document.createElement('ul');
    container.appendChild(list1);

    for (let i = 0; i < workinghours.length; i++) {

        let li=document.createElement('li');
        list1.appendChild(li);
         li.textContent=workinghours[i] + '  '+ this.cookiesper[i]

    }

         let li=document.createElement('li');
          list1.appendChild(li);
         li.textContent='The Total Sum = ' + this.totalcookies

    
    },


}

seattel.calCookiesper();
console
seattel.rander();


// let container=document.getElementById('anas');
// let list1=document.createElement('ul')
// container.appendChild(list1)
// let li=document.createElement('li')
// li.textContent()
