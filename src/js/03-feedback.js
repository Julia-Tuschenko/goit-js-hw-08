const LOCALSTORANGE_KEY = 'selectedFiltres';
const feedbackForm = document.querySelector('.feedback-form');

initForm();

feedbackForm.addEventListener('imput', evt => {
    evt.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => console.log(value, name));
});

feedbackForm.addEventListener('change', evt => {
    let persistedFilters = localStorage.getItem(LOCALSTORANGE_KEY);
    persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
    persistedFilters[evt.target.name] =evt.target.value;
    localStorage.setItem(LOCALSTORANGE_KEY, JSON.stringify(persistedFilters));
});

feedbackForm.addEventListener('submit', evt => {
    localStorage.removeItem(LOCALSTORANGE_KEY);
}
);

function initForm(){
let persistedFilters = localStorage.getItem(LOCALSTORANGE_KEY);
if(persistedFilters){
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
        feedbackForm.elements[name].value = value;
    });
}
}