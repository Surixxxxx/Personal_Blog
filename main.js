const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

//open nav dropdown..
const openNav = () =>{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';

}
//close nav dropdown..


const closeNav = () =>{
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';

}
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);


const sidebar =document.querySelector('aside');
const showsidebarBtn =document.querySelector('#show__sidebar-btn');
const hidesidebarBtn =document.querySelector('#hide__sidebar-btn');


//show sidebar on small devices

const showsidebar = () => {
    sidebar.style.left = '0';
    showsidebarBtn.style.display = 'none';
    hidesidebarBtn.style.display = 'inline-block';
   
}
const hidesidebar = () => {
    sidebar.style.left = '-100%'
    showsidebarBtn.style.display = 'inline-block';
    hidesidebarBtn.style.display = 'none';
   
}





showsidebarBtn.addEventListener('click', showsidebar);
hidesidebarBtn.addEventListener('click', hidesidebar);


function highlight(){
    const inputelement = document.getElementById('search');
    const inputvalue = inputelement.value;

    const highlightedvalue = inputvalue.replace(/[a-zA-Z0-9]/g, '<span class="highlight">$&</span>');
    inputelement.innerHTML = highlightedvalue;
}




// const text = document.getElementsByTagName(body);

// function searchbtn(){
//     let  input = document.getElementById("inputsearch").value;

//     if(input !== "" ){
//         let regExp = new RegExp(input,"gi");
//         text.innerHTML = (text.textcontent).replace(regExp,"<mark >$&</mark>");
//     }
// }



//Subscribe functionality----Backend///



function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var comments = document.getElementById("comments").value;


    if (!firstName || !lastName || !email || !phoneNumber || !comments) {
        alert("Please fill in all the required fields.");
        return; 
    }

    emailjs.init("ey_vygQe3L1TduuuO"); 

    
    var templateParams = {
         to_name: "Siddarth",
         from_name:  firstName + " " + lastName,
         email: email,
         phone: phoneNumber,
         message: comments
};


    emailjs.send("service_3w1pquk", "template_ir547d8", templateParams)
        .then(function(response) {
            alert('Subscribed!!');
        }, function(error) {
            console.error('Error:', error);
            alert(' failed!!');
        });
}

//add post -------------------backend


