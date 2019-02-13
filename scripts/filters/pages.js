export class Pages {
    constructor() {
        this.filterWrapper = ('<li class="ui-widget-content pages-filter" data-title="Pages">'+
                                '<h3 class="filter-name">Pages</h3>'+
                                '<div class="filter-content">'+
                                    '<button class="is-toggle-btn">is</button>'+
                                    '<select class="location-select">'+
                                        '<option value="URL">Page URL</option>'+
                                        '<option value="Attribute">Page Attribute</option>'+
                                        '<option value="Pageset">Pageset</option>'+
                                        '<option value="Query string">Query string</option>'+
                                    '</select>'+
                                    '<div class="pages-filter-default">'+
                                        '<select class="condition-type">'+
                                            '<option value="contains">contains</option>'+
                                            '<option value="equals">equals</option>'+
                                            '<option value="starts with">starts with</option>'+
                                            '<option value="ends with">ends with</option>'+
                                        '</select>'+
                                        '<input type="text" placeholder="Type" class="filter-input">'+
                                    '</div>'+
                                    '<div class="pages-filter-attribute hidden">'+
                                        '<select class="condition-type static">'+
                                            '<option value="one of the following">one of the following</option>'+
                                        '</select>'+
                                        '<input type="text" placeholder="Search" class="filter-input">'+
                                    '</div>'+
                                    '<span class="iconFont trash"></span>'+
                                '</div></li>');
    }

    changeFilterContent(select) {
        const that = this;
        const $filterWrapper = $(select).closest(".pages-filter");
        if (select.value === "Attribute") {
            $filterWrapper.find(".pages-filter-default").addClass("hidden");
            $filterWrapper.find(".pages-filter-attribute").removeClass("hidden");
        }
        else {
            $filterWrapper.find(".pages-filter-default").removeClass("hidden");
            $filterWrapper.find(".pages-filter-attribute").addClass("hidden");
        }
        $('.location-select').off("change", function() {
            that.changeFilterContent( this );
        });
        $('.location-select').on("change", function() {
            that.changeFilterContent( this );
        });
    }

    render() {
        return this.filterWrapper;
    }
}

