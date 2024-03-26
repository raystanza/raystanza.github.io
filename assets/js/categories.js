//const categories = { {% for category in site.categories %}{% capture category_name %}{{ category | first }}{% endcapture %}{{ category_name | replace: " ", "_" }}: [{% for post in site.categories[category_name] %}{ url: `{{ site.baseurl }}{{ post.url }}`, date: `{{post.date | date_to_string}}`, title: `{{post.title}}`},{% endfor %}],{% endfor %} }
const categories = {
  {% for category in site.categories %}
  {% capture category_name %}{{ category | first }}{% endcapture %}
  "{{ category_name | downcase | replace: " ", "_" | replace: "-", "_" | replace: "'", "" }}": [
    {% for post in site.categories[category_name] %}
    {
      url: `{{ site.baseurl }}{{ post.url }}`,
      date: `{{ post.date | date_to_string }}`,
      title: `{{ post.title | escape }}`
    },
    {% endfor %}
  ],
  {% endfor %}
};
console.log(categories);
window.onload = function () {
  console.log("Categories:", categories); // Log the categories object for debugging
  document.querySelectorAll(".category").forEach((category) => {
    console.log("Attaching event listener to category:", category.innerText); // Debugging
    category.addEventListener("click", function (e) {
      const categoryName = e.target.innerText.trim().replace(" ", "_");
      console.log("Category clicked:", categoryName); // Debugging
      const posts = categories[categoryName];
      if (!posts) {
        console.error("No posts found for category:", categoryName); // Error handling
        return;
      }
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });
  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};
