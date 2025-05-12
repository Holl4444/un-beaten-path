export default function filterData(data, url) {
  const filter = url.split('/');
  const landArea = filter[2];
  const landName = filter[3];
  console.log(landArea, landName);
  const filteredData = data.filter(
    (obj) => obj[landArea].toLowerCase() === landName.toLowerCase()
  );
  console.log(filteredData);
  return filteredData;
}
