// Simple categories object for testing
const categories = {
  {% for category in site.categories limit:1 %} // Limit to one category to check syntax
    "{% capture category_name %}{{ category | first }}{% endcapture %}{{ category_name | downcase | replace: " ", "_" | replace: "-", "_" | replace: "'", "" }}": [
      {% for post in site.categories[category_name] limit:1 %}
        {
          "url": "{{ site.baseurl }}{{ post.url }}",
          "date": "{{ post.date | date: "%B %d, %Y" }}",
          "title": "{{ post.title | escape }}"
        }
      {% endfor %}
    ]
  {% endfor %}
};
console.log(categories);

// Event listener for loading categories
window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      e.preventDefault(); // Prevents the default link navigation

      const categoryName = e.target.innerText.trim().replace(" ", "_");
      const posts = categories[categoryName];
      if (!posts) {
        console.error("No posts found for category:", categoryName); // Error handling
        return;
      }

      // Generate HTML for the posts in the clicked category
      let html = "";
      posts.forEach(post => {
        html += `
          <a class="modal-article" href="${post.url}">
            <h4>${post.title}</h4>
            <small class="modal-article-date">${post.date}</small>
          </a>
        `;
      });

      // Set the modal content and open the modal
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  // Close the modal when the background is clicked
  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  });
};