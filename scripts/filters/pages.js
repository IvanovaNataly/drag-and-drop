export class Pages {
    render() {
        return ('<li class="ui-widget-content title" data-title="Location">'+
        '<h3 class="filter-name">Pages</h3>'+
        '<div class="filter-content">'+
            '<div class="is-toggle-btn">is</div>'+
            '<select class="location-select">'+
            '<option value="URL">Page URL</option>'+
            '<option value="Attribute">Page Attribute</option>'+
            '<option value="Pageset">Pageset</option>'+
            '<option value="Query string">Query string</option>'+
            '</select>'+
            '<select class="condition-type">'+
            '<option value="equals">equals</option>'+
            '<option value="contains">contains</option>'+
            '<option value="starts with">starts with</option>'+
            '<option value="ends with">ends with</option>'+
            '<option value="is NOT">is NOT</option>'+
            '<option value="does not contain">does not contain</option>'+
            '<option value="does not starts with">does not starts with</option>'+
            '<option value="does not ends with">does not ends with</option>'+
            '</select>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span>'+
        '</div></li>'
    )}
}

