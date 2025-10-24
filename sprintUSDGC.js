// Search bar JS - Fixed version
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('mainSearchInput');
    const suggestionsContainer = document.getElementById('mainSuggestionsContainer'); // Updated ID

    // Debug: Check if elements exist
    console.log('Search input found:', searchInput);
    console.log('Suggestions container found:', suggestionsContainer);

    // Sample data for suggestions with URLs
    const data = [
        { name: 'TerRon Open', url: 'https://www.pdga.com/tour/event/95906' },
        { name: 'USDGC', url: 'https://www.pdga.com/tour/event/95906' }
    ];

    if (!searchInput || !suggestionsContainer) {
        console.error('Search elements not found!');
        return;
    }

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        console.log('Search term:', searchTerm);
        suggestionsContainer.innerHTML = '';

        if (searchTerm.length === 0) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const filteredSuggestions = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm)
        );

        console.log('Filtered suggestions:', filteredSuggestions);

        if (filteredSuggestions.length > 0) {
            suggestionsContainer.style.display = 'block';
            filteredSuggestions.forEach((suggestion, index) => {
                const suggestionItem = document.createElement('a');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = suggestion.name;
                suggestionItem.href = suggestion.url;
                suggestionItem.target = '_blank'; // Open in new tab

                // Add data attribute to track if it's the first item
                if (index === 0) {
                    suggestionItem.setAttribute('data-first', 'true');
                }

                suggestionItem.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.open(suggestion.url, '_blank');
                    searchInput.value = suggestion.name;
                    suggestionsContainer.style.display = 'none';
                });

                suggestionsContainer.appendChild(suggestionItem);
            });
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });

    // Handle Enter key to select first result
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const firstSuggestion = suggestionsContainer.querySelector('.suggestion-item[data-first="true"]');
            if (firstSuggestion) {
                firstSuggestion.click();
            }
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', function (event) {
        if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});

// end of main search bar JS

document.addEventListener("DOMContentLoaded", function () {
    // === LeaderBoard Toggle ===
    const toggleHeader = document.getElementById("toggleTable");
    const tableBody = document.getElementById("tableBody");
    tableBody.style.display = "none";

    toggleHeader.addEventListener("click", function () {
        tableBody.style.display =
            tableBody.style.display === "none" || tableBody.style.display === ""
                ? "table-row-group"
                : "none";
    });

    // === Past Events Toggle ===
    const togglePast = document.getElementById("togglePast");
    const pastBody = document.getElementById("pastBody");
    pastBody.style.display = "none";

    togglePast.addEventListener("click", function () {
        pastBody.style.display =
            pastBody.style.display === "none" || pastBody.style.display === ""
                ? "table-row-group"
                : "none";
    });
});

// header js 
// 3 bar additonal button
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.menu-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', e => {
            const wrapper = e.target.closest('.menu-wrapper');
            const isOpen = wrapper.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    });

    // close when clicking outside
    document.addEventListener('click', e => {
        document.querySelectorAll('.menu-wrapper.active').forEach(menu => {
            if (!menu.contains(e.target)) menu.classList.remove('active');
        });
    });

    // close with Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.menu-wrapper.active').forEach(menu => menu.classList.remove('active'));
        }
    });
});


// search bar 
// Search toggle
document.addEventListener("DOMContentLoaded", () => {
    const searchToggle = document.getElementById("searchToggle");
    const searchBox = document.querySelector(".search-box");

    if (searchToggle && searchBox) {
        searchToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            searchBox.classList.toggle("active");
            if (searchBox.classList.contains("active")) {
                searchBox.querySelector("input").focus();
            }
        });

        document.addEventListener("click", (e) => {
            if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
                searchBox.classList.remove("active");
            }
        });
    }
});
// end of header js

// Make all winners tables inside .dbwinnertable collapsible by header click
document.addEventListener('DOMContentLoaded', () => {
    const winnerTables = document.querySelectorAll('.dbwinnertable table');
    winnerTables.forEach(table => {
        // skip if no thead/tbody
        const thead = table.querySelector('thead');
        const tbody = table.querySelector('tbody');
        if (!thead || !tbody) return;

        // hide tbody initially
        tbody.style.display = 'none';

        // pick the header row (first tr in thead) to act as toggle
        const headerRow = thead.querySelector('tr') || thead;
        headerRow.tabIndex = 0;
        headerRow.style.cursor = 'pointer';
        headerRow.setAttribute('role', 'button');
        headerRow.setAttribute('aria-expanded', 'false');

        function setOpen(open) {
            headerRow.setAttribute('aria-expanded', open ? 'true' : 'false');
            tbody.style.display = open ? 'table-row-group' : 'none';
        }

        headerRow.addEventListener('click', function () {
            const isHidden = tbody.style.display === 'none' || tbody.style.display === '';
            setOpen(isHidden);
        });
        headerRow.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isHidden = tbody.style.display === 'none' || tbody.style.display === '';
                setOpen(isHidden);
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // === LeaderBoard Toggle ===
    const toggleHeader = document.getElementById("toggleTable");
    const tableBody = document.getElementById("tableBody");
    tableBody.style.display = "none";

    toggleHeader.addEventListener("click", function () {
        tableBody.style.display =
            tableBody.style.display === "none" || tableBody.style.display === ""
                ? "table-row-group"
                : "none";
    });

    // === Past Events Toggle ===
    const togglePast = document.getElementById("togglePast");
    const pastBody = document.getElementById("pastBody");
    pastBody.style.display = "none";

    togglePast.addEventListener("click", function () {
        pastBody.style.display =
            pastBody.style.display === "none" || pastBody.style.display === ""
                ? "table-row-group"
                : "none";
    });
});