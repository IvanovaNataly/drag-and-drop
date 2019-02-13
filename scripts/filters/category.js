export class Category {
    render(name, groupTitlte) {
        return ('<li class="ui-widget-content category-filter" '+ groupTitlte +'>'+
        '<h3 class="filter-name">' + name + '</h3>'+
        '<div class="filter-content">'+
            '<button class="is-toggle-btn">is</button>'+
            '<select class="condition-type static">'+
                '<option value="one of the following">one of the following</option>'+
            '</select>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span>'+
        '</div></li>'
    )}
}

