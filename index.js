

//--------------------------------bloco para recuperação da funcionalidade perdida-------------------------//

//let userController = new UserController("form-user-create","table-users");
let userController = new UserController("form-user-create", "table-users");
//var fields = document.querySelectorAll('#form-user-create [name]');
//var user = {};


//console.log('Passei no teste/indice.js',fields,user);
/*
function addLine(dataUser) {

    console.log('entrei no metodo addLine');

    console.log(dataUser);
   
    document.getElementById('table-users').innerHTML = `
    <tr>
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${dataUser.birth}</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
  </tr>`;

}//Fechando metodo addline
*/

/* document.getElementById('form-user-create').addEventListener('submit',function () 
{
    event.preventDefault();

    fields.forEach(function(field, index)
    {
        if (field.name == 'gender')
        {
        // quando você vai testar se esta true, não precisa estre
            if (field.checked){
            user[field.name] = field.value;
            }
        }
        else 
        {
        user[field.name] = field.value;
        }    
     }); // fecha o foreach do fildes

    console.log('Clicou!'); 

    var objectUser = new User(
        user.name, 
        user.gender, 
        user.birth, 
        user.country, 
        user.email, 
        user.password, 
        user.photo, 
        user.admin
    );

    addLine(objectUser); 


}); // fecha a escuta do event o do botão*/



/* 
//userContrller.onsubmit();

console.log('passei no index.js');

//userContrller.onsubmit();

return new User(
    user.name, 
    user.gender, 
    user.birth, 
    user.country, 
    user.email, 
    user.password, 
    user.photo, 
    user.admin
);

*/








