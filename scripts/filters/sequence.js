export class Sequence {
    constructor() {
        this.sequenceFilter = ('<li class="ui-widget-content sequence-filter" data-title="Sequence">'+
                            '<h3 class="filter-name">Sequence</h3>' +
                            '<div class="filter-content">' +
                                '<button class="is-toggle-btn">is</button>' +
                                '<select class="condition-type sequence-select">' +
                                    '<option value="Clicktale event" selected>Clictale event</option>' +
                                    '<option value="Element (retroactive event)">Element (retroactive event)</option>' +
                                    '<option value="Text on page">Text on page</option>' +
                                    '<option value="JS errors">JS errors</option>' +
                                '</select>'+
                                '<div class="sequence-event">'+
                                    '<select class="condition-type static">'+
                                        '<option value="one of the following">one of the following</option>'+
                                    '</select>'+
                                    '<input type="text" placeholder="Type" class="filter-input">'+
                                '</div>'+
                                '<div class="sequence-element hidden">'+
                                    '<select class="condition-type">'+
                                        '<option value="click">click</option>'+
                                        '<option value="hover">hover</option>'+
                                        '<option value="tap">tap</option>'+
                                    '</select>'+
                                    '<input type="text" placeholder="add Xpath" class="filter-input">'+
                                '</div>'+
                                '<div class="sequence-text hidden">'+
                                    '<input type="text" placeholder="Type" class="filter-input">'+
                                '</div>'+
                                '<span class="iconFont trash"></span>'+
                            '</div>'+
							'<button class="and-then-btn ct-btn-linked">'+
								'<span class="iconFont plus"></span>'+
								'add step</button>' +
							'</li>');
    }

    changeFilterContent(select) {
    	const that = this;
        const $filterWrapper = $(select).closest(".sequence-filter .filter-content");
        if (select.value === "Clicktale event") {
            $filterWrapper.find(".sequence-event").removeClass("hidden");
            $filterWrapper.find(".sequence-element").addClass("hidden");
            $filterWrapper.find(".sequence-text").addClass("hidden");
        }
        else if (select.value === "Element (retroactive event)"){
            $filterWrapper.find(".sequence-event").addClass("hidden");
            $filterWrapper.find(".sequence-element").removeClass("hidden");
            $filterWrapper.find(".sequence-text").addClass("hidden");
        }
        else {
            $filterWrapper.find(".sequence-event").addClass("hidden");
            $filterWrapper.find(".sequence-element").addClass("hidden");
            $filterWrapper.find(".sequence-text").removeClass("hidden");
        }
		$('.sequence-select').off("change", function() {
			that.changeFilterContent( this );
		});
		$('.sequence-select').on("change", function() {
			that.changeFilterContent( this );
		});
    }

    onAddLine(event) {
		const that = this;
    	const $target = $(event.target);
    	const $newLine = $(
			'<select class="condition">'+
			'<option value="and">and then</option>'+
				'<option value="and">and</option>'+
				'<option value="or">or</option>'+
			'</select>'+
			'<div class="filter-content">' +
				'<button class="is-toggle-btn">is</button>' +
				'<select class="condition-type sequence-select">' +
					'<option value="Clicktale event" selected>Clictale event</option>' +
					'<option value="Element (retroactive event)">Element (retroactive event)</option>' +
					'<option value="Text on page">Text on page</option>' +
					'<option value="JS errors">JS errors</option>' +
				'</select>'+
				'<div class="sequence-event">'+
					'<select class="condition-type static">'+
						'<option value="one of the following">one of the following</option>'+
					'</select>'+
					'<input type="text" placeholder="Type" class="filter-input">'+
				'</div>'+
				'<div class="sequence-element hidden">'+
					'<select class="condition-type">'+
						'<option value="click">click</option>'+
						'<option value="hover">hover</option>'+
						'<option value="tap">tap</option>'+
					'</select>'+
					'<input type="text" placeholder="add Xpath" class="filter-input">'+
				'</div>'+
				'<div class="sequence-text hidden">'+
					'<input type="text" placeholder="Type" class="filter-input">'+
				'</div>'+
				'<span class="iconFont trash"></span>'+
			'</div>'
		);
    	$target.before($newLine);
		$('.sequence-select').off("change", function() {
			that.changeFilterContent( this );
		});
		$('.sequence-select').on("change", function() {
			that.changeFilterContent( this );
		});
	}

    render() {
		return this.sequenceFilter;
    }
}

