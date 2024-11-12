const addChildOnResize = () => {
  const nav = document.getElementById("nav");
  const leftchevron = document.getElementById("leftchevron");
  const rightchevron = document.getElementById("rightchevron");
  let childLogo = document.getElementById("childlogo"); // Locate the child logo by its ID

  if (window.innerWidth <= 375) {
    // If the logo doesn't already exist, create it
    if (!childLogo) {
      // Hide the chevrons if they exist
      if (leftchevron) {
        leftchevron.style.display = "none";
      }
      if (rightchevron) {
        rightchevron.style.display = "none";
      }

      // Create and append the new child logo element
      childLogo = document.createElement("img");
      childLogo.classList.add("invert", "shiftabitright", "shiftabitdown");
      childLogo.src = "logo.svg";
      childLogo.id = "childlogo";
      childLogo.alt = "Groove logo";
      nav.appendChild(childLogo);
    }
  } else {
    // If the screen width is above 375px, remove the child logo if it exists
    if (childLogo) {
      nav.removeChild(childLogo);
    }

    // Show the chevrons if they were hidden
    if (leftchevron) {
      leftchevron.style.display = "inline-block";
    }
    if (rightchevron) {
      rightchevron.style.display = "inline-block";
    }
  }
};

// Attach the resize and load events to trigger the function
window.addEventListener("resize", addChildOnResize);
window.addEventListener("load", addChildOnResize);
