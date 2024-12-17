const checkToggle = document.getElementById('toggle')
const basicCost = document.getElementById('basicCost')
const professionalCost = document.getElementById
('professionalCost')
const masterCost = document.getElementById('masterCost')

checkToggle.addEventListener('change', () => {
    if(checkToggle.checked){
        basicCost.textContent = `19.99`
        professionalCost.textContent = `24.99`
        masterCost.textContent = `39.99`
        console.log('hello')
    } else{
        basicCost.textContent = `199.99`
        professionalCost.textContent = `249.99`
        masterCost.textContent = `399.99`
    }
})