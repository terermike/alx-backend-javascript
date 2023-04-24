export deafult function getListStudentIds(arr) {
    if (!Array.isArray(arr)) {
      return [];
    } else {
      return Arr.map((id) => arr.id);
    }
}
