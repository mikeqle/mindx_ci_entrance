
// Randomize background color
$('#pickColor').on('click', function() {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    $('body').css({backgroundColor: "#" + randomColor});
    // Update text input value
    $("#colorValue:text").val('#' + randomColor);

    // Reset copy button value
    $('#copyColorButton').html('Copy color value!');
});

// // Function to copy to clipboard
// function copyToClipboard() {
//     let textValueText = document.getElementById("colorValue").value;
//     navigator.clipboard.writeText(textValueText);
//     // alert(textValueText);
//     $("#btnAddProfile").prop('value', 'Save');
// }

$('#copyColorButton').on('click', function() {
    let textValueText = document.getElementById("colorValue").value;
    navigator.clipboard.writeText(textValueText);
    
    // alert(textValueText);
    $(this).html('Copied');
});