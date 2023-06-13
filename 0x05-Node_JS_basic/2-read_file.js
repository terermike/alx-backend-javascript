const fs = require('fs');

function countStudents(fileName) {
  const studentsByField = {};
  const studentsCountByField = {};
  let totalStudents = 0;

  try {
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContent.split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        const [firstName, lastName, age, field] = line.split(',');

        if (!studentsByField[field]) {
          studentsByField[field] = [];
          studentsCountByField[field] = 0;
        }

        studentsByField[field].push(firstName);
        studentsCountByField[field] += 1;
        totalStudents += 1;
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(studentsCountByField)) {
      if (field !== 'field') {
        console.log(`Number of students in ${field}: ${count}. List: ${studentsByField[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;