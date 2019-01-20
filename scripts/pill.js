export class PillRenderer {
    render(allPills) {
        const sum = $.map( allPills, function(pill) {
            if(pill.name === "Pages")
                return ('<div class="pill">'+
                    '<div class="iconPlus location"></div>'+
                    pill.name +
                    '</div>'
                );
            else return ('<div class="pill">'+
                '<div class="iconPlus action"></div>'+
                pill.name +
                '</div>'
            );
        }).join(" ");
        return sum;
    }
}
