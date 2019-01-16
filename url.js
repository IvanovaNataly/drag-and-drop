export class Url {
    renderUrl(name) {
        return ('<li class="ui-widget-content title">'+
        '<span class="filter-name">' + name + '</span>'+
        '<select class="condition-type">'+
            '<option value="equals">equals</option>'+
            '<option value="contains">contains</option>'+
            '<option value="is NOT">is NOT</option>'+
            '<option value="does not contain">does not contain</option>'+
        '</select>'+
        '<input type="text" placeholder="Type" class="filter-input">'+
        '<span class="iconFont trash"></span></li>'
    )}
}

