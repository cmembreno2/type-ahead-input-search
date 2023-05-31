# Input Text with Type Ahead Searches - HTML / JavaScript & Tailwind CSS
This is a simple HTML page that demonstrates a filtering functionality for a list. The page consists of an input field where you can search for agents by name or email, and a dropdown menu that shows the filtered results.

### Usage
Open the HTML file (index.html) in a web browser.
Type in the input field to search for elements. The dropdown menu will dynamically update to show the matching element.
Click on an agent in the dropdown menu to select it. The selected agent will appear in the input field.
Click anywhere outside the input field or dropdown menu to hide the dropdown menu.


## Functionality
The onChange function is triggered whenever the user types in the input field. It filters the elements array based on the entered keyword (case-insensitive) and renders the matching elements in the dropdown menu.

The onClick function is triggered when the input field is clicked. It shows the dropdown menu and renders all the elements in the menu.

The renderOptions function generates the HTML for the dropdown menu options based on the provided options array.

The selectOption function is called when an agent is clicked in the dropdown menu. It hides the dropdown menu and sets the selected agent as the value of the input field.

The hideDropdown function hides the dropdown menu.

The adjustDropdownHeight function adjusts the height of the dropdown menu based on the number of options. It ensures that the menu does not exceed a maximum height.

## CSS
Tailwind CSS: A utility-first CSS framework used for styling the page. The framework is included via a CDN link in the HTML file.
Additional Information


This is a basic implementation intended to demonstrate the filtering functionality. It can be extended and customized according to specific requirements.