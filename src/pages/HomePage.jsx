import travels from "../data/travel"
import { Link } from "react-router-dom"





export default function HomePage() {


    return (
        <>
            <h1 className="text-center p-3">Lista Viaggi</h1>
            <div className="container">
                <div className="row g-3">
                    {
                        travels.map(travel => (
                            <div className="col" key={travel.id}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src="https://picsum.photos/200/300" className="card-img-top" alt={travel.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{travel.title}</h5>
                                        <div className="">{travel.destination}</div>
                                        <div className="">DA: {travel.startDate} A: {travel.endDate}</div>
                                        <p className="card-text">{travel.description}</p>
                                        <Link path="/" className="btn btn-primary">Dettagli Viaggio</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}