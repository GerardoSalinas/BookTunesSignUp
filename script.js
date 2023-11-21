

let phoneNumber = document.getElementById('phoneNumber');
let password = document.getElementById('password');
let passwordConf = document.getElementById('passwordConf');

function passWordHandler (e) {
    let pass = document.getElementById('password').value;
    let confirmation = document.getElementById('passwordConf').value;
    //if (password.value !== '' && passwordConf.value !== ''){
        if (pass === confirmation){
            console.log(confirmation);
            document.getElementById('errMessage').style.display = 'none';
        }else{
            document.getElementById('errMessage').style.display = 'block';
        }
    //}
}

password.addEventListener('keypress', passWordHandler);
passwordConf.addEventListener('keypress', passWordHandler);
