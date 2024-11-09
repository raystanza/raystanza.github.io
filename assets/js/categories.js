// Initialize categories object to hold post data by category
const categories = {
  {% for category in site.categories %}
    {% assign category_key = category | first | downcase | replace: " ", "_" | replace: "-", "_" | replace: "'", "" %}
    "{{ category_key }}": [
      {% for post in site.categories[category[0]] %}
        {
          url: "{{ site.baseurl }}{{ post.url }}",
          date: "{{ post.date | date: "%B %d, %Y" }}",
          title: "{{ post.title | escape }}"
        }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]{% unless forloop.last %},{% endunless %}
  {% endfor %}
};

// Event listener for category links
window.onload = function () {
  document.querySelectorAll(".category").forEach((categoryLink) => {
    categoryLink.addEventListener("click", function (e) {
      e.preventDefault();  // Prevents the default link navigation
      
      // Format the clicked category name
      const categoryName = e.target.innerText.trim().replace(/\s+/g, "_").toLowerCase();
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
      document.querySelector("#category-modal-bg").classList.add("open");
      document.querySelector("#category-modal").classList.add("open");
    });
  });

  // Close the modal when the background is clicked
  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.remove("open");
    document.querySelector("#category-modal").classList.remove("open");
  });
};