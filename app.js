class Scientist {
    constructor(name, field, year, country, image) {
        this.name = name;
        this.field = field;
        this.year = year;
        this.country = country;
        this.image = image;
    }
}

class UI {
    addScientistToList(scientist) {
        const display = document.querySelector('.display');

        let html = '<div class="display-scientist"><div class="display-name">%name%</div><div class="display-field">%field%</div><div class="display-year">%year%</div><div class="display-country">%country%</div><div class="display-image"><img src="%image%"alt=""></div><div class="remove-scientist">Remove Scientist X</div>'
        let newHtml = html.replace('%name%', scientist.name);
        newHtml = newHtml.replace('%field%', scientist.field);
        newHtml = newHtml.replace('%year%', scientist.year);
        newHtml = newHtml.replace('%country%', scientist.country);
        newHtml = newHtml.replace('%image%', scientist.image);
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
    }

    clearForm(){
        form.reset();
    } 

    removeScientist(target){
        if (target.className === 'remove-scientist') {
            target.parentElement.remove();
        }
    } 
}

document.getElementById('form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const field = document.getElementById('field').value;
    const year = document.getElementById('year').value;
    const country = document.getElementById('country').value;
    const image = document.getElementById('image').value;

    const scientist = new Scientist(name, field, year, country, image);
    //console.log(scientist);
    const ui = new UI();

    ui.addScientistToList(scientist);

    ui.clearForm();

    e.preventDefault();
});

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
 
    ui.removeScientist(e.target);

    ui.clearForm();

    e.preventDefault(); 
})



