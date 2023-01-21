const fetchPet = async function ({ queryKey }) {
  const id = queryKey[1];

  const response = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch pet at details/${id}`);
  }

  return response.json();
};

export default fetchPet;
