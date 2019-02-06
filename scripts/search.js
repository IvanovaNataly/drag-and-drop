import {Pages} from './filters/pages.js';
import {Url} from './filters/url.js';
import {JsErrors} from "./filters/jsErrors.js";
import {Numeric} from "./filters/numeric.js";
import {InputClick} from "./filters/inputs-clicks.js";
import {Category} from "./filters/category.js";
import {Sequence} from "./filters/sequence.js";
import {TextValue} from "./filters/text-value.js";
import {BooleanValue} from "./filters/boolean-value.js";
import {SearchData} from "./search-data.js";

$( function() {
    const pages = new Pages();
    const url = new Url();
    const jsErrors = new JsErrors();
    const numeric = new Numeric();
    const inputClick = new InputClick();
    const category = new Category();
    const sequence = new Sequence();
    const textValue = new TextValue();
    const booleanValue = new BooleanValue();
    const searchData = new SearchData();
    const $gallery = $( "#gallery" );
    const $trash = $(".level-empty");

    //Group template
    const $newGroupContainer = $('<div class="level-group level-droppable">'+
                            '<div class="level-group-top">'+
                            '<select class="condition condition-include">'+
                            '<option value="include">Include</option>'+
                            '<option value="exclude">Exclude</option>'+
                            '</select>'+
                            '<button class="iconFont closeX close-group"></button>'+
                            '</div>'+
                            '</div>');

    //And/or select
    const $conditionType = $(
        '<select class="condition">'+
        '<option value="and">and</option>'+
        '<option value="or">or</option>'+
        '</select>'
    );

    //Droppable area
    function createDroppable() {
        const $droppableArea = $('<div class="level-empty">' +
            '<span class="level-empty-label">Drag here to add a filter</span>' +
            '</div>');
        $droppableArea.droppable({
            greedy: true,
            accept: "#gallery > li",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function( event, ui ) {
                onDrop(event, ui)
            }
        });
        return $droppableArea;
    }

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
        let engagementTime = numeric.render("Engagement time", "sec", "max");
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
        let actionFilter = sequence.render("Action", "data-title='Behavior' ");
        let sequenceFilter = sequence.render("Interaction / Sequence");
        let textValueFilter = textValue.render();
        let looping = booleanValue.render("Looping", "looping", "between looping");
        let firstLastPage = booleanValue.render("First/Last page", "first page", "last page");
        let portrateLandscape = booleanValue.render("Portrate/Landscape", "portrate", "ladnscape");
        let filtersArr =  [pagesFilter,
            // behavior group
            actionFilter,
            sequenceFilter,
            engagementTime,
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

        $('.js-errors-select').off("change", function() {
            jsErrors.changeFilterContent( this );
        });

        $('.sequence-select').off("change", function() {
            sequence.changeFilterContent( this );
        });

        $('.location-select').off("change", function() {
            pages.changeFilterContent( this );
        });

        $('.js-errors-select').on("change", function() {
            jsErrors.changeFilterContent( this );
        });

        $('.sequence-select').on("change", function() {
            sequence.changeFilterContent( this );
        });

        $('.location-select').on("change", function() {
            pages.changeFilterContent( this );
        });
    }

    function deleteItem(event) {
        const $target = $(event.target);
        const $levelEmpty = $target.closest(".level-empty");
        const $levelDroppable = $target.closest(".level-droppable");
        $levelEmpty.prev(".condition").remove();
        $levelEmpty.remove();
        if($levelDroppable.find(".level-empty").length <= 1) {
            if(!$levelDroppable.hasClass("level-group")) $levelDroppable.addClass("empty");
            if($levelDroppable.hasClass("level-visit")) {
                $levelDroppable.addClass("hidden");
                $levelDroppable.closest(".multilevel").find(".level-pageview").removeClass("inside-visit-level");
                $levelDroppable.closest(".multilevel").removeClass("multilevel");
                $(".add-level").show();
            }
            else {
                $("#searchBtn").prop("disabled", true);
            }
        }
    }

    function addLevel(event) {
        const $target = $(event.target);
        const $searchArea = $target.closest(".search-area");
        $target.hide();
        $searchArea.addClass("multilevel");
        $searchArea.find(".level-visit").removeClass("hidden empty");
        $searchArea.closest(".search-area").find(".level-pageview").addClass("inside-visit-level");
    }

    function hideVisitLevel(event) {
        $(".search-area").removeClass("multilevel");
        $(".level-visit").addClass("hidden empty");
        $(".level-visit").find(".condition").remove();
        $(".level-visit").find(".level-empty:not(.ui-droppable)").remove();
        $(".level-pageview").removeClass("inside-visit-level");
        $("#addVisit").show();
    }

    function addGroup(event) {
        const $pageview = $(".level-pageview");
        const $newConditionType = $conditionType.clone();
        const $newGroup = $newGroupContainer.clone();
        const $droppableArea = createDroppable();
        $newGroup.append($droppableArea);
        $pageview.append($newConditionType);
        $pageview.append($newGroup);
        $(".close-group").off("click", removeGroup);
        $(".close-group").on("click", removeGroup);
    }

    function removeGroup(event) {
        const $target = $(event.target);
        const $group = $target.closest(".level-group");
        $group.prev(".condition").remove();
        $group.remove();
    }

    function isToogleText(event) {
        let $target = $(event.target);
        if($target.text() === "is") {
            $target.text("not");
            $target.addClass("alert");
        }
        else {
            $target.text("is");
            $target.removeClass("alert");
        }
    }

    function onChangeCondition(event) {
        const currentSelect = event.currentTarget;
        const $levelDroppable = $(currentSelect).closest(".level-droppable");
        const $conditionSelects = $levelDroppable.find(".condition:not(.condition-include)");
        for (let $select of $conditionSelects) {
            $select.value = currentSelect.value;
        }
    }

    function setSelectCondition($target, $select) {
        const $exampleSelect = $target.closest(".level-droppable").find(".condition:not(.condition-include)")[0];
        if($exampleSelect) { $select[0].value = $exampleSelect.value };
        $select.on("change", function(event) {
            onChangeCondition( event );
        });
        return $select;
    }

    function onDrop(event, ui) {
        const $target = $(event.target);
        const $draggable = ui.draggable;
        $target.append($draggable);
        $(".ui-state-highlight").removeClass("ui-state-highlight");
        $(".ui-state-active").removeClass("ui-state-active");
        addElements();
        $( ".trash", $gallery ).click( function(event) { deleteItem(event)});
        $( "li", $gallery ).draggable({
            cancel: "button", // these elements won't initiate dragging
            revert: "invalid", // when not dropped, the item will revert back to its initial position
            containment: "document",
            helper: "clone",
            cursor: "move",
            cursorAt: { top: -5, left: -5 }
        });

        const da = createDroppable();
        $target.after(da);

        if($target.closest(".level-droppable").find(".level-empty").length > 2) {
            let ct = $conditionType.clone();
            ct = setSelectCondition($target, ct);
            $target.before(ct);
        }

        $target.closest(".empty").removeClass("empty");
        $target.find(".level-empty-label").hide();
        $target.droppable("destroy");
        $draggable.draggable("destroy");
        $("#searchBtn").prop("disabled", false);
        $(".is-toggle-btn").off("click", isToogleText);
        $(".is-toggle-btn").on("click", isToogleText);
    }

    //Append filters
    addElements();

    // Let the gallery items be draggable
    $( "li", $gallery ).draggable({
        cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        helper: "clone",
        cursor: "move",
        cursorAt: { top: -5, left: -5 }
    });

    // Let the trash be droppable, accepting the gallery items
    $trash.droppable({
        greedy: true,
        accept: "#gallery > li",
        classes: {
            "ui-droppable-active": "ui-state-highlight"
        },
        drop: function( event, ui ) {
            onDrop(event, ui)
        }
    });

    $(".trash", $gallery ).click( function(event) { deleteItem(event)});

    $("#addVisit").click( function(event) { addLevel(event)});

    $('#removeVisitLevel').click( function() { hideVisitLevel(event)});

    $("#addGroup").click( function(event) { addGroup(event)});

    $('.js-errors-select').on("change", function() {
        jsErrors.changeFilterContent( this );
    });

    $('.sequence-select').on("change", function() {
        sequence.changeFilterContent( this );
    });

	$('.and-then-btn').on("click", function(event) {
		sequence.onAddLine(event);
	});

    $('.location-select').on("change", function() {
        pages.changeFilterContent( this );
    });

    $('#searchBtn').click( function() { searchData.onSearch()});

    $('.results-card-body-btn').click( function(event) {
    	searchData.onCounryClicked(event);
	});

    $('#clearAll').click( function() {
        location.reload();
    });
} );