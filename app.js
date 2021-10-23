window.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("#title"),
        author = document.querySelector("#author"),
        year = document.querySelector("#year"),
        btn = document.querySelector(".btn"),
        bookList = document.querySelector("#book-list");

    btn.addEventListener("click", (event) => {
        event.preventDefault();

        if (title.value == "" && author.value == "" && year.value == "") {
            alert("Iltimos ma'lumotlarni kiriting.");
        } else {
            // Creating new Row
            const newRow = document.createElement("tr");

            // Creating new Title
            const newTitle = document.createElement("th");
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);

            // Creating new Author 
            const newAuthor = document.createElement("th");
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);

            // Creating new Year
            const newYear = document.createElement("th");
            newYear.innerHTML = year.value;
            newRow.appendChild(newYear);

            // Displaying in UI
            bookList.appendChild(newRow);

            // Cleaning inputs
            title.value = "";
            author.value = "";
            year.value = "";
        }
    })
})