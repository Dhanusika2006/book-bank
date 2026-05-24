let books = [];

function addBook(){

    const bookId = document.getElementById("bookId").value;
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;

    if(bookId === "" || bookName === "" || authorName === ""){
        alert("Please fill all fields");
        return;
    }

    const book = {
        id: bookId,
        name: bookName,
        author: authorName,
        status: "Available"
    };

    books.push(book);

    displayBooks();

    document.getElementById("bookId").value = "";
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}

function displayBooks(){

    const table = document.getElementById("bookTable");

    table.innerHTML = "";

    books.forEach((book, index) => {

        table.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.status}</td>
                <td>
                    <button onclick="toggleStatus(${index})">
                        ${book.status === "Available" ? "Issue" : "Return"}
                    </button>
                </td>
            </tr>
        `;
    });
}

function toggleStatus(index){

    if(books[index].status === "Available"){
        books[index].status = "Issued";
    }
    else{
        books[index].status = "Available";
    }

    displayBooks();
}

function searchBook(){

    const input = document.getElementById("searchInput").value.toLowerCase();

    const rows = document.querySelectorAll("#bookTable tr");

    rows.forEach(row => {

        const text = row.innerText.toLowerCase();

        row.style.display = text.includes(input) ? "" : "none";
    });
}