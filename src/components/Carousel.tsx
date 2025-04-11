import { useEffect, useState } from "react"

type CarType = {
    marka: string,
    modell: string,
    evjarat: number,
    uzemanyag: string,
    sebessegvalto: string,
    ar: number,
    img: string
}

const Carousel = () => {
    const [cars, setCars] = useState<CarType[]>([])
    const [carIdx, setCarIdx] = useState(0)

    useEffect(() => {
        fetch("autok.json")
            .then(response => response.json())
            .then(data => setCars(data.autok))
    }, [])

    const incrace = () => {
        let newIdx = carIdx + 1
        
        if(carIdx == cars.length){
            newIdx = 0
        }

        setCarIdx(prev => prev + 1)
        
        //or
        //setCarIdx(prev => prev + 1 == cars.length ? 0 : prev + 1)    
    }

    const decrase = () => {
        setCarIdx(prev => prev - 1 < 0 ? cars.length - 1 : prev - 1)
    }

    return (
        <div>
            {
                cars.length > 0 &&
                <>
                    <button onClick={decrase}>🤛</button>
                    <img src={cars[carIdx].img} />
                    <button onClick={incrace}>🤜</button>
                </>
            }
        </div>
    )
}

export default Carousel