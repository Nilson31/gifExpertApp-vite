export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dlaA2RvLbv0i6UgOkDniQ0jIZNcTslBK&q=${category}&limit=10`;
  const resultado = await fetch(url);
  const { data = [] } = await resultado.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
   return gifs;
};
