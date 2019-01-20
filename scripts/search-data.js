import {QueryRenderer} from './query.js';

export class SearchData {
    constructor() {
        this.data = {
            Visit: [],
            Pageview: []};
        this.key = "search";
        this.queryRenderer = new QueryRenderer();
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
    }

    renderData() {
        $(".query-area").empty();
        $(".search-area").hide();
        $(".btn-wrapper").hide();
        for (let key in this.data) {
            if (!this.data.hasOwnProperty(key) && this.data[key].length) continue;
            const level = this.data[key];
            if (level.length) this.renderLevel(level, key);
        }
    }

    renderLevel(level, key) {
        const $level = $('<div class="query-area-'+ key.toLowerCase() +'">'+
            '<h2 class="query-area-title">'+ key +' level</h2>'+
            '<div class="query-area-visit-queries">'+
            '</div></div>'
        )
        const $queriesContainer = $level.find(".query-area-visit-queries");
        for (let query of level) {
            let $query = this.queryRenderer.render(query);
            $queriesContainer.append($query);
            console.log($query);
        }
        $(".query-area").append($level);
        $(".query-area").show();
        $(".open-search").off("click", this.openSearch);
        $(".open-search").on("click", this.openSearch);
    }

    openSearch() {
        $(".query-area").hide();
        $(".search-area").show();
        $(".btn-wrapper").show();
    }
}