import {Pages} from './filters/pages.js';
import {Url} from './filters/url.js';
import {JsErrors} from "./filters/jsErrors.js";
import {Numeric} from "./filters/numeric.js";
import {InputClick} from "./filters/inputs-clicks.js";
import {Category} from "./filters/category.js";
import {Sequence} from  "./filters/sequence.js";
import {TextValue} from "./filters/text-value.js";
import {BooleanValue} from "./filters/boolean-value.js";

$( function() {
    let pages = new Pages();
    let url = new Url();
    let jsErrors = new JsErrors();
    let numeric = new Numeric();
    let inputClick = new InputClick();
    let category = new Category();
    let sequence = new Sequence();
    let textValue = new TextValue();
    let booleanValue = new BooleanValue();

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
        let pagesFilter = pages.render();
        let visitedPages = url.render("Visited Pages");
        let visitReferrer = url.render("Visit referrer");
        let previousPage = url.render("Previous page", "data-title='Web performance' ");
        let nextPage = url.render("Next page");
        let jsErrorsFilter = jsErrors.render();
        let domLoadTime = numeric.render("Dom load time", "ms", "max", "data-title='Web performance' ");
        let timeOnPage = numeric.render("Time on page", "sec", "max");
        let scrollReach = numeric.render("Scroll reach", "%", "100");
        let engagementTime = numeric.render("Engagement time", "sec", "max", "data-title='Behavior' ");
        let inputClickFilter = inputClick.render();
        let windowSize = category.render("Browser window size");
        let resolution = category.render("Screen resolution");
        let country = category.render("Country and region");
        let browser = category.render("Browser and browser version", "data-title='Visitor enviroment' ");
        let attribute = category.render("Attribute");
        let pageviewId = category.render("Pageview ID", "data-title='Visitor identification' ");
        let visitorId = category.render("Visitor ID");
        let visitId = category.render("Visit ID");
        let operatingSystem = category.render("Operating System");
        let foldHeight = category.render("Fold height");
        let device = category.render("Device");
        let sequenceFilter = sequence.render();
        let textValueFilter = textValue.render();
        let looping = booleanValue.render("Looping", "looping", "between looping");
        let firstLastPage = booleanValue.render("First/Last page", "first page", "last page");
        let portrateLandscape = booleanValue.render("Portrate/Landscape", "portrate", "ladnscape");
        let filtersArr =  [pagesFilter,
            // behavior group
            engagementTime,
            sequenceFilter,
            scrollReach,
            timeOnPage,
            inputClickFilter,

            //experience group
            textValueFilter,
            attribute,

            //visitor enviroment
            browser,
            country,
            device,
            operatingSystem,
            windowSize,
            resolution,
            foldHeight,
            portrateLandscape,

            //web performance
            domLoadTime,
            jsErrorsFilter,

            //traffic flow
            previousPage,
            nextPage,
            visitReferrer,
            looping,
            visitedPages,
            firstLastPage,

            // visitor identification
            pageviewId,
            visitorId,
            visitId
            ];
        let filtersElements = filtersArr.reduce( function(total, filter){
            return total + filter;
        });
        $gallery.empty().append(filtersElements);
        $( ".is-toggle-btn").click( function(event) { isToogleText(event)});
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

    function isToogleText(event) {
        var $target = $(event.target);
        var currentText = $target.text();
        var newText = (currentText === "is" ? "not" : "is");
        console.log(currentText);
        $target.text(newText);
    }


    // Let the gallery items be draggable
    addElements();
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

    $('.js-errors-select').change(function() {
        jsErrors.changeFilterContent( this );
    });

    $('.sequence-select').change(function() {
        sequence.changeFilterContent( this );
    });
} );