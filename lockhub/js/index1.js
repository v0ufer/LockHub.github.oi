window.scrollTo(0, 0);

const serverIpAddress = "play.nshard.fun:25565";

function getOnline(serverIpAddress) {
  return fetch("https://api.mcsrvstat.us/3/" + serverIpAddress)
    .then((response) => response.json())
    .then((data) => {
      let text = document.getElementById("online-text").innerHTML;
      let online = data.players;
      
      if (online != undefined) {
        text = text.replace("%players%", online.online)
      } else {
        text = text.replace("%players%", '0')
      }
      document.getElementById("online-text").innerHTML = text;
    });
}
getOnline(serverIpAddress);

function copy(text) {
  if (!navigator.clipboard) {
    return;
  }
  navigator.clipboard.writeText(text);

  const notification = document.getElementById('notification');
    notification.classList.add('show');

    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  const spoilers = document.querySelectorAll('.spoiler');

  spoilers.forEach(spoiler => {
      const button = spoiler.querySelector('.spoiler-button');
      const content = spoiler.querySelector('.spoiler-content');

      button.addEventListener('click', () => {
          const isActive = spoiler.classList.contains('active');

          spoilers.forEach(s => {
              s.classList.remove('active');
              s.querySelector('.spoiler-content').style.maxHeight = null;
              s.querySelector('.spoiler-content').style.padding = '0 0.5em';
          });

          if (!isActive) {
              spoiler.classList.add('active');
              content.style.maxHeight = content.scrollHeight + 'px';
              content.style.padding = '0.5em';
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const links = document.querySelector(".navbar .links");

  menuButton.addEventListener("click", function () {
    if (links.classList.contains("show-navbar")) {
      links.classList.remove("show-navbar");
      links.classList.add("hide-navbar");
      setTimeout(() => {
        links.classList.remove("hide-navbar");
        links.style.display = "none";
      }, 500);
    } else {
      links.style.display = "flex";
      links.classList.add("show-navbar");
    }
  });
});

function getSystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}

function toggleTheme() {
  const theme = document.documentElement.getAttribute("theme");
  const newTheme = theme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = getSystemTheme();

  if (savedTheme) {
    document.documentElement.setAttribute("theme", savedTheme);
  } else {
    document.documentElement.setAttribute("theme", systemTheme);
  }
});
