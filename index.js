const vacancies = [
    { title: "Розробник", company: "XYZ", salary: 3000, location: "Київ", requirements: "Досвід роботи 3+ роки, знання JavaScript, React" },
    { title: "Тестувальник", company: "ABC", salary: 2500, location: "Львів", requirements: "Досвід роботи 2+ роки, знання тестування API, Selenium" }
];

const container = document.getElementById("vacancies-container");
const categoryFilter = document.getElementById("category-filter");
const locationFilter = document.getElementById("location-filter");
const salaryFilter = document.getElementById("salary-filter");
const applyFiltersBtn = document.getElementById("apply-filters");

function renderVacancies(filteredVacancies) {
    container.innerHTML = "";
    filteredVacancies.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("card");
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>Компанія: ${job.company}</p>
            <p>Зарплата: $${job.salary}</p>
            <p>Місто: ${job.location}</p>
            <p>Вимоги: ${job.requirements}</p>
            <button class="apply-btn">Подати заявку</button>
        `;
        
        const applyButton = jobCard.querySelector(".apply-btn");
        applyButton.addEventListener("click", function() {
            applyButton.textContent = "Подано";
            applyButton.classList.add("applied");
            applyButton.disabled = true;
        });
        
        container.appendChild(jobCard);
    });
}

applyFiltersBtn.addEventListener("click", function() {
    const selectedCategory = categoryFilter.value;
    const selectedLocation = locationFilter.value;
    const selectedSalary = parseInt(salaryFilter.value, 10);
    
    const filteredVacancies = vacancies.filter(job => {
        return (!selectedCategory || job.title === selectedCategory) &&
               (!selectedLocation || job.location === selectedLocation) &&
               (!selectedSalary || job.salary >= selectedSalary);
    });
    
    renderVacancies(filteredVacancies);
});

renderVacancies(vacancies);
