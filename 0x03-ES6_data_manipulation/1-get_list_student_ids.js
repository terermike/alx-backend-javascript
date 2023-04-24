export deafult function getListStudentIds(arr) {
    if (!Array.isArray(arr)) {
      return [];
    } else {
      return arr.map((item) => arr.id);
    }
}
