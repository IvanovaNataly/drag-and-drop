export class Pages {
    render() {
        return ('<li class="ui-widget-content pages-filter" data-title="Pages">'+
        '<h3 class="filter-name">Pages</h3>'+
        '<div class="filter-content">'+
            '<button class="is-toggle-btn">is</button>'+
            '<select class="location-select">'+
                '<option value="URL">Page URL</option>'+
                '<option value="Attribute">Page Attribute</option>'+
                '<option value="Pageset">Pageset</option>'+
                '<option value="Query string">Query string</option>'+
            '</select>'+
            '<select class="condition-type">'+
                '<option value="contains">contains</option>'+
                '<option value="equals">equals</option>'+
                '<option value="starts with">starts with</option>'+
                '<option value="ends with">ends with</option>'+
            '</select>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span>'+
        '</div></li>'
    )}
}

