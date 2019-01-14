$( function() {
    //Constant set of filters
    var filters = '<li class="ui-widget-content title" data-title="Location">Location'+
            '<select class="location-select"><option value="url">Page URL</option>'+
                '<option value="url">Page Attribute</option>'+
                '<option value="url">Pageset</option></select>'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Behavior">Interaction and sequence'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Engagement time'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Action'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Scroll reach'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Time on page'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Bounce rate'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Looping'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Between looping'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Visited pages'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">First view of page'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Experience">Text on page'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Attribute'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Clicks on page'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Visitor environment">Browser'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Screen resolution'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Country'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Region'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Device'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Operating system'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Fold height'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">View port height'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type or Search" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Web performance">Dom load time'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type range" class="filter-input">'+
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">JS errors count'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type range" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">JS errors'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type or Search" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Traffic Sources">Visit Referrer'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type or Search" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content title" data-title="Visitor identification">Visitor ID'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Pageview ID'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
            '<input type="text" placeholder="Type" class="filter-input">' +
            '<span class="iconFont trash"></span></li>'+
        '<li class="ui-widget-content">Visit ID'+
            '<select class="condition-type">'+
                '<option value="none"></option>'+
                '<option value="empty">-</option>'+
                '<option value="not">NOT</option></select>'+
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

    function addLevel(event) {
        var target = $(event.target);
        target.hide();
        target.closest(".search-area").find(".level-visit").removeClass("hidden");
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
            // $(".level-global:not(.initiated)").addClass("empty");
            // target.closest(".level-global").addClass("initiated");
            // target.closest(".level-global").removeClass("empty");
            target.removeClass("empty");
            target.find(".hidden").removeClass("hidden");
            target.find(".visit-empty").hide();
            target.draggable("destroy");
        }
    });

    $( ".trash", $gallery ).click( function(event) { deleteItem(event)});

    $( ".add-level").click( function(event) { addLevel(event)});
} );