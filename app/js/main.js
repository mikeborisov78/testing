// Main Js Configuration

$(document).ready(function() {

    //# Tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    var jumpLinkForm = document.querySelectorAll('.js-jump_forms');
    if(jumpLinkForm){
        for(var i=0; i<jumpLinkForm.length; i++){
            jumpLinkForm[i].onclick = function(){
                var id = this.dataset.id,
                    node = document.querySelector(id);
                node.style.display = 'block';
                if(id == '#form-recovery'){
                    document.querySelector('#window-auth-forms').style.display = 'none';
                }else {
                    document.querySelector('#form-recovery').style.display = 'none';
                }
                return false;
            }
        }
    }

    //validations
    //auth form
    $('#form-auth').validate({
        errorPlacement: function(){
            return false;
        },
        rules:{
            login:{
                required: true
            },
            password: {
                required: true
            }
        },
        submitHandler: function(form){
            var button = form.querySelector('button');
            button.disabled = true;
            return true;
        }
    });
    //registration form
    $('#form-registration').validate({
        errorPlacement: function(){
            return false;
        },
        rules:{
            email:{
                required: true,
                email: true
            },
            password: {
                required: true
            },
            confirm_password: {
                required: true,
                equalTo: "#form-registration-password"
            }
        },
        submitHandler: function(form){
            var button = form.querySelector('button');
            button.disabled = true;
            return true;
        }
    });
    //recovery form
    $('#form-recovery').validate({
        errorPlacement: function(){
            return false;
        },
        rules:{
            login:{
                required: true
            }
        },
        submitHandler: function(form){
            var button = form.querySelector('button');
            button.disabled = true;
            return true;
        }
    });
});