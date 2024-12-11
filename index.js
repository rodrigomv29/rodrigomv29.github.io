const lastUpdatedSpan = document.querySelector(".last-updated")
lastUpdatedSpan.textContent = new Date(document.lastModified).toLocaleDateString();