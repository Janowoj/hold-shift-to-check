const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    // Check if they had the shift key down
    if (e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them inbetween!');
            };
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    };
    lastChecked = this;
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener(('click'), handleCheck)
});

