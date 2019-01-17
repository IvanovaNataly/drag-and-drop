export class InputClick {
    render() {
        return ('<li class="ui-widget-content numeric-filter">'+
            '<h3 class="filter-name">Input/Clicks on page</h3>' +
            '<div class="filter-content">' +
                '<div class="is-toggle-btn">is</div>' +
                '<select id="jsErrorsSelect" class="condition-type">' +
                    '<option value="click" selected>click</option>' +
                    '<option value="keystoke">keystoke</option>' +
                    '<option value="tap">tap</option>' +
                '</select>'+
                '<input type="text" value="from" class="not-editable-input" readonly>'+
                '<input type="text" placeholder="0" class="filter-input">'+
                '<input type="text" value="sec" class="not-editable-input" readonly>'+
                '<div class="numeric-filter-line"></div>'+
                '<input type="text" value="to" class="not-editable-input" readonly>'+
                '<input type="text" value="from" class="not-editable-input" readonly>'+
                '<input type="text" placeholder="max" class="filter-input">'+
                '<input type="text" value="sec" class="not-editable-input" readonly>'+
                '<span class="iconFont trash"></span>'+
            '</div></li>')
    }
}

