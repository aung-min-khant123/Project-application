let count = 0;

function increaseCount(){
    count++;
    displayCount();
}

function decreaseCount(){
    count--;
    displayCount();
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}
