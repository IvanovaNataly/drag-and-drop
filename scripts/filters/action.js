export class Action {
    constructor() {
        this.actionFilter = ('<li class="ui-widget-content action-filter" data-title="Behavior">'+
                                '<h3 class="filter-name">Action</h3>' +
                                '<span class="iconFont question" data-tooltip="Second Line"></span>'+
                                '<div class="filter-content">' +
                                    '<button class="is-toggle-btn">is</button>' +
                                    '<select class="condition-type static">'+
                                        '<option value="one of the following">one of the following</option>'+
                                    '</select>'+
                                    '<input type="text" placeholder="Type" class="filter-input">'+
                                    '<span class="iconFont trash"></span>'+
                                '</div>'+
                            '</li>');
        this.elementFilter = ('<li class="ui-widget-content action-filter">'+
                                    '<h3 class="filter-name">Element (retroactive event)</h3>' +
                                    '<div class="filter-content">' +
                                        '<button class="is-toggle-btn">is</button>' +
                                        '<select class="condition-type">'+
                                            '<option value="click">click</option>'+
                                            '<option value="hover">hover</option>'+
                                            '<option value="tap">tap</option>'+
                                        '</select>'+
                                        '<input type="text" placeholder="add Xpath" class="filter-input">'+
                                        '<span class="iconFont trash"></span>'+
                                    '</div>'+
                                '</li>');
    }

    render(name) {
        if (name === "Action") {
            return this.actionFilter;
        }
        else {
            return this.elementFilter;
        }
    }
}


