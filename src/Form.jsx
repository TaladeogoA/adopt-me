import { useEffect } from "react";

const Form = ({
  location,
  setLocation,
  animal,
  setAnimal,
  animals,
  breed,
  setBreed,
  breeds,
  setPets,
}) => {
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}
    >
      <label htmlFor="location">
        Location
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          name="animal"
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {animals.map((animal) => {
            return (
              <option key={animal} value={animal}>
                {animal}
              </option>
            );
          })}
        </select>
      </label>

      <label htmlFor="breed">
        Breed
        <select
          name="breed"
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          disabled={!breeds.length}
        >
          <option />
          {breeds.map((breed) => {
            return (
              <option key={breed} value={breed}>
                {breed}
              </option>
            );
          })}
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Form;
