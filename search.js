// const fPages = '<li class="ui-widget-content title" data-title="Location">'+
//     '<span class="filter-name">Pages</span>'+
//     '<select class="location-select">'+
//     '<option value="URL">Page URL</option>'+
//     '<option value="Attribute">Page Attribute</option>'+
//     '<option value="Pageset">Pageset</option>'+
//     '<option value="Query string">Query string</option>'+
//     '</select>'+
//     '<select class="condition-type">'+
//     '<option value="equals">equals</option>'+
//     '<option value="contains">contains</option>'+
//     '<option value="starts with">starts with</option>'+
//     '<option value="ends with">ends with</option>'+
//     '<option value="is NOT">is NOT</option>'+
//     '<option value="does not contain">does not contain</option>'+
//     '<option value="does not starts with">does not starts with</option>'+
//     '<option value="does not ends with">does not ends with</option>'+
//     '</select>'+
//     '<input type="text" placeholder="Type" class="filter-input">'+
//     '<span class="iconFont trash"></span></li>';
import { Pages } from './pages.js';

$( function() {
    //Constant set of filters
    var filters = '<li class="ui-widget-content title" data-title="Location">'+
        '<span class="filter-name">Pages</span>'+
            '<select class="location-select">'+
                '<option value="URL">Page URL</option>'+
                '<option value="Attribute">Page Attribute</option>'+
                '<option value="Pageset">Pageset</option>'+
                '<option value="Query string">Query string</option>'+
            '</select>'+
            '<select class="condition-type">'+
                '<option value="equals">equals</option>'+
                '<option value="contains">contains</option>'+
                '<option value="starts with">starts with</option>'+
                '<option value="ends with">ends with</option>'+
                '<option value="is NOT">is NOT</option>'+
                '<option value="does not contain">does not contain</option>'+
                '<option value="does not starts with">does not starts with</option>'+
                '<option value="does not ends with">does not ends with</option>'+
            '</select>'+
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
    var $newGroupContainer = $('<div class="group-container">'+
                            '<div class="condition-type-wrapper">'+
                            '<select class="condition-type">'+
                            '<option value="and">and</option>'+
                            '<option value="andNot">and NOT</option>'+
                            '<option value="or">or</option>'+
                            '<option value="orNot">or NOT</option>'+
                            '</select>'+
                            '</div>'+
                            '</div>');

    //Droppable area
    function createDroppable() {
        var $droppableArea = $('<div class="level-empty">' +
            '<span class="level-empty-label">Drag here to add a filter</span>' +
            '</div>');
        $droppableArea.droppable({
            greedy: true,
            accept: "#gallery > li",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function( event, ui ) {
                var $target = $(event.target);
                var $levelDroppable = $target.closest(".level-droppable");
                $target.append(ui.draggable);
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
                var da = createDroppable();
                $target.after(da);
                $target.closest(".empty").removeClass("empty");
                $target.find(".level-empty-label").hide();
                $target.droppable("destroy");
                ui.draggable.draggable("destroy");
            }
        });
        return $droppableArea;
    }

    // There's the gallery and the trash
    var $gallery = $( "#gallery" ),
        $trash = $(".level-empty");

    function addElements() {
        // $gallery.empty().append(filters);
        let pages = new Pages();
        $gallery.empty().append(pages.renderPages());
    }

    function deleteItem(event) {
        var $target = $(event.target);
        var $levelDroppable = $target.closest(".level-droppable");

        $target.closest(".level-empty").remove();
        if($levelDroppable.find(".level-empty") < 2) {
            $levelDroppable.addClass("empty");
        }
        if($levelDroppable.hasClass("level-visit")) {
            $levelDroppable.addClass("hidden");
            $(".add-level").show();
        }
    }

    function addLevel(event) {
        var $target = $(event.target);
        $target.hide();
        $target.closest(".search-area").find(".level-visit").removeClass("hidden empty");
    }

    function addGroup(event) {
        var $target = $(event.target);
        var $targetClosest = $target.closest(".level-pageview");
        var $newGroup = $newGroupContainer.clone();
        var $droppableArea = createDroppable();
        $newGroup.append($droppableArea);
        $targetClosest.append($newGroup);
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
            var $target = $(event.target);
            var $levelDroppable = $target.closest(".level-droppable");
            $target.append(ui.draggable);
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
            var da = createDroppable();
            $target.after(da);
            $target.closest(".empty").removeClass("empty");
            $target.find(".level-empty-label").hide();
            $target.droppable("destroy");
            ui.draggable.draggable("destroy");
        }
    });

    $( ".trash", $gallery ).click( function(event) { deleteItem(event)});

    $( "#addVisit").click( function(event) { addLevel(event)});

    $( "#addGroup").click( function(event) { addGroup(event)});
} );