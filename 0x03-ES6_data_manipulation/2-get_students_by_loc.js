export default function getStudentsByLocation(arrayOfObjects, city) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  return arrayOfObjects.filter((object) => object.location === city);
}
