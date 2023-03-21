
class Car {
    constructor(name, type = 4) {
        this.name = name
        this.amount = 1
        switch (type) {
            case 1:
                this.type = "esportivo"
                this.velMax = 300
                break

            case 2:
                this.type = "passeio"
                this.velMax = 120
                break

            case 3:
                this.type = "utilitário"
                this.velMax = 100
                break

            default:
                this.type = "militar"
                this.velMax = 200
                break
        }
    }
    info() {
        return [this.name, this.type, this.velMax, this.amount]
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }
    setAmount(type) {
        if (type == 'plus') {
            this.amount++
        } else
            if (this.amount > 1) {
                this.amount--
            }
    }
}

const car1 = new Car("Bronca")
console.table(car1.info())
car1.setAmount()
car1.setAmount()
car1.setAmount()
car1.setAmount()
console.table(car1.info())



