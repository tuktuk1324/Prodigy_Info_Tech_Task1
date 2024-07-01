// Desktop Nav

const parent = document.querySelectorAll(".drop-down");
const nav = document.querySelector("nav");

for (let i = 0; i < parent.length; i++) {
  parent[i].addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event bubbling
    let ddStatus = parent[i].querySelector("ul").style.display;

    if (ddStatus === "flex") {
      parent[i].querySelector("ul").style.display = "none";
    } else {
      closeAll(parent);
      parent[i].querySelector("ul").style.display = "flex";
    }
  });
}

function closeAll(arg) {
  for (let i = 0; i < arg.length; i++) {
    arg[i].querySelector("ul").style.display = "none";
  }
}

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target)) {
    closeAll(parent);
  }
});

// Mobile Nav

const mParent = document.querySelectorAll(".mobile-nav .m-drop-down");
const mNav = document.querySelector(".mobile-nav");
const toggleNav = document.getElementById("toggle-nav");

for (let i = 0; i < mParent.length; i++) {
  mParent[i].addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event bubbling
    let ddStatus = mParent[i].querySelector("ul").style.display;

    if (ddStatus === "block") {
      mParent[i].querySelector("ul").style.display = "none";
    } else {
      closeAll(mParent);
      mParent[i].querySelector("ul").style.display = "block";
    }
  });
}

function closeAll(arg) {
  for (let i = 0; i < arg.length; i++) {
    arg[i].querySelector("ul").style.display = "none";
  }
}

toggleNav.addEventListener("click", function () {
  mNav.classList.toggle("open");
  toggleNav.classList.toggle("open");
});

document.addEventListener("click", function (e) {
  if (!mNav.contains(e.target) && !toggleNav.contains(e.target)) {
    closeAll(mParent);
  }
});
