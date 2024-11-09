---
---
const categories = {
{% for category in site.categories %}
  {% capture category_name %}{{ category | first }}{% endcapture %}
  "{{ category_name | downcase | replace: " ", "_" | replace: "-", "_" | replace: "'", "" }}": [
    {% for post in site.categories[category_name] %}
      {
        url: `{{ site.baseurl }}{{ post.url }}`,
        date: `{{ post.date | date_to_string }}`,
        title: `{{ post.title | escape }}`
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]{% unless forloop.last %},{% endunless %}
{% endfor %}
};

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      e.preventDefault();
      const categoryName = e.target.innerText.trim().replace(" ", "_");
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