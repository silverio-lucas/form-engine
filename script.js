async function loadSchema() {
    const response = await fetch('schema.json');
    return response.json();
}

function createForm() {
    return document.createElement('form');
}

function createField(field) {
    const wrapper = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = field.label;

    const input = document.createElement('input');
    input.type = field.type;
    input.name = field.name;

    if (field.required) {
        input.required = true;
    }

    wrapper.appendChild(label);
    wrapper.appendChild(input);

    return wrapper;
}

function validate(form, schema) {
    let isValid = true;

    schema.forEach(field => {
        const input = form.elements[field.name];

        if (field.required && !input.value.trim()) {
            input.style.border = '1px solid red';
            isValid = false;
        } else {
            input.style.border = '';
        }
    });

    return isValid;
}

async function init() {
    const schema = await loadSchema();

    const app = document.getElementById('app');
    const form = createForm();

    schema.forEach(field => {
        const fieldElement = createField(field);
        form.appendChild(fieldElement);
    });

    const button = document.createElement('button');
    button.textContent = 'Enviar';

    form.appendChild(button);
    app.appendChild(form);

    // EVENTO CORRETO
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validate(form, schema)) return;

        const data = new FormData(form);
        const result = Object.fromEntries(data.entries());

        console.log(result);
    });
}

init();