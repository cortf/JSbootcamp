let rest = {
    name:'Serops',
    guestCapacity:75,
    guestCount:0,
    checkAvail: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
         if( partySize  <= seatsLeft){
            return true
         }
            else{
                return false
            }
    },
    seatParty: function (partySize) {
        if (this.checkAvail){
            this.guestCount =+ partySize
            console.log(`Your Party of ${partySize} has been seated. Thank You`)
        }
        else{
            console.log(`Sorry, unfortunatley we dont have enough seats to accomadate your party size`)
        }
    },
    removeParty: function (partySize){
        if(this.guestCount >=0){
            this.guestCount =- partySize 
        }  
        else{
            console.log(`Sorry there was an error`)
        }
    }

    
    
}


rest.seatParty(72)
console.log(rest.checkAvail(4))
rest.removeParty(5)
console.log(rest.checkAvail(4))
rest.seatParty(4)
