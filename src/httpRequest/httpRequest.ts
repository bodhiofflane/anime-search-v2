export const httpRequest = async (url: string| URL) => {
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error(`The request failed. Status: ${response.status}`);
  }

  return await response.json();
}