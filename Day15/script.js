// promise chaining
fetch("something")
    .then(res => res.json()) // returns a promise too
    .then(data => console.log(data))
    .catch(err => console.error(err));

async function getData(){
    try{
        const res = await fetch("required url");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
getData()