const searchField = document.querySelector('#searchField');
const search = document.querySelector('.search_btn');
const listResult = document.querySelector('.results')

function showResults(e) {
  e.preventDefault();
  const results = handleSearch();
  console.log(results);
  const html = results.map(result => {
  //   return `
  //   <li class="result">
  //     <img class="result_image" src="https://placehold.it/100x100" alt="PLaceholder">
  //     <h4 class="result_title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
  //     <p class="result_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur architecto cum asperiores dolor delectus tempore quasi aperiam commodi? Aperiam, earum.</p>
  //     <a href="#" class="result_link"></a>
  //   </li>
  // `;
  return 'yay';
  console.log('yay');
  });
  console.log(results);
  listResult.innerHTML = html;
}

function handleSearch() {
  let results = [];
  let searchTerm = searchField.value;
  // Remember to change srsearch=green to srsearch=${searchTerm}
  const api = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages%7Cextracts&titles=Main+Page&generator=search&utf8=1&exsentences=2&exlimit=max&exintro=1&explaintext=1&gsrsearch=green&gsrlimit=10`;

  fetch(api)
    .then(response => response.json())
    .then(data => Object.keys(data.query.pages).map(key => results.push(data.query.pages[key])))
    .catch(error => console.error(error));
  return results;
}


search.addEventListener('click', showResults);