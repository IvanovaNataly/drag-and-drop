export class SearchData {
    constructor() {
        this.data = {};
        this.key = "search";
    }

    postData() {
        const $levelPageview = $(".level-pageview");
        const $filters = $levelPageview.find(".ui-widget-content");
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
        const dataObject = this.postData();
        this.storeData(dataObject);
        this.data = this.getData(this.key);
        console.log(this.data);
    }
}