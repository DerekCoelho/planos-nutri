document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector(".dropdown");
    var dropbtn = dropdown.querySelector(".dropbtn");
    var arrowIcon = dropdown.querySelector(".icon svg");
    var planSelection = dropdown.querySelector("#planSelection");
    var totalPrice = document.getElementById("totalPrice");
    var dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseover', function () {
        arrowIcon.style.transform = 'rotate(180deg)';
    });

    dropdown.addEventListener('mouseout', function () {
        arrowIcon.style.transform = 'rotate(0deg)';
    });

    function updatePrice(selectedPlan) {
        var planPrices = {
            '1': 'R$ 399.00',
            '2': 'R$ 699.00',
            '3': 'R$ 1599.00'
        };

        totalPrice.textContent = planPrices[selectedPlan];
    }

    function handleButtonClick(event) {
        var selectedPlan = event.target.value;
        dropbtn.textContent = event.target.textContent;
        updatePrice(selectedPlan);
        closeDropdown();
    }

    function handlePlanSelectionInput() {
        var selectedPlan = planSelection.value;
        dropbtn.textContent = planSelection.options[planSelection.selectedIndex].text;
        updatePrice(selectedPlan);
        closeDropdown();
    }

    function closeDropdown() {
        dropdownContent.style.display = 'none';
        document.removeEventListener('click', closeDropdown);
    }

    // Adicionar evento para abrir o dropdown
    dropbtn.addEventListener('click', function (event) {
        event.stopPropagation(); // Impede a propagação do clique para fechar imediatamente
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        document.addEventListener('click', closeDropdown);
    });

    var buttons = dropdown.querySelectorAll('.dropdown-content button');
    buttons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
    });

    planSelection.addEventListener('input', handlePlanSelectionInput);
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdown2 = document.querySelector(".dropdown2");
    var dropbtn2 = dropdown2.querySelector(".dropbtn2");
    var arrowIcon2 = dropdown2.querySelector(".icon2 svg");
    var planSelection2 = dropdown2.querySelector("#planSelection2");
    var totalPrice2 = document.getElementById("totalPrice2");
    var dropdownContent2 = dropdown2.querySelector('.dropdown-content2');

    dropdown2.addEventListener('mouseover', function () {
        arrowIcon2.style.transform = 'rotate(180deg)';
    });

    dropdown2.addEventListener('mouseout', function () {
        if (!dropdownContent2.contains(document.activeElement)) {
            arrowIcon2.style.transform = 'rotate(0deg)';
        }
    });

    function updatePrice(selectedPlan) {
        var planPrices2 = {
            '4': 'R$ 299.00',
            '5': 'R$ 259.00',
            '6': 'R$ 229.00'
        };

        totalPrice2.textContent = planPrices2[selectedPlan];
    }

    function handleButtonClick(event) {
        var selectedPlan = event.target.value;
        dropbtn2.textContent = event.target.textContent;
        updatePrice(selectedPlan);
        closeDropdown();
    }

    function handlePlanSelectionInput() {
        var selectedPlan = planSelection2.value;
        dropbtn2.textContent = planSelection2.options[planSelection2.selectedIndex].text;
        updatePrice(selectedPlan);
        // Não fechamos o dropdown aqui para manter o ícone visível
    }

    function closeDropdown() {
        dropdownContent2.style.display = 'none';
        document.removeEventListener('click', closeDropdown);
    }

    // Adicionar evento para abrir o dropdown
    dropbtn2.addEventListener('click', function (event) {
        event.stopPropagation(); // Impede a propagação do clique para fechar imediatamente
        dropdownContent2.style.display = (dropdownContent2.style.display === 'block') ? 'none' : 'block';
        arrowIcon2.style.transform = 'rotate(180deg)';
        document.addEventListener('click', closeDropdown);
    });

    var buttons2 = dropdown2.querySelectorAll('.dropdown-content2 button');
    buttons2.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
    });

    planSelection2.addEventListener('input', handlePlanSelectionInput);
});


const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector (".navbar");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll(".al").forEach(n => n. addEventListener("click", () => {
    hamburguer.classList.remove('active')
    navMenu.classList.remove('active');
}))

