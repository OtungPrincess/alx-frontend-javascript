export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((object) => object.location === city).map((object) => {
    const obj = object;
    obj.grade = 'N/A';
    for (const grades of newGrades) {
      if (obj.id === grades.studentId) {
        obj.grade = grades.grade;
      }
    }
    return obj;
  });
}
