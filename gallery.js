$( function() {
    //Constant set of filters
    var filters = '<li class="ui-widget-content title" data-title="Location">Location'+
            '<select class="location-select"><option value="url">Page URL</option>'+
            '<option value="url">Page Attribute</option>'+
            '<option value="url">Pageset</option></select></li>'+
        '<li class="ui-widget-content title" data-title="Behavior">Interaction and sequence'+
            '<input type="text" placeholder="Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Engagement time'+
            '<input type="text" placeholder="Type range" class="filter-input"></li>'+
        '<li class="ui-widget-content">Action'+
            '<input type="text" placeholder="Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Scroll reach'+
            '<input type="text" placeholder="Type range" class="filter-input"></li>'+
        '<li class="ui-widget-content">Time on page'+
            '<input type="text" placeholder="Type range" class="filter-input"></li>'+
        '<li class="ui-widget-content">Bounce rate'+
            '<input type="text" placeholder="Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Looping'+
            '<input type="text" placeholder="Type" class="filter-input"></li>'+
        '<li class="ui-widget-content">Between looping'+
            '<input type="text" placeholder="Type" class="filter-input"></li>'+
        '<li class="ui-widget-content">Visited pages'+
            '<input type="text" placeholder="Type or Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">First view of page'+
            '<input type="text" placeholder="Type or Search" class="filter-input"></li>'+
        '<li class="ui-widget-content title" data-title="Experience">Text on page'+
            '<input type="text" placeholder="Type" class="filter-input"></li>'+
        '<li class="ui-widget-content">Attribute'+
            '<input type="text" placeholder="Type or Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Clicks on page'+
            '<input type="text" placeholder="Type range" class="filter-input"></li>'+
        '<li class="ui-widget-content title" data-title="Visitor environment">Browser'+
            '<input type="text" placeholder="Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Screen resolution'+
            '<input type="text" placeholder="Type or Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Country'+
            '<input type="text" placeholder="Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Region'+
            '<input type="text" placeholder="Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Device'+
            '<input type="text" placeholder="Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Operating system'+
            '<input type="text" placeholder="Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">Fold height'+
            '<input type="text" placeholder="Type or Search" class="filter-input"></li>'+
        '<li class="ui-widget-content">View port height'+
            '<input type="text" placeholder="Type or Search" class="filter-input"></li>'+
        '<li class="ui-widget-content title" data-title="Web performance">Dom load time'+
            '<input type="text" placeholder="Type range" class="filter-input"></li>'+
        '<li class="ui-widget-content">JS errors count'+
            '<input type="text" placeholder="Type range" class="filter-input"></li>'+
        '<li class="ui-widget-content">JS errors'+
            '<input type="text" placeholder="Type or Search" class="filter-input"></li>'+
        '<li class="ui-widget-content title" data-title="Traffic Sources">Visit Referrer'+
            '<input type="text" placeholder="Type or Search" class="filter-input"></li>'+
        '<li class="ui-widget-content title" data-title="Visitor identification">Visitor ID'+
            '<input type="text" placeholder="Type" class="filter-input"></li>'+
        '<li class="ui-widget-content">Pageview ID'+
            '<input type="text" placeholder="Type" class="filter-input"></li>'+
        '<li class="ui-widget-content">Visit ID'+
            '<input type="text" placeholder="Type" class="filter-input"></li>';

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
            target.draggable("destroy");
        }
    });

    // Let the gallery be droppable as well, accepting items from the trash
    // $gallery.droppable({
    //     accept: "#droppable-global li",
    //     classes: {
    //         "ui-droppable-active": "custom-state-active"
    //     },
    //     drop: function( event, ui ) {
    //         // recycleImage( ui.draggable );
    //     }
    // });

    // Image deletion function
    // var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    // function deleteImage( $item ) {
    //     $item.fadeOut(function() {
    //         var $list = $( "ul", $trash ).length ?
    //             $( "ul", $trash ) :
    //             $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );
    //
    //         $item.find( "a.ui-icon-trash" ).remove();
    //         $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
    //             $item
    //                 .animate({ width: "48px" })
    //                 .find( "img" )
    //                 .animate({ height: "36px" });
    //         });
    //     });
    // }

    // Image recycle function
    // var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
    // function recycleImage( $item ) {
    //     $item.fadeOut(function() {
    //         $item
    //             .find( "a.ui-icon-refresh" )
    //             .remove()
    //             .end()
    //             .css( "width", "96px")
    //             .append( trash_icon )
    //             .find( "img" )
    //             .css( "height", "72px" )
    //             .end()
    //             .appendTo( $gallery )
    //             .fadeIn();
    //     });
    // }



} );