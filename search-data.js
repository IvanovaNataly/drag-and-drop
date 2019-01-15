$( function() {
    var key = "search";

    function postData() {
        var $levelPageview = $(".level-pageview");
        var $filters = $levelPageview.find(".ui-widget-content");
        var name = $filters.find(".filter-name").text();
        var inputs = $filters.find("select, input");
        var sum = $.map( inputs, function(input) {
            return input.value;
        }).join(" ");
        return {
            name: name,
            selectValue: sum
        }
    }

    function postFilter(filter) {
        var name = filter.find(".filter-name").text();
        var inputs = filter.find("select, input");
        var sum = $.map( inputs, function(input) {
            return input.value;
        }).join(" ");
        return {
            name: name,
            selectValue: sum
        }
    }

    function getData(keySrting) {
        var dataString = localStorage.getItem(keySrting);
        return JSON.parse(dataString);
    }

    function storeData(dataObject) {
        var dataSring = JSON.stringify(dataObject);
        localStorage.setItem(key, dataSring);
    }

    function onSearch() {
        var dataObject = postData();
        storeData(dataObject);
        var data = getData(key);
        console.log(data);
    }

    $( "#searchBtn").click( function() { onSearch()});
} );;