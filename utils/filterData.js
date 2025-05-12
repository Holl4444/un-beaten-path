export default function filterData(data, url) {
  const filter = url.split('/');
  const landArea = decodeURIComponent(filter[2]);
  const landName = decodeURIComponent(filter[3]);
  console.log(landArea, landName);
  const filteredData = data.filter(
    (obj) => obj[landArea].toLowerCase() === landName.toLowerCase()
  );
  console.log(filteredData);
  return filteredData;
}

export function filterByQuery(data, queryObj) {
  const properties = Object.keys(queryObj);
  const filteredData = data.filter((dest) => {
      return (
        (!properties.includes('continent') ||
          dest.continent.toLowerCase() ===
            queryObj.continent.toLowerCase()) &&
        (!properties.includes('country') ||
          dest.country.toLowerCase() ===
            queryObj.country.toLowerCase()) &&
        (!properties.includes('is_open_to_public') ||
          dest.is_open_to_public.toString().toLowerCase() === queryObj.is_open_to_public.toString().toLowerCase())
      );
    });

    return filteredData;
  } 


