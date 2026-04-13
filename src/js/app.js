import "../style/index.css";

function render(variables = {}) {
  const coverHTML = variables.includeCover
    ? `<div class="cover"><img src="${variables.background}" /></div>`
    : "<div class='cover'></div>";

  const socialMediaHTML = `
    <ul class="${variables.socialMediaPosition}">
      <li><a href="${variables.twitter ||
        "#"}"><i class="fa fa-twitter"></i></a></li>
      <li><a href="${variables.github ||
        "#"}"><i class="fa fa-github"></i></a></li>
      <li><a href="${variables.linkedin ||
        "#"}"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="${variables.instagram ||
        "#"}"><i class="fa fa-instagram"></i></a></li>
    </ul>
  `;

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${coverHTML}
      <img src="${variables.avatarURL}" class="photo">
      <h1>${variables.name || "Your name"} ${variables.lastName ||
    "Your lastname"}</h1>
      <h2>${variables.role || "Web Developer"}</h2>
      <h3>${variables.city || "Miami"}, ${variables.country || "USA"}</h3>
      ${socialMediaHTML}
    </div>
  `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-right",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    city: null,
    country: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(elm => {
    elm.addEventListener("change", function() {
      const attr = this.getAttribute("for");
      let val =
        this.value === "" || this.value === "null"
          ? null
          : this.value === "true"
          ? true
          : this.value === "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, { [attr]: val }));
    });
  });
};
