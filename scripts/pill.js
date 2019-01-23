export class PillRenderer {
    render(allPills) {
        const that = this;
        const sum = $.map( allPills, function(pill) {
            if(pill.hasOwnProperty("condition")) return;
            if(pill.name === "Pages")
                return ('<div class="pill">'+
                    '<div class="iconPlus location"></div>'+
                    pill.name +
                    '</div>'
                );
            else if(pill.name === "Group") {
                return ('<span class="pills-bar-group-indicator">[</span>'+
                            that.render(pill.content) +
                        '<span class="pills-bar-group-indicator">]</span>'
                );
            }
            else return ('<div class="pill">'+
                '<div class="icon-action"></div>'+
                pill.name +
                '</div>'
            );
        }).join(" ");
        return sum;
    }
}
