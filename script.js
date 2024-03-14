function toggleButton() {
    var checkbox = document.getElementById("flexCheckDefault");
    var continueButton = document.getElementById("continueButton");
    var closeButton = document.getElementById("closeButton");

    // If the checkbox is checked, enable the button; otherwise, disable it
    continueButton.disabled = !checkbox.checked;
    closeButton.disabled = !checkbox.checked

}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('flexCheckDefault');
    var continueButton = document.getElementById('continueButton');
    var closeButton = document.getElementById('closeButton');
    var tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  
    // Function to update button states and tooltip availability
    function updateState() {
      continueButton.disabled = closeButton.disabled = !checkbox.checked;
      tooltipTriggers.forEach(trigger => {
        if (checkbox.checked) {
          bootstrap.Tooltip.getInstance(trigger)?.dispose();
        } else if (!trigger.getAttribute('data-bs-original-title')) {
          trigger.setAttribute('data-bs-original-title', trigger.getAttribute('data-bs-title'));
          new bootstrap.Tooltip(trigger);
        }
      });
    }
  
    // Checkbox change event listener
    checkbox.addEventListener('change', updateState);
  
    // Initialize state on load
    updateState();
  
    // Optional: Prevent offcanvas close if terms not agreed
    document.querySelectorAll('.offcanvas').forEach(oc => {
      oc.addEventListener('hide.bs.offcanvas', function (event) {
        if (!checkbox.checked) {
          event.preventDefault();
        }
      });
    });
  });  