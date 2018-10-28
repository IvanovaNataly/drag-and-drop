$( function() {
    //Constant set of filters
    var filters = '<li class="ui-widget-content title" data-title="Location">Location'+
            '<select class="location-select"><option value="url">Page URL</option>'+
            '<option value="url">Page Attribute</option>'+
            '<option value="url">Pageset</option></select>'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Behavior">Interaction and sequence'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Engagement time'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Action'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Scroll reach'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Time on page'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Bounce rate'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Looping'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Between looping'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Visited pages'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">First view of page'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Experience">Text on page'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Attribute'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Clicks on page'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Visitor environment">Browser'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Screen resolution'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Country'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Region'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Device'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Operating system'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Fold height'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">View port height'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Web performance">Dom load time'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">JS errors count'+
            '<input type="text" placeholder="Type range" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">JS errors'+
            '<input type="text" placeholder="Type or Search" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Traffic Sources">Visit Referrer'+
            '<input type="text" placeholder="Type or Search" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Visitor identification">Visitor ID'+
            '<input type="text" placeholder="Type" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Pageview ID'+
            '<input type="text" placeholder="Type" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Visit ID'+
            '<input type="text" placeholder="Type" class="filter-input">' +
        '<span class="iconFont trash"></span></li>';

    //Condition type dropdown
    var conditionType = '<select class="condition-type">'+
                        '<option value="and">and</option>'+
                        '<option value="or">or</option>'+
                        '</select>';

    // There's the gallery and the trash
    var $gallery = $( "#gallery" ),
        $trash = $( ".level-global, .level-visitor, .level-pageview" );

    function addElements() {
        $gallery.empty().append(filters);
    }

    function deleteItem(event) {
        var target = $(event.target);
        checkState(target);
        target.closest(".ui-widget-content").remove();
    }

    function checkState(target) {
        var $global =   target.closest(".level-global");
        var $pageview =  target.closest(".level-pageview");
        target.closest(".ui-widget-content").prev(".condition-type").remove();
        if ($global.find(".ui-widget-content").length === 1) {
            $global.removeClass("initiated").addClass("empty");
        };
        if ($pageview.find(".ui-widget-content").length === 1) {
            $pageview.addClass("empty");
        }
    }

    // Let the gallery items be draggable
    $( "li", $gallery ).draggable({
        cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        helper: "clone",
        cursor: "move"
    });

    // Let the trash be droppable, accepting the gallery items
    $trash.droppable({
        greedy: true,
        accept: "#gallery > li",
        classes: {
            "ui-droppable-active": "ui-state-highlight"
        },
        drop: function( event, ui ) {
            var target = $(event.target);
            target.append(ui.draggable);
            $(".ui-state-highlight").removeClass("ui-state-highlight");
            $(".ui-state-active").removeClass("ui-state-active");
            addElements();
            $( ".trash", $gallery ).click( function(event) { deleteItem(event)});
            $( "li", $gallery ).draggable({
                cancel: "button", // these elements won't initiate dragging
                revert: "invalid", // when not dropped, the item will revert back to its initial position
                containment: "document",
                helper: "clone",
                cursor: "move"
            });
            target.append(conditionType);
            $(".level-global:not(.initiated)").addClass("empty");
            target.closest(".level-global").addClass("initiated");
            target.closest(".level-global").removeClass("empty");
            target.removeClass("empty");
            target.draggable("destroy");
        }
    });

    $( ".trash", $gallery ).click( function(event) { deleteItem(event)});
} );