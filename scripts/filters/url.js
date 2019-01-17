export class Url {
    render(name) {
        return ('<li class="ui-widget-content">'+
            '<h3 class="filter-name">' + name + '</h3>'+
            '<div class="filter-content">'+
                '<div class="is-toggle-btn">is</div>'+
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

