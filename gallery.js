$( function() {
    //Constant set of filters
    var filters = '<li class="ui-widget-content">Location'+
            '<select class="location-select"><option value="url">Page URL</option>'+
                '<option value="url">Page Attribute</option>'+
                 '<option value="url">Pageset</option></select></li>'+
        '<li class="ui-widget-content title" data-title="Title">Event'+
        '<input type="text" placeholder="Type definition" class="filter-input"></li>'+
        '<li class="ui-widget-content">Engagement time</li>'+
        '<li class="ui-widget-content">Scroll reach</li>'+
        '<li class="ui-widget-content">Dom load time</li>'+
        '<li class="ui-widget-content">Bounce rate</li>'+
        '<li class="ui-widget-content">Text on page</li>'+
        '<li class="ui-widget-content">JS Errors</li>';

    // There's the gallery and the trash
    var $gallery = $( "#gallery" ),
        $trash = $( "#droppable-global, #droppable-visit, #droppable-pageview" );

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
            target.draggable( "destroy" );
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