window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	title:{
		text: "Percentage of People Involved in Traffic Accidents by Modes of Transport"
	},
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	animationEnabled: true,
	axisX: {
		interval: 1,
		intervalType: "month"
	},
	toolTip: {
		shared: true
	},
	data: [
	{        
		type: "stackedArea100",
		name: "Cars",
		xValueFormatString: "MMM, YYYY",
		showInLegend: "true",
		dataPoints: [
			{ x: new Date(2016, 00, 1), y: 1100 },
			{ x: new Date(2016, 01, 1), y: 1200 },
			{ x: new Date(2016, 02, 1), y: 1000 },
			{ x: new Date(2016, 03, 1), y: 1200 },
			{ x: new Date(2016, 04, 1), y: 1600 },
			{ x: new Date(2016, 05, 1), y: 1800 },
			{ x: new Date(2016, 06, 1), y: 1400 },
			{ x: new Date(2016, 07, 1), y: 1500 },
			{ x: new Date(2016, 08, 1), y: 1600 },
			{ x: new Date(2016, 09, 1), y: 1800 }
		]
	},
	{        
		type: "stackedArea100",
		name: "Trucks",
		showInLegend: "true",
		dataPoints: [
			{ x: new Date(2016, 00, 1), y: 150 },
			{ x: new Date(2016, 01, 1), y: 171 },
			{ x: new Date(2016, 02, 1), y: 155 },
			{ x: new Date(2016, 03, 1), y: 150 },
			{ x: new Date(2016, 04, 1), y: 165 },
			{ x: new Date(2016, 05, 1), y: 195 },
			{ x: new Date(2016, 06, 1), y: 155 },
			{ x: new Date(2016, 07, 1), y: 145 },
			{ x: new Date(2016, 08, 1), y: 140 },
			{ x: new Date(2016, 09, 1), y: 151 }
		]
	},
	{        
		type: "stackedArea100",
		name: "Bicycles",
		showInLegend: "true",
		dataPoints: [
			{ x: new Date(2016, 00, 1), y: 71 },
			{ x: new Date(2016, 01, 1), y: 41 },
			{ x: new Date(2016, 02, 1), y: 55 },
			{ x: new Date(2016, 03, 1), y: 50 },
			{ x: new Date(2016, 04, 1), y: 65 },
			{ x: new Date(2016, 05, 1), y: 95 },
			{ x: new Date(2016, 06, 1), y: 45 },
			{ x: new Date(2016, 07, 1), y: 95 },
			{ x: new Date(2016, 08, 1), y: 60 },
			{ x: new Date(2016, 09, 1), y: 40 }
		]
	},
	{        
		type: "stackedArea100",
		name: "Motorcycles",
		showInLegend: "true",
		dataPoints: [
			{ x: new Date(2016, 00, 1), y: 861 },
			{ x: new Date(2016, 01, 1), y: 761 },
			{ x: new Date(2016, 02, 1), y: 775 },
			{ x: new Date(2016, 03, 1), y: 680 },
			{ x: new Date(2016, 04, 1), y: 785 },
			{ x: new Date(2016, 05, 1), y: 374 },
			{ x: new Date(2016, 06, 1), y: 365 },
			{ x: new Date(2016, 07, 1), y: 455 },
			{ x: new Date(2016, 08, 1), y: 657 },
			{ x: new Date(2016, 09, 1), y: 659 }
		]
	},
	{        
		type: "stackedArea100",
		name: "Pedistrians",
		showInLegend: "true",
		dataPoints: [
			{ x: new Date(2016, 00, 1), y: 220 },
			{ x: new Date(2016, 01, 1), y: 240 },
			{ x: new Date(2016, 02, 1), y: 295 },
			{ x: new Date(2016, 03, 1), y: 300 },
			{ x: new Date(2016, 04, 1), y: 265 },
			{ x: new Date(2016, 05, 1), y: 235 },
			{ x: new Date(2016, 06, 1), y: 245 },
			{ x: new Date(2016, 07, 1), y: 255 },
			{ x: new Date(2016, 08, 1), y: 275 },
			{ x: new Date(2016, 09, 1), y: 290 }
		]
	}
	]
});
chart.render();

}
