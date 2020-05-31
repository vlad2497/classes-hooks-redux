/*export const getPosts = (count) =>
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${count}`
  ).then((response) => response.json());*/

export const getPosts = async (count) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${count}`
  );
  return await response.json();
};
