
var posts = JSON.parse(localStorage.getItem("posts")) || 
[
    {id: 1, title: 'Daily C++ news'},
    {id: 2, title: 'Daily html news'},
    {id: 3, title: 'Daily Javascript news'},
    {id: 4, title: 'Daily CSS news'}
];

function renderTable() {
    const tableBody = document.querySelector("#posts-table tbody");
    tableBody.innerHTML = "";
    posts.forEach(post => {
        let row = `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

if (document.querySelector("#posts-table")) {
    renderTable();
}

var submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", function () {
    var id = document.querySelector("#id").value;
    var title = document.querySelector("#title").value;
    posts.push({ id: parseInt(id), title: title }); 
    localStorage.setItem("posts", JSON.stringify(posts)); 
    window.location.href = "index.html"; 
});
