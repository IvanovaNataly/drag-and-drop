$( function() {

    // There's the gallery and the trash
    var $gallery = $( "#gallery" ),
        $trash = $( "#droppable-global" );

    function addElements()
    {
        $gallery.empty().append(
            "<li id='item1' class='list1Items'>Item 1</li>"+
            "<li id='item2' class='list1Items'>Item 2</li>"+
            "<li id='item3' class='list1Items'>Item 3</li>"
        );
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
    $( "#droppable-visit" ).droppable({
        greedy: true,
        accept: "#gallery > li",
        classes: {
            "ui-droppable-active": "ui-state-highlight"
        },
        drop: function( event, ui ) {
            // deleteImage( ui.draggable );
            $("#droppable-visit").append(ui.draggable);
            addElements();
            $( "li", $gallery ).draggable({
                cancel: "button", // these elements won't initiate dragging
                revert: "invalid", // when not dropped, the item will revert back to its initial position
                containment: "document",
                helper: "clone",
                cursor: "move"
            })
        }
    });

    // Let the gallery be droppable as well, accepting items from the trash
    $gallery.droppable({
        accept: "#droppable-global li",
        classes: {
            "ui-droppable-active": "custom-state-active"
        },
        drop: function( event, ui ) {
            // recycleImage( ui.draggable );
        }
    });

    // Image deletion function
    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage( $item ) {
        $item.fadeOut(function() {
            var $list = $( "ul", $trash ).length ?
                $( "ul", $trash ) :
                $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );

            $item.find( "a.ui-icon-trash" ).remove();
            $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
                $item
                    .animate({ width: "48px" })
                    .find( "img" )
                    .animate({ height: "36px" });
            });
        });
    }

    // Image recycle function
    var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
    function recycleImage( $item ) {
        $item.fadeOut(function() {
            $item
                .find( "a.ui-icon-refresh" )
                .remove()
                .end()
                .css( "width", "96px")
                .append( trash_icon )
                .find( "img" )
                .css( "height", "72px" )
                .end()
                .appendTo( $gallery )
                .fadeIn();
        });
    }



} );