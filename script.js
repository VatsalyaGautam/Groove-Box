const gif = document.querySelector("#gif");
const addChildOnResize = () => {
  const nav = document.getElementById("nav");
  const leftChevron = document.getElementById("leftchevron");
  const rightChevron = document.getElementById("rightchevron");
  let childLogo = document.getElementById("childlogo");

  if (window.innerWidth <= 375) {
    if (!childLogo) {
      if (leftChevron) leftChevron.style.display = "none";
      if (rightChevron) rightChevron.style.display = "none";

      childLogo = document.createElement("img");
      childLogo.classList.add("invert", "shiftabitright", "shiftabitdown");
      childLogo.src = "logo.svg";
      childLogo.id = "childlogo";
      childLogo.alt = "Groove logo";
      nav.appendChild(childLogo);
    }
  } else {
    if (childLogo) nav.removeChild(childLogo);
    if (leftChevron.style.display === "none")
      leftChevron.style.display = "inline-block";
    if (rightChevron.style.display === "none")
      rightChevron.style.display = "inline-block";
  }
};

const addFooterOnResize = () => {
  const container = document.getElementById("container");
  let footer = document.getElementById("dynamic-footer");

  if (window.innerWidth <= 375) {
    if (!footer) {
      footer = document.createElement("footer");
      footer.id = "dynamic-footer";
      footer.classList.add("shiftabitright", "shiftabitup", "mt-17");

      // Links data
      const links = [
        { href: "https://www.spotify.com/in-en/legal/", text: "Legal" },
        {
          href: "https://www.spotify.com/in-en/safetyandprivacy/",
          text: "Safety & Privacy Center",
        },
        {
          href: "https://www.spotify.com/in-en/legal/privacy-policy/",
          text: "Privacy Policy",
        },
        {
          href: "https://www.spotify.com/in-en/legal/cookies-policy/",
          text: "Cookies",
        },
        {
          href: "https://www.spotify.com/in-en/legal/privacy-policy/#s3",
          text: "About Ads",
        },
        {
          href: "https://www.spotify.com/in-en/accessibility/",
          text: "Accessibility",
        },
        {
          href: "https://www.spotify.com/legal/cookies-policy/",
          text: "Cookies",
          target: "_blank",
          rel: "noopener",
        },
      ];

      links.forEach((linkData) => {
        const link = document.createElement("a");
        link.href = linkData.href;
        link.textContent = linkData.text;
        if (linkData.target) link.target = linkData.target;
        if (linkData.rel) link.rel = linkData.rel;
        footer.appendChild(link);
      });

      container.appendChild(footer);
    }
  } else {
    if (footer) container.removeChild(footer);
  }
};

window.addEventListener("resize", addChildOnResize);
window.addEventListener("load", addChildOnResize);
window.addEventListener("resize", addFooterOnResize);
window.addEventListener("load", addFooterOnResize);

const fullvideo = document.getElementById("vid");
const fulldiv = document.querySelector("#mov");

gif.addEventListener("mouseenter", () => {
  fulldiv.style.display = "block";
  fullvideo.play();
  gif.style.opacity = "0";
});
gif.addEventListener("mouseleave", () => {
  fulldiv.style.display = "none";
  fullvideo.pause();
  gif.style.opacity = "1";
});

const OnResize = () => {
  const caption = document.querySelector("#caption");
  const gif = document.querySelector("#gif");
  if (window.innerWidth <= 672) {
    caption.style.visibility = "hidden";
    gif.style.visibility = "hidden";
  } else if (!audioElement.paused && !audioElement.currentTime <= 0) {
    caption.style.visibility = "visible";
    gif.style.visibility = "visible";
  }
};
window.addEventListener("resize", OnResize);
window.addEventListener("load", OnResize);
