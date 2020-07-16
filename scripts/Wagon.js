class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
        this.seatCount = null
    }

    getAvailableSeatCount() {
        this.seatCount = this.capacity - this.passengers.length
        return this.seatCount
    }

    join(randomTraveler) {
        this.getAvailableSeatCount()
        if (this.seatCount >= 1) {
            this.passengers.push(randomTraveler)
        }

        else {
           return "Wagon is full"
        }
    }

    shouldQuarantine() {
        if (this.passengers.some(passengers => passengers.isHealthy === false)) {
            return true
        }
        
        else {
            return false
        }
    }

    totalFood() {
        let totalPassengersFood = 0
        for ( let index = 0; index < this.passengers.length; index += 1) {
        totalPassengersFood = this.passengers[index].food + totalPassengersFood
        }
        
        return totalPassengersFood
    }
}