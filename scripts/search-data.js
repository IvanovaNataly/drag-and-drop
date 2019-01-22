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
    }

    postData(level) {
        const $level = $("." + level);
        const $filters = $level.find(".ui-widget-content");
        return $.map($filters, this.postFilter);
    }

    postFilter(filter) {
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
            Pageview: this.postData("level-pageview"),
        };
        this.storeData(dataObject);
        this.data = this.getData(this.key);
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
    }

    renderLevel(level, key) {
        const $level = $('<div class="query-area-'+ key.toLowerCase() +'">'+
            '<h2 class="query-area-title">'+ key +' level</h2>'+
            '<div class="query-area-visit-queries">'+
            '</div></div>'
        );
        const $queriesContainer = $level.find(".query-area-visit-queries");
        for (let query of level) {
            let $query = this.queryRenderer.render(query);
            $queriesContainer.append($query);
        }
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
        $(".query-area").hide();
        $(".search-area").show();
        $(".btn-wrapper").show();
        $(".aside-container-header").show();
        $(".aside-container").show();
        $("#main").css("margin-top", "0");
        $("#pillsBar").css("top", "0");
        $("#aside").css("flex-basis", "260px");
        $("#main").animate({
            scrollTop: $("#main").offset().top - 30
        }, 200);
    }

    showResults() {
        $("#main").css("margin-top", "30px");
        $("#pillsBar").css("top", "50px");
        $("#aside").css("flex-basis", "50px");
        $("#main").animate({
            scrollTop: $("#resultsArea").offset().top - 100
        }, 200);
        $(".aside-container-header").hide();
        $(".aside-container").hide();
    }
}