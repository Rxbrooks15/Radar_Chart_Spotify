document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('d3-dropdown');
  
    // Variable to track whether the dropdown was clicked
    let dropdownClicked = false;
  
    // Event listener for the mousedown event on the dropdown
    dropdown.addEventListener('mousedown', function () {
      // Set the dropdownClicked flag to true
      dropdownClicked = true;
  
      // Log the number 7 when the dropdown is clicked
      console.log(7);
    });
  
    // Event listener for the change event on the dropdown
    dropdown.addEventListener('change', function () {
      // Check if the dropdown was clicked before selecting an option
      if (dropdownClicked) {
        // Log true to the console
        console.log(true);
  
        // Open and display the corresponding HTML file based on the selected value
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        const selectedValue = selectedOption.value;
  
        // Open and display the corresponding HTML file based on the selected value
        if (selectedValue === 'Button1') {
          // Log the number 2 when Button1 is selected
          console.log(2);
          window.location.href = 'term1.html';
        } else if (selectedValue === 'Button2') {
          window.location.href = 'new_genres.html';
        } else if (selectedValue === 'Button3') {
          window.location.href = 'artists.html';
        }else if (selectedValue === 'Button4') {
            window.location.href = 'all_year.html';
        }else if (selectedValue === 'Button5') {
            window.location.href = 'search_area.html';
        }else if (selectedValue === 'Button6') {
            window.location.href = 'search_stroke.html';
        }
        
      }
  
      // Reset the dropdownClicked flag
      dropdownClicked = false;
  
      // Perform additional actions if needed
    });
  });