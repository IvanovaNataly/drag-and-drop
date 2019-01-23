export class TextValue {
    render() {
        return ('<li class="ui-widget-content text-filter" data-title="Experience">'+
        '<h3 class="filter-name">Text</h3>'+
        '<div class="filter-content">'+
            '<button class="is-toggle-btn">is</button>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span>'+
        '</div>'+
        '<p class="filter-note">Please note: This metric is based on rich data and have partial data for your current selected date range</p>'+
        '</li>'
    )}
}

