class Renderer {
  constructor() {}

  render(data) {
    let source = $('#displayContainer-template').html();
    let template = Handlebars.compile(source);
    $('#displayContainer').empty();
    for (let result of data) {
      let newHTML = template(result);
      $('#displayContainer').append(newHTML);
    }
  }
}
