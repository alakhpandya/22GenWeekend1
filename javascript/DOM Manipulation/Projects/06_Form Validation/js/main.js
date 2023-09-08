// console.log(/^[a-z]$/.test('p'));
// console.log(/^[a-z]$/.test('9'));
// console.log(/^[a-z]$/.test('Q'));
// console.log(/^[A-Z]$/.test('Q'));
// console.log(/^[a-zA-Z]$/.test('Q'));
// console.log(/^[a-zA-Z]$/.test('q'));
// console.log(/^[a-zA-Z]$/.test('Jay'));
// console.log(/^[a-zA-Z]+$/.test('Jay'));
// console.log(/^[a-zA-Z]+$/.test('Jay9'));
// console.log(/^[a-zA-Z0-9]+$/.test('Jay9'));


const validate = () => {
    const alpha = /^[a-zA-Z]+$/;
    const alnum = /^[a-zA-Z0-9]+$/;
    const num = /^[0-9]+$/;
    const checkEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

    // let fName = document.regForm.fName;
    // console.log(fName);
    let fName = document.regForm.fName.value;
    let lName = document.regForm.lName.value;
    let contact = document.regForm.contact.value;
    let email = document.regForm.email.value;
    let pwd = document.regForm.pwd.value;
    let cpwd = document.regForm.cpwd.value;
    let url = document.regForm.url.value;

    let fNameErr = document.getElementById('fNameErr');

    if (fName == "" || fName.trim().length == 0){
        fNameErr.innerText = " * First name is a mendatory field."
    }
}
