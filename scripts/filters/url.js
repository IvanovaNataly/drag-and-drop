export class Url {
    render(name, groupTitlte) {
        return ('<li class="ui-widget-content url-filter" '+ groupTitlte +'>'+
            '<h3 class="filter-name">' + name + '</h3>'+
            '<div class="filter-content">'+
                '<button class="is-toggle-btn">is</button>'+
                '<select class="condition-type">'+
                    '<option value="equals">equals</option>'+
                    '<option value="contains">contains</option>'+
                    '<option value="is NOT">is NOT</option>'+
                    '<option value="does not contain">does not contain</option>'+
                '</select>'+
                '<input type="text" placeholder="Type" class="filter-input">'+
                '<span class="iconFont trash"></span>'+
            '</div></li>'
    )}
}

