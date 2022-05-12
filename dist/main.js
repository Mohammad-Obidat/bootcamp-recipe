const renderData = new Renderer();

const addEventListener = () => {
  $('.recipesImg').on('click', function () {
    let firstLi = $(this)
      .closest('.displayData')
      .find('.ulGrid')
      .find('li:first-child')
      .text();

    alert(firstLi);
  });
};

const fetchData = (ingredients) => {
  $.get(`/recipes/${ingredients}`, (recipesData) => {
    if (recipesData !== '' || recipesData) {
      renderData.render(recipesData);
      addEventListener();
    } else {
      fetchData(ingredients);
    }
  });
  $('#Input').val('');
};

const displayDataBtn = () => {
  let ingredients = $('#Input').val().toLowerCase();
  fetchData(ingredients);
};
