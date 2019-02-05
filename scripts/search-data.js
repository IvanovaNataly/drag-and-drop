import {QueryRenderer} from './query.js';
import {PillRenderer} from './pill.js';

export class SearchData {
    constructor() {
        this.data = {
            Visit: [],
            Pageview: []};
        this.key = "search";
        this.queryRenderer = new QueryRenderer();
        this.pillRenderer = new PillRenderer();
        this.lastScollTop = 0;
        this.addFilter = ('<div class="pill pill-to-add">'+
                            '<div class="pill-plus iconPlus plus-rounded"></div>'+
                            'Add Filter'+
                            '</div>'
                        );
    }

    postData(level) {
        const filterSelector = "." + level + " > .level-empty > .ui-widget-content, ." + level + " > .condition";
        const $filters = $("#main").find(filterSelector);
        return $.map($filters, this.postFilter);
    }

    postGroups() {
        const that = this;
        const $groups = $(".level-pageview").find(".level-group");
        return $.map($groups, function(group) {
            const $groupFilters = $(group).find(".ui-widget-content, .condition");
            return {
                name: "Group",
                content: $.map($groupFilters, that.postFilter)
            }}
        );
    }

    postFilter(filter) {
        if($(filter).hasClass("condition")) {
            return {
                condition: filter.value
            }
        }
        else {
            const name = $(filter).find(".filter-name").text();
            const inputs = $(filter).find("select, input, button");
            const sum = $.map( inputs, function(input) {
                if(input.tagName === 'BUTTON') {
                    return input.textContent ;
                }
                else {
                    return input.value;
                }
            });
            return {
                name: name,
                content: sum
            }
        }
    }

    getData(keySrting) {
        const dataString = localStorage.getItem(keySrting);
        return JSON.parse(dataString);
    }

    storeData(dataObject) {
        const dataSring = JSON.stringify(dataObject);
        localStorage.setItem(this.key, dataSring);
    }

    onSearch() {
        const dataObject = {
            Visit: this.postData("level-visit"),
            Pageview: this.postData("level-pageview").concat(this.postGroups())
        };
        this.storeData(dataObject);
        this.data = this.getData(this.key);
        // console.log(this.data);
        this.renderData();
        this.showResults();
    }

    renderData() {
        $(".query-area").empty();
        $(".pills-bar-container").empty();
        $(".search-area").hide();
        $(".btn-wrapper").hide();
        for (let key in this.data) {
            if (!this.data.hasOwnProperty(key) && this.data[key].length) continue;
            const level = this.data[key];
            if (level.length) {
                this.renderPill(level, key);
                this.renderLevel(level, key);
            }
        }
        $(".pills-bar-container").append(this.addFilter);
        $(".pill-to-add").on("click", this.openSearch);
    }

    renderQueries(queries) {
        var $query = "";
        for (let query of queries) {
            if (query.name === "Group") {
                $query += (
                    '<div class="query-group">'+
                    this.renderQueries(query.content)+
                    '</div>'
                )
            }
            else {
                $query += this.queryRenderer.render(query);
                if (query.name === "Text") {
                    this.onTextQueryRender();
                }
            }
        }
        return $query;
    }

    renderLevel(level, key) {
        const $level = $('<div class="query-area-'+ key.toLowerCase() +'">'+
            '<h2 class="query-area-title">'+ key +' level</h2>'+
            '<div class="query-area-queries">'+
            '<button class="iconFont pencil open-search"></button>'+
            '</div></div>'
        );
        const $queriesContainer = $level.find(".query-area-queries");
        const queries = this.renderQueries(level);
        $queriesContainer.append(queries);
        $(".query-area").append($level);
        $(".query-area").show();
        $(".open-search").off("click", this.openSearch);
        $(".open-search").on("click", this.openSearch);
    }

    renderPill(level, key) {
        const levelName = key.toLowerCase();
        const $pillLevel = $('<div class="pills-bar-level '+ levelName +'">'+
            levelName + ' level'+
            '</div>'
        );
        let $allPills = this.pillRenderer.render(level);
        $pillLevel.append($allPills);
        $(".pills-bar-container").append($pillLevel);
        $(".pill").off("click", this.openSearch);
        $(".pill").on("click", this.openSearch);
    }

    openSearch() {
        const that = this;
        const offset = $(".query-area").height() < 0 ? $(".query-area").height() : 0;
        $("#resultsSummary").addClass("results-pre-search");
        $('#main').off('scroll', function() {
            that.hidePillsBar();
        });
        $(".query-area").hide();
        $(".search-area").show();
        $(".btn-wrapper").show();
        $(".aside-container-header").show();
        $(".aside-container").show();
        $("#pillsBar").css("top", "0");
        $("#aside").css("flex-basis", "260px");
        $("#main").animate({
            scrollTop: offset
        }, 200);
    }

    showResults() {
        const that = this;
        const offset = $(".query-area").height();
        $("#resultsSummary").removeClass("results-pre-search");
        $("#pillsBar").css("top", "50px");
        $("#aside").css("flex-basis", "50px");
        $("#main").animate({
            scrollTop: offset
        }, 200);
        $('#main').on('scroll', function() {
            that.hidePillsBar();
        });
        $(".aside-container-header").hide();
        $(".aside-container").hide();
    }

    hidePillsBar() {
        const that = this;
        const st = $("#main").scrollTop();
        const queryArea = $(".query-area").is(":visible");
        if (queryArea && st >= this.lastScrollTop){
            $("#pillsBar").css("top", "50px");
        } else if(queryArea) {
            $("#pillsBar").css("top", "0");
        }
        this.lastScrollTop = st;
        $('#main').off('scroll', function() {
            that.hidePillsBar();
        });
    }

	onCounryClicked(event) {
		const $target = $(event.currentTarget);
		const countryName = $target.find(".results-card-body-btn-name").text();
		const $newCountryFilter = $(
			'<div class="level-empty">'+
			'<li class="ui-widget-content category-filter">'+
			'<h3 class="filter-name">Country and region</h3>'+
			'<div class="filter-content">'+
			'<button class="is-toggle-btn">is</button>'+
			'<select class="condition-type">'+
			'<option value="is one of">is one of</option>'+
			'</select>'+
			'<input type="text" placeholder="Type" class="filter-input" value=" '+ countryName +' ">'+
			'<span class="iconFont trash"></span>'+
			'</div></li></div>'
		)
		$(".level-pageview > .ui-droppable").before($newCountryFilter);
		this.onSearch();
	}

	onTextQueryRender() {
        const note = $('<p id="textFilterNote" class="filter-note">Note: You used the Text filter which is based on Clicktale recordings; search results are limited to your retention period [30 days]</p>');
        const $resultsSummary = $("#resultsSummary");
        if (!$resultsSummary.find("#textFilterNote").length) {
            $resultsSummary.append(note);
        }
    }
}