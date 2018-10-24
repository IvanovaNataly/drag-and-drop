$( function() {

    // There's the gallery and the trash
    var $gallery = $( "#gallery" );

    // Let the gallery items be draggable
    $( "li", $gallery ).draggable({
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        helper: "clone",
        cursor: "move"
    });

    $( "#draggable" ).draggable();

    $( "#droppable-global, #droppable-visit, #droppable-pageview, #droppable-location" ).droppable({
        // greedy: true,
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "> p" )
                .html( "Dropped!" );
        }
    });
} );
