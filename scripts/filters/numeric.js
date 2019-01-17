export class Numeric {
    render(name, unit, maxValue, groupTitlte) {
        return ('<li class="ui-widget-content numeric-filter" '+ groupTitlte +'>'+
            '<h3 class="filter-name">' + name + '</h3>' +
            '<div class="filter-content">' +
                '<div class="is-toggle-btn">is</div>' +
                '<input type="text" value="from" class="not-editable-input" readonly>'+
                '<input type="text" placeholder="0" class="filter-input">'+
                '<input type="text" value=" ' + unit + ' " class="not-editable-input" readonly>'+
                '<div class="numeric-filter-line"></div>'+
                '<input type="text" value="to" class="not-editable-input" readonly>'+
                '<input type="text" value="from" class="not-editable-input" readonly>'+
                '<input type="text" placeholder=" ' + maxValue + ' " class="filter-input">'+
                '<input type="text" value=" ' + unit + ' " class="not-editable-input" readonly>'+
                '<span class="iconFont trash"></span>'+
            '</div></li>')
    }
}

