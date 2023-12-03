import {getDegreeList} from "./fetch.mjs";

let d = document;
const url = '/degrees.json';

window.onload = () =>{
    addListener('fetchBtn', 'click', getDegreeData);
};

const addListener = (id, type, exec) =>{
    d.getElementById(id).addEventListener(type, exec, {once: true});
}

const getDegreeData = () =>{
    let result = getDegreeList(url);
    result.then((data) =>{
        if (data.isValid) addDegreeTable(data.data);
        else showError(`${data.statusCode} : ${data.message}`);
    })
}

const addDegreeTable = (data) =>{
    let container = d.getElementById('tableContainer');
    let table = container.appendChild(d.createElement('table'));
    let headerRow = table.appendChild(d.createElement('tr'));
    headerRow.appendChild(d.createElement('th')).innerHTML = 'School';
    headerRow.appendChild(d.createElement('th')).innerHTML = 'Major';
    headerRow.appendChild(d.createElement('th')).innerHTML = 'Type';
    headerRow.appendChild(d.createElement('th')).innerHTML = 'Year Conferred';

    data.forEach((degree) =>{
        let row = table.appendChild(d.createElement('tr'));
        row.appendChild(d.createElement('td')).innerHTML = degree.school;
        row.appendChild(d.createElement('td')).innerHTML = degree.major;
        row.appendChild(d.createElement('td')).innerHTML = degree.type;
        row.appendChild(d.createElement('td')).innerHTML = degree.year;
    })
}

const showError = (error) =>{
    console.log(error);
}

