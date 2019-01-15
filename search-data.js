$( function() {
    var key = "search";

    function postData() {
        return {
            storage: "stored"
        }
    }

    function getData(keySrting) {
        var dataString = localStorage.getItem(keySrting);
        console.log(dataString);
        return JSON.parse(dataString);
    }

    function storeData(dataObject) {
        var dataSring = JSON.stringify(dataObject);
        console.log(dataSring);
        localStorage.setItem(key, dataSring);
    }

    function onSearch() {
        var dataObject = postData();
        storeData(dataObject);
        var data = getData(key);
        console.log(data);
    }

    $( "#searchBtn").click( function(event) { onSearch()});
} );