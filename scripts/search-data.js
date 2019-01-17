import {Query} from './query.js';

export class SearchData {
    constructor() {
        this.data = {};
        this.key = "search";
        this.query = new Query();
    }

    postData(level) {
        const $level = $("." + level);
        const $filters = $level.find(".ui-widget-content");
        return $.map($filters, this.postFilter);
    }

    postFilter(filter) {
        const name = $(filter).find(".filter-name").text();
        const inputs = $(filter).find("select, input");
        const sum = $.map( inputs, function(input) {
            return input.value;
        }).join(" ");
        return {
            name: name,
            selectValue: sum
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
            visit: this.postData("level-visit"),
            pageview: this.postData("level-pageview"),
        };
        this.storeData(dataObject);
        this.data = this.getData(this.key);
        this.renderData();
        // console.log(this.data);
    }

    renderData() {
        let $query = this.query.render("Interaction");
        console.log($query);
    }
}