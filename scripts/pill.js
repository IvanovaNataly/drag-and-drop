export class PillRenderer {
    renderContent(allPills) {
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
        console.log(sum);
        return sum;
    }

    render(allPills) {
        return this.renderContent(allPills);
    }
}
