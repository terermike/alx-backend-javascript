const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1);
    const totalStudents = students.length;

    const fields = {};
    students.forEach(student => {
      const fieldsData = student.split(',');
      const field = fieldsData[3].trim();

      if (fields.hasOwnProperty(field)) {
        fields[field].push(fieldsData[0].trim());
      } else {
        fields[field] = [fieldsData[0].trim()];
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        const count = fields[field].length;
        const studentList = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;