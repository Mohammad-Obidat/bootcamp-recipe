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

const fetchData = () => {
  let ingredients = $('#Input').val().toLowerCase();
  $.get(`/recipes/${ingredients}`, (recipesData) => {
    renderData.render(recipesData);
  });
  $('#Input').val('');
};

const displayDataBtn = () => {
  fetchData();

  setTimeout(() => {
    addEventListener();
  }, '500');
};
