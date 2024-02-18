// prompt("Copy this:", localStorage.getItem("infinite-craft-data"));
// Add option to export to file (The above seems to only export about 38 items)
// I don't know how to code in JS, just a heads up. I'm using ChatGPT here

var data = localStorage.getItem("infinite-craft-data");
var filename = "exported_data.txt";
var filetype = "text/plain";
    // Create a Blob object with the data
    var blob = new Blob([data], { type: filetype });

    // Create a temporary URL for the Blob object
    var url = URL.createObjectURL(blob);

    // Create a link element
    var link = document.createElement('a');

    // Set the href attribute of the link to the temporary URL
    link.href = url;

    // Set the download attribute to the desired filename
    link.download = filename;

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up by revoking the temporary URL
    URL.revokeObjectURL(url);
