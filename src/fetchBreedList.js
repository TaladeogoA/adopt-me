const fetchBreedList = async function ({ queryKey }) {
  const animal = queryKey[1];

  if (!animal) {
    return [];
  }

  const response = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch pet at breeds/${animal}`);
  }

  return response.json();
};

export default fetchBreedList;
