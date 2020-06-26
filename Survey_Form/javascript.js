var formSubmit = {name: "", email: "", age: "", mood: "", recommend: "", improved: [], comments: ""}



function printForm(event) {
    event.preventDefault();

    formSubmit.name = document.getElementById('name').value;
    
    formSubmit.email = document.getElementById('email').value;
    
    formSubmit.age = document.getElementById('age').value;

    formSubmit.mood = document.querySelector('.mood option:checked').value;
    
    formSubmit.recommend = document.querySelector('input[name="recommend"]:checked').value;

    var improvements = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < improvements.length; i++) {
      formSubmit.improved.push(improvements[i].value)
    };

    formSubmit.comments = document.getElementById('comments').value;

    console.log(formSubmit);
};