## Interactive Resume

Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.

### The process I followed:
The resume has four distinct sections: work, education, projects and a header with biographical information.

1. Build four JSONs, each one representing a different resume section.
1. Iterated through each JSON and appended its information to index.html in the correct section.
 * Used jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html.
 * Used JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSONs.
1. The resume includes an interactive google map with additional features implemented via the Google Maps API.
