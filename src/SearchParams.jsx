import { useState } from "react";
import Form from "./Form";
import Results from "./Results";
import useBreedList from "./useBreedList";

const animals = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);

  return (
    <div className="search-params">
      <Form
        location={location}
        setLocation={setLocation}
        animal={animal}
        setAnimal={setAnimal}
        animals={animals}
        breed={breed}
        setBreed={setBreed}
        breeds={breeds}
        setPets={setPets}
      />

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
