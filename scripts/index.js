let d = document;

window.onload = () =>{
    d.getElementById('fetchBtn').addEventListener('click', () =>{
        fetch("/degrees.json")
            .then(res => res.json())
            .then(json => console.log(json));
    })
}