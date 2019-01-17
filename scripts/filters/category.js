export class Category {
    render(name, groupTitlte) {
        return ('<li class="ui-widget-content category-filter" '+ groupTitlte +'>'+
        '<h3 class="filter-name">' + name + '</h3>'+
        '<div class="filter-content">'+
            '<div class="is-toggle-btn">is</div>'+
            '<select class="condition-type">'+
                '<option value="is one of">is one of</option>'+
            '</select>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span>'+
        '</div></li>'
    )}
}

