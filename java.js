const form = document.getElementById('form');
const Asset = document.getElementById('Asset');
const Cost = document.getElementById('Cost');
const Current = document.getElementById('Current');
const Methods = document.getElementById('Methods');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {

    const AssetValue = Asset.value.trim();
    const CostValue = Cost.value.trim();
    const CurrentValue = Current.value.trim();
    const MethodsValue = Methods.value.trim();
  

    if (AssetValue === '') {
        setError(Asset, "Asset can' t be empty");
    } else {
        setSuccess(Asset);
    }

    if (CostValue === '') {
        setError(Cost, "Cost value be empty");
    } else {
        setSuccess(Cost);
    }

    if (CurrentValue=== '') {
        setError(Current, "Current value is required");
    } else {
        setSuccess(Current);
    }

    if (MethodsValue === '') {
        setError(Methods, 'Methods is required');
    } else {
        setSuccess(Methods);
    }


}