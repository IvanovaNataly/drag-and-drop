export class BooleanValue {
    render(name, firstValue, secondValue) {
        return ('<li class="ui-widget-content boolean-filter">'+
        '<h3 class="filter-name">' + name + '</h3>'+
        '<div class="filter-content">'+
            '<button class="is-toggle-btn">is</button>'+
            '<select class="condition-type">'+
                '<option value=" ' + firstValue + ' ">' + firstValue + '</option>'+
                '<option value=" ' + secondValue + ' ">' + secondValue + '</option>'+
            '</select>'+
            '<span class="iconFont trash"></span>'+
        '</div></li>'
    )}
}

