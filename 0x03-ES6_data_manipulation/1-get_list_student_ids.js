export deafult function getListStudentIds() {
  const myArray = getListStudents();
  return myArray.map((id) => myArray.id);
}
