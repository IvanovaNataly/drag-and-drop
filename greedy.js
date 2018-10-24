$( function() {
    $( "#draggable" ).draggable();

    $( "#droppable, #droppable-inner" ).droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "> p" )
                .html( "Dropped!" );
            return false;
        }
    });

    $( "#droppable2, #droppable2-inner" ).droppable({
        greedy: true,
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
