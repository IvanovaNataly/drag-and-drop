export class JsErrors {
    constructor() {
        this.filterWrapper = ('<li class="ui-widget-content js-errors-filter">'+
                            '<h3 class="filter-name">JS errors</h3>' +
                            '<div class="filter-content">' +
                                '<div class="is-toggle-btn">is</div>' +
                                '<select class="condition-type js-errors-select">' +
                                    '<option value="text" selected>JS errors text</option>' +
                                    '<option value="count">JS errors count</option>' +
                                '</select>'+
                                '<div class="js-errors-text">'+
                                    '<input type="text" placeholder="Search" class="filter-input">'+
                                '</div>'+
                                '<div class="js-errors-count hidden">'+
                                    '<input type="text" value="from" class="not-editable-input" readonly>'+
                                    '<input type="text" placeholder="0" class="filter-input">'+
                                    '<div class="numeric-filter-line"></div>'+
                                    '<input type="text" value="to" class="not-editable-input" readonly>'+
                                    '<input type="text" placeholder="999" class="filter-input">'+
                                '</div>'+
                                '<span class="iconFont trash"></span>'+
                            '</div></li>');
    }

    changeFilterContent(select) {
        const $filterWrapper = $(select).closest(".js-errors-filter");
        if (select.value !== "text") {
            $filterWrapper.find(".js-errors-text").addClass("hidden");
            $filterWrapper.find(".js-errors-count").removeClass("hidden");
        }
        else {
            $filterWrapper.find(".js-errors-text").removeClass("hidden");
            $filterWrapper.find(".js-errors-count").addClass("hidden");
        }
    }

    render() {
        return this.filterWrapper;
    }
}

