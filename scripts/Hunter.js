class Hunter extends Traveler {
    constructor (name) {
        super(name)
        this.food = 2
    }

    hunt () {
        this.food += 5
    }

    eat () {
        if (this.food >= 2) {
            this.food -= 2
        }

        else {
            this.food = 0
            this.isHealthy = false
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (numOfFoodUnits <= this.food) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }
    }
}