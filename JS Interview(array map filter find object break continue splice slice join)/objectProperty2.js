const students = [
    {id : 21, sName : 'Maria'},
    {id : 23, sName : 'Faria'},
    {id : 31, sName : 'Munia'},
    {id : 14, sName : 'Atia'}
];

const getNames = students.map(student => student.sName);
const getIDS = students.map(student => student.id);
console.log(getIDS);