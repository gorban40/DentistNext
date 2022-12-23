import { Container } from "react-bootstrap";
import CardDoctor from "./CardDoctor/CardDoctor";
import {useEffect, useState} from 'react';

import doctor from '../../public/images/icons/doctors/doctor__doctor.png';

// import './Doctors.scss'


const Doctors = () => {

    const data = [{
        name: 'Michael Horban Oleksandrovich',
        photo: doctor,
        job: 'голов лікар ОРТОПЕД',
        categoria: "высшая категория",
        experience: 22
    },
    {
        name: 'Michael Horban Oleksandrovich',
        photo: doctor,
        job: 'голов лікар ОРТОПЕД',
        categoria: "высшая категория",
        experience: 22
    },
    {
        name: 'Michael Horban Oleksandrovich',
        photo: doctor,
        job: 'голов лікар ОРТОПЕД',
        categoria: "высшая категория",
        experience: 22
    }]

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch("http://localhost:1337/api/doctors")
          .then((response) => response.json())
          .then((data) => setCards(data.data))
          .then(() => setIsLoading(false))
          .catch((erorr) => alert(new Error().stack));
      }, []);

      console.log(cards);

    const makeList = () => {
        if (cards != null) {
            return cards.map((item) => {
                return (
                    <CardDoctor name={item.attributes.name} img={item.attributes.photo} job={item.attributes.occupation} categoria={item.attributes.category} experience={item.attributes.expirience}/>
                )
            })
        } else {
            return (
                <h2>дані ще не надійшли або помилка на сервері</h2>
            )
        }
    }

    return (
        <section id="doctors" className="doctors">
            <Container >
                <h2 className="title">
                    Лікарі
                </h2>
                <div className="doctors__wrapper">
                    {makeList()}
                </div>
            </Container>
        </section>
    )
}

export default Doctors