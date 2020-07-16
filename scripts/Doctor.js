class Doctor extends Traveler {
    constructor (name, heal){
        super(name)
    }

    heal(traveler) {
        traveler.isHealthy = true
    }
}