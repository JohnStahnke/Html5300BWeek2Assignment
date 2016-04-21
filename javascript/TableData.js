/*File information
TableData.js

*/

(function () {
    'use strict';
    var activities = new Array();
    //Input Form text boxes
    var activityName = document.getElementById('ActivityName');
    var activityType = document.getElementById('ActivityType');
    var date = document.getElementById('Date');
    var time = document.getElementById('Time');
    var distance = document.getElementById('Distance');
    var calories = document.getElementById('Calories');
    
    $("#btnGenerate").click(function () {
        BuildDataObject();
    });
    $("#btnAddData").click(function(){
    	AddToArray();
    });
    $("#btnOpenInputForm").click(function(){
		$("#dvTable").hide();
    	$("#ActivityTable").show();
    });
    $(document).ready(function () {
    	$("#ActivityTable:visible").hide();
        BuildDataObject();
		BuildTable();
    });
    function AddToArray()
    {
    	activityName = document.getElementById('ActivityName');
    	activityType = document.getElementById('ActivityType');
    	date = document.getElementById('Date');
    	time = document.getElementById('Time');
    	distance = document.getElementById('Distance');
    	calories = document.getElementById('Calories');
    	
    	activities.push([activities.length, activityName.value, activityType.value, date.value, time.value, distance.value, calories.value]);
    	BuildTable();
    	ClearTextBoxes();
    	$("#dvTable").show();
    	$("#ActivityTable").hide();
    }
	function TurnOnPage()
	{
		$("#dvTable:visible").hide();
    	$("#ActivityTable:visible").show();
	}
	
    //***************************************
    function BuildDataObject()
    {
        activities.push(["Activity Id", "Activity Name", "Activity Type", "Date", "Time", "Distance", "Calories"]);
        activities.push([1, "Seattle", "Running", "2016_04_18", "18:34", "2.1", 540]);
        activities.push([2, "Burien", "Biking", "2016_04_17", "1:18:34", "21.1", 1540]);
        activities.push([3, "Tukwila", "Running", "2016_04_16", "1:18:34", "10.1", 1540]);
    }
    //***************************************
    function BuildTable()
    {
    	var table = $("<table />");
    	table[0].border = "1";
    	
    	//Get the count of columns
    	var columnCount = activities[0].length;
    	
    	//Add the header row
    	var row = $(table[0].insertRow(-1));
    	
    	for (var i = 0; i < columnCount; i++)
    	{
    		var headerCell = $("<th />");
    		headerCell.html(activities[0][i]);
    		row.append(headerCell);
    	}
    	//Add the data rows.
    	for(var i = 1; i < activities.length; i++)
    	{
    		row = $(table[0].insertRow(-1));
    		for(var j = 0; j < columnCount; j++)
    		{
    			var cell = $("<td />");
    			cell.html(activities[i][j]);
    			row.append(cell);
    		}
    	}
    	var tBody = $("#tBody");
    	tBody.html("");
    	tBody.append(table);
    }
    function ClearTextBoxes()
    {
    	activityName.value = "";
    	activityType.value = "";
    	date.value = "";
    	time.value = "";
    	distance.value = "";
    	calories.value = "";
    }
})();