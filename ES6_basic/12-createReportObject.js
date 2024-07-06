export default function createReportObject(elist) {
  const departments = Object.keys(elist);

  const allEmployees = {};
  departments.forEach(department => {
    allEmployees[department] = elist[department];
  });

  const getNumberOfDepartments = () => departments.length;

  return {
    allEmployees,
    getNumberOfDepartments: () => departments.length,
  };
}
