import { useEffect, useState } from "react"

type CarType = {
    marka: string,
    modell: string,
    evjarat: number,
    uzemanyag: string,
    sebessegvalto: string,
    ar: number
}

const Cars = () => {
    const [cars, setCars] = useState<CarType[]>([])

    useEffect(() => {
        fetch("/autok.json")
            .then(response => response.json())
            .then(apiData => {
                let apiCars = apiData.autok

                apiCars.sort(() => Math.random() - 0.5)
                setCars(apiCars)
            })
    }, [])


    return (
        <div>
            {cars.map((car, idx) =>
                <div style={{ color: car.sebessegvalto === "automata" ? "blue" : "red" }
                } key={idx}>{car.marka} {car.modell} - {car.sebessegvalto}</div>)}
        </div>
    )
}

export default Cars