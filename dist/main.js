const renderData = new Renderer();

const fetchData = () => {
  let ingredients = $('#Input').val().toLowerCase();
  $.get(`/recipes/${ingredients}`, (recipesData) => {
    renderData.render(recipesData);
  });
  $('#Input').val('');
};

const displayDataBtn = () => {
  fetchData();
};

$('.recipesImg').on('click', function () {
  alert('hi');
});
let firstLi = $('.li-Ingredients').closest('.ulGrid').first().val();
console.log(firstLi);
