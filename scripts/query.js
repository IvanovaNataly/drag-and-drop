export class QueryRenderer {
    renderContent(content) {
        const sum = $.map( content, function(element) {
            if(element === "not")
                return ('<span class="alert capitalized">' + element + '</span>');
            else return element;
        }).join(" ");
        return sum;
    }

    render(query) {
        let $query = ('<div class="query">'+
            '<h3 class="query-name">'+
            query.name +
            '<span class="iconFont pencil"></span>'+
            '</h3>'+
            '<p class="query-content">'+
            this.renderContent(query.content) +
            '</p>'+
            '</div>'
        );
        return $query;
    }
}

