export class Query {
    constructor(name) {
        this.query = ('<div class="query">'+
            '<h3 class="query-name">'+
            name +
            '<span class="iconFont pencil"></span>'+
            '</h3>'+
            '<p class="query-content">'+
                'Clicktale event is one of the following: solitions from top Nav.'+
            '</p>'+
        '</div>'
        );
    }

    // changeFilterContent(select) {
    //     const $filterWrapper = $(select).closest(".js-errors-filter");
    //     if (select.value !== "text") {
    //         $filterWrapper.find(".js-errors-text").addClass("hidden");
    //         $filterWrapper.find(".js-errors-count").removeClass("hidden");
    //     }
    //     else {
    //         $filterWrapper.find(".js-errors-text").removeClass("hidden");
    //         $filterWrapper.find(".js-errors-count").addClass("hidden");
    //     }
    // }

    render() {
        return this.query;
    }
}

