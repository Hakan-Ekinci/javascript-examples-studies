var car = {
    name: "Wolvo",
    model: "400A",
    color: "Black",
    start: function() {
        return this.name + "" + this.model + "being trained";
    },
    drive: function() {
        return this.name + "" + this.model + "being used";
    },
    brake: function() {
        return this.name + "" + this.model + "brake applied";
    },
    stop: function() {
        return this.name + "" + this.model + "stopped";
    }
};

document.getElementById('result').innerHTML = car.start() + "<br>" +
    car.drive() + "<br>" +
    car.brake() + "<br>" +
    car.stop() + "<br>";