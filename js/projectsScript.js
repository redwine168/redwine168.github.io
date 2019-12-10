

(function () {
    // get elements with button tag 
    var buttons = $("button");
    var buttonNames = [];
    var textFieldNames = [];
    // populate buttonNames and textFieldNames
    for (i = 0; i < buttons.length; i++) {
        buttonNames.push(buttons[i].name);
        var textFieldName = buttons[i].name.substring(0, buttons[i].name.length - 6) + "Desc";
        textFieldNames.push(textFieldName);
    }
    // initialize url and httpRequest
    var jsonName = 'project_info.json';
    var httpRequest;
    // for each button, wait for onclick event
    // on click, makeRequest is called according to the button that was clicked
    for (i = 0; i < buttonNames.length; i++) {
        document.getElementById(buttonNames[i]).onclick = function () {
            makeRequest(jsonName, this.id);
        }
    };

    // try to make the httprequest
    function makeRequest(url, buttonID) {
        httpRequest = new XMLHttpRequest();
        // set global variable of the index of the button that was clicked
        window.index = buttonNames.indexOf(buttonID)
        if (!httpRequest) {
            alert("HTTPRequest failed!");
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    // called when httprequest.readystate changes
    // if httprequest is finished and successful, fillProjectInfo is called
    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                fillProjectInfo(httpRequest.responseText);
            } else {
                alert("There was a problem with the request.");
            }
        }
    }

    // fill the project info for the button that was clicked
    function fillProjectInfo(responseText) {
        var obj = JSON.parse(responseText);
        // if project info not already show (aka, button reads "Show details")
        if (document.getElementById(buttonNames[window.index]).innerHTML == "Show details") {
            // fill project info
            document.getElementById(textFieldNames[window.index]).innerHTML = obj.project_info[window.index].project.info;
            // change button text to "Hide details"
            document.getElementById(buttonNames[window.index]).innerHTML = "Hide details";
        // if project info already shown (aka, "Hide details" was clicked)
        } else {
            // clear project info
            document.getElementById(textFieldNames[window.index]).innerHTML = "";
            // reset button text 
            document.getElementById(buttonNames[window.index]).innerHTML = "Show details";
        }
}})();