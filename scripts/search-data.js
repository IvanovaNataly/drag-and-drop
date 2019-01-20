import {QueryRenderer} from './query.js';

export class SearchData {
    constructor() {
        this.data = {};
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
            visit: this.postData("level-visit"),
            pageview: this.postData("level-pageview"),
        };
        this.storeData(dataObject);
        this.data = this.getData(this.key);
        this.renderData();
        // console.log(this.data);
    }

    renderData() {
        for (let key in this.data) {
            if (!this.data.hasOwnProperty(key) && this.data[key].length) continue;
            const level = this.data[key];
            for (let prop in level) {
                if(!level.hasOwnProperty(prop)) continue;
                this.renderLevel(level);
            }
        }
    }

    renderLevel(level) {
        console.log(level);
        for (let query of level) {
            let $query = this.queryRenderer.render(query);
            console.log($query);
        }

    }
}