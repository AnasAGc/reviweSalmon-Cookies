'use stric'

    function getcustom(min, max) {
    return Math.random() * (max - min) + min;
    } ;
    
    let first=document.getElementById('location');
    let table=document.createElement('table');
    first.appendChild(table);

   let workinghours=['6 am', '7 am','8 am','9 am','10 am','11 am','12 pm','1 pm' ,'2 pm','3 pm' ,'4 pm','5 pm ','6 pm','7 pm ' ]
   
   let arryofStores=[];

    function Store (names,mini,maxi,avgi){  
        this.names=names;
        this.mini=mini;
        this.maxi=maxi;
        this.avgi=avgi;
        this.custom=[];
        this.cookiesper=[];
        this.totalcookies=0;
        arryofStores.push(this);

    } 

 

    Store.prototype.perhourcookies= function(){
    

    for (let i = 0; i < workinghours.length; i++) {
            
        this.custom[i]=getcustom(this.mini,this.maxi)
        this.cookiesper[i]=Math.ceil(this.custom[i] * this.avgi)
        this.totalcookies+=this.cookiesper[i]
        

    }

}
    Store.prototype.rander=function(){

        let row2=document.createElement("tr")
        table.appendChild(row2)
        let storename=document.createElement("th")
        row2.appendChild(storename)
        storename.textContent=this.names
        console.log(this.names)

        for (let i = 0; i < workinghours.length; i++) {
            
            let dataCookies=document.createElement('td');
            row2.appendChild(dataCookies);

            dataCookies.textContent=this.cookiesper[i];

        }

        let totalcol=document.createElement("th");
        row2.appendChild(totalcol);
        totalcol.textContent=(this.totalcookies);



    }



        let st1= new Store('seattel',23,65,6.3)
        let st2= new Store('Tokyo',3,24,1.2)
        let st3= new Store('Dubai',1,38,3.7)
        let st4= new Store('Paris',20,38,2.3)
        let st5= new Store('Lima',2,16,4.6)

                    headerRow ();

                //   arryofStores[0].perhourcookies();
      




        for (let i = 0; i <arryofStores.length; i++) {
             
            arryofStores[i].perhourcookies();
            arryofStores[i].rander();
        }




        function headerRow (){



    
            let row1=document.createElement('tr')
            table.appendChild(row1)

            
            let haed1=document.createElement('th')
            row1.appendChild(haed1)
            haed1.textContent="Locations"

            for (let i = 0; i < workinghours.length; i++) {
                
                let haed1=document.createElement('th')
                row1.appendChild(haed1)
                haed1.textContent=workinghours[i]
            }

            let haed2=document.createElement('th')
                row1.appendChild(haed2)
                haed2.textContent="Total"


        }

        

        let sumperhour=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        function totalrow(){


            let lastRow=document.createElement('tr');
            table.appendChild(lastRow);
            let totalHours=document.createElement('th');
            lastRow.appendChild(totalHours);
            totalHours.textContent='Total of Hours'

            for (let i = 0; i < workinghours.length; i++) {


            for (let j = 0; j < arryofStores.length; j++) {
                sumperhour[i]+=arryofStores[j].cookiesper[i];
            }

           
            let total =document.createElement('th');
                lastRow.appendChild(total);
                total.textContent=sumperhour[i];

            }

                
        }

            totalrow();
            console.log(sumperhour,'hi');