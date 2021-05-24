let data = [], order = true;

async function updateNews() {
  let response = await fetch("http://api.mediastack.com/v1/news?access_key=f01bdd119be2d28c7197bea6a8093660&languages=en"),
  {data: news} = await response.json();
  data = news;
  loadTable(news);
}

function loadTable(news = null) {
  if (!news) updateNews();
  else {
    let table = "";
    news.forEach((n, i) => 
      table += 
        `<tr class="new${i % 2 === 1 ? ' bggray' : ''}">
          <td colspan="3">${n.title}</td>
          <td colspan="4">${n.description}</td>
          <td colspan="2">${n.category}</td>
          <td colspan="2">${n.source}</td>
        </tr>`
    );
    document.getElementById("tableBody").innerHTML = table;
  }
}

function orderBy(prop) {
  if (order) data.sort((a,b) => a[prop].localeCompare(b[prop]));
  else data.sort((a,b) => b[prop].localeCompare(a[prop]));
  order = !order;
  loadTable(data);
}

updateNews();