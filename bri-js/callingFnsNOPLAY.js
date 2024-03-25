/* global initializeMap, initializeDataTable */
/* 1. === Setting up Map === */
/* set up with zoom 5, may change, changed lat
and long from 34,0836417742618, -118.5298649280784 */
var bounds = new L.LatLngBounds(
    new L.LatLng(45.9814, -22.8472),
    new L.LatLng(62.2015143, 12.28));

var maxbounds = new L.LatLngBounds(
    new L.LatLng(34.0101, -48.9634),
    new L.LatLng(69.2025, 36.0782)
)

let map = L.map('map', {zoomControl: false, center: bounds.getCenter(),maxBounds: maxbounds,maxBoundsViscosity: 1.0, maxZoom:9, minZoom:4 }).setView([54.09145,-5.2836], 3);
map.fitBounds(bounds);

const basemap = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
var WhiteCanvas = L.tileLayer(basemap, {
  attribution,
});

var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, ' +
    'AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var Jawg_Dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd'
});

let baseLayers = {
    "Satellite": Esri_WorldImagery,
    "Grey Canvas": Jawg_Dark,
    "White Canvas": WhiteCanvas
};

var layerControl = L.control.layers(baseLayers, null, {position: 'bottomright',collapsed:false}).addTo(map);
map.addLayer(WhiteCanvas);
map.addControl(layerControl);


sidebarContentController("story-slide");


let dataT = [];

/* PM LAYERS */
var layerPM_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2010_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerPM_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2011_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerPM_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2012_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerPM_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2013_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerPM_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2014_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerPM_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2015_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerPM_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2016_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerPM_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2017_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerPM_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2018_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerPM_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/PM_2019_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

/* OZONE LAYERS */ 
var layerOZONE_1990 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1990_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1990"
});

var layerOZONE_1991 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1991_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1991"
});

var layerOZONE_1992 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1992_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1992"
});

var layerOZONE_1993 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1993_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1993"
});

var layerOZONE_1994 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1994_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1994"
});

var layerOZONE_1995 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1995_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1995"
});

var layerOZONE_1996 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1996_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1996"
});

var layerOZONE_1997 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1997_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1997"
});

var layerOZONE_1998 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1998_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1998"
});

var layerOZONE_1999 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_1999_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1999"
});

var layerOZONE_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2000_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerOZONE_2001 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2001_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2001"
});

var layerOZONE_2002 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2002_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2002"
});

var layerOZONE_2003 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2003_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2003"
});

var layerOZONE_2004 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2004_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2004"
});

var layerOZONE_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2005_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerOZONE_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2006_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerOZONE_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2007_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerOZONE_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2008_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerOZONE_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2009_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerOZONE_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2010_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerOZONE_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2011_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerOZONE_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2012_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerOZONE_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2013_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerOZONE_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2014_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerOZONE_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2015_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerOZONE_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2016_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerOZONE_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/OZONE_2017_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

/* NO2 LAYERS */ 
var layerNO_1990 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_1990_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1990"
});

var layerNO_1995 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_1995_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1995"
});

var layerNO_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2000_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerNO_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2005_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerNO_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2006_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerNO_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2007_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerNO_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2008_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerNO_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2009_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerNO_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2010_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerNO_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2011_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerNO_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2012_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerNO_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2013_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerNO_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2014_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerNO_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2015_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerNO_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2016_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerNO_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2017_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerNO_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2018_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerNO_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2019_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerNO_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/NO_2020_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

/* LIGHT LAYERS */ /*
var layerLIGHT_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2012.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerLIGHT_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2013.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerLIGHT_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2014.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerLIGHT_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2015.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerLIGHT_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2016.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerLIGHT_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2017.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerLIGHT_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2018.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerLIGHT_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2019.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerLIGHT_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2020.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerLIGHT_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/LIGHT_2021.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});

var layerSOURCE_BIOFUEL = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/SOURCE_BIOFUEL.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
}); */


var layerBLUE_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/data/DataForMap/BLUESPACE_US.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});


const legendvars = {
  PMTFV: "https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/pm_legend2.jpg",
  OZONE: "https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/ozone_legend2.jpg",
  NOTWO: "https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/notwo_legend2.jpg",
  BLUES: "https://raw.githubusercontent.com/aidanpcole/EXPOSOME_US/main/blue_legend2.jpg"
};

/* make a layergroup for each type of pollution and then use checkies to decide which layergroup is shown */
PMTFVP = L.layerGroup([layerPM_2010,layerPM_2011,layerPM_2012,layerPM_2013,layerPM_2014,layerPM_2015,layerPM_2016,layerPM_2017,layerPM_2018,layerPM_2019]);
OZONEP = L.layerGroup([layerOZONE_1990,layerOZONE_1991,layerOZONE_1992,layerOZONE_1993,layerOZONE_1994,layerOZONE_1995,layerOZONE_1996,layerOZONE_1997,layerOZONE_1998,layerOZONE_1999,layerOZONE_2000,layerOZONE_2001,layerOZONE_2002,layerOZONE_2003,layerOZONE_2004,layerOZONE_2005,layerOZONE_2006,layerOZONE_2007,layerOZONE_2008,layerOZONE_2009,layerOZONE_2010,layerOZONE_2011,layerOZONE_2012,layerOZONE_2013,layerOZONE_2014,layerOZONE_2015,layerOZONE_2016,layerOZONE_2017]);
NOTWOP = L.layerGroup([layerNO_1990,layerNO_1995,layerNO_2000,layerNO_2005,layerNO_2006,layerNO_2007,layerNO_2008,layerNO_2009,layerNO_2010,layerNO_2011,layerNO_2012,layerNO_2013,layerNO_2014,layerNO_2015,layerNO_2016,layerNO_2017,layerNO_2018,layerNO_2019,layerNO_2020]);
/*LIGHTP = L.layerGroup([layerLIGHT_2012,layerLIGHT_2013,layerLIGHT_2014,layerLIGHT_2015,layerLIGHT_2016,layerLIGHT_2017,layerLIGHT_2018,layerLIGHT_2019,layerLIGHT_2020,layerLIGHT_2021]); 
SOURCEP = L.layerGroup([layerSOURCE_BIOFUEL]);*/
BLUESP = L.layerGroup([layerBLUE_2000]);

const picsvars = {
  PMTFV: PMTFVP,
  OZONE: OZONEP,
  NOTWO: NOTWOP,
  BLUES: BLUESP,
/*  LIGHT: LIGHTP,
  SOURCE: SOURCEP,*/
};


let picGroup = determinePics();
var sliderControl = L.control.sliderControl({position: "topright", layer: picGroup, timeAttribute: 'time', follow: 1, startTimeIdx: 0, timeStrLength: 4, alwaysShowDate: true});




function initializeTime() {
  console.log("INITIALIZETIME FN");
  	/* need to remove the initial pm 2.5 slider and update based on checks*/
	map.addControl(sliderControl);
	setInterval(function(){
            var current = $(this.sliderBoxContainer).slider("value");
            var max = sliderControl.options.maxValue + 1;
            var step = ++current % max;
            $(this.sliderBoxContainer).slider("value", step);
            sliderControl.slide(null, {value: step});
        }, 1500);
  console.log(sliderControl);
  sliderControl.startSlider();
}



function determinePics() {
	console.log("IN DETERMINEPICS");
	let pics = [];
	let names = [];
	if (checkies === undefined) {
		pics = PMTFVP;
	} else {
	checkies.forEach(c => {
		if (c.checked === true) {
			console.log(checkies);
			let n = c.id;
			names.push(n);
		}
	});
	names.forEach(name => {
		if (polygonLayers.includes(name)) {
			pics = picsvars[name];
		}
	});
} return pics;
}


let currentLayer = "White Canvas";
map.on('baselayerchange', function(e) {
	currentLayer = e.name;
})

// === Determine & Update Map From Check boxes == //
function determineTime() {
	  console.log("IN DETERMINE TIME");
	  map.removeControl(sliderControl);
	  $('#leaflet-slider').remove();
	  $(this.sliderBoxContainer).remove();
	  $('#slider-timestamp').remove();
	  $(this.timestampContainer).remove();
	  $(this.sliderContainer).remove();
	  $(this.container).remove();
	  $(this._container).remove();
	  $('img.leaflet-control').remove();
		map.removeControl(geocoder);
		map.removeControl(legend);
		before = map.hasLayer(velocityLayer);
		map.eachLayer(function(layer) {
    map.removeLayer(layer);
		});
		if (before == true) {
			map.addLayer(velocityLayer);
		} else {
			map.removeLayer(velocityLayer);
		}
	  picGroupoink = determinePics();
		if (currentLayer != "White Canvas" & picGroupoink != BLUESP) {
			map.addLayer(baseLayers[currentLayer]);
		} else {
			map.addLayer(baseLayers["White Canvas"]);
		}
	if (picGroupoink == BLUESP) {
		map.removeLayer(baseLayers["White Canvas"]);
		map.removeLayer(baseLayers["Grey Canvas"]);
		map.addLayer(baseLayers["Satellite"]);
	}
	legendOINK = determineLegend();
  var newsliderControl = L.control.sliderControl({position: "topright", layer: picGroupoink, timeAttribute: 'time', follow: 1, startTimeIdx: 0, timeStrLength: 4, alwaysShowDate: true});
  var newlegend = L.control({position:'bottomleft'});
  newlegend.onAdd = function(map) {
        var img = L.DomUtil.create('img');
				
        img.src = legendOINK;
        img.style.width = '143px';
        img.style.height = '80px';

        return img;
    };
  newlegend.addTo(map);  
  console.log(newlegend);
	map.addControl(newsliderControl);
	map.addControl(geocoder);
	setInterval(function(){
            var current = $(this.sliderBoxContainer).slider("value");
            var max = newsliderControl.options.maxValue + 1;
            var step = ++current % max;
            $(this.sliderBoxContainer).slider("value", step);
            newsliderControl.slide(null, {value: step});
        }, 1500);
  newsliderControl.startSlider();
  let checkedname = [];
	checkies.forEach(c => {
		if (c.checked === true) {
			console.log(checkies);
			let n = c.id;
			checkedname.push(n);
		}})
		console.log(checkedname);
  	document.querySelector('#PMTFV').onclick = (e) => {
  		if (checkedname == "PMTFV") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);	
  		}
  	}
  	document.querySelector('#OZONE').onclick = (e) => {
  		if (checkedname == "OZONE") {
  			e.preventDefault();
  		} else {
  			map.removeControl(newsliderControl);
  		}
  	}
  	document.querySelector('#NOTWO').onclick = (e) => {
  		if (checkedname == "NOTWO") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);  			
  		}
  	}
  	document.querySelector('#BLUES').onclick = (e) => {
  		if (checkedname == "BLUES") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);  			
  		}
    }
}


initializeMap();
initializeTime();
var geocoder = L.Control.geocoder({position: 'topright', placeholder: 'Search for location...'})
geocoder.addTo(map);
L.control.zoom({
  position: 'bottomright'
}).addTo(map);


map.setView([54.09145,-5.2836], 5);



let velocityLayer;
$.getJSON("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/wind-global.json", function(data) {
  velocityLayer = L.velocityLayer({
    displayValues: false,
    displayOptions: {
      velocityType: "Global Wind",
      position: "bottomright",
      emptyString: "No wind data"
    },
    data: data,
    maxVelocity: 15
  });
  layerControl.addOverlay(velocityLayer, "Wind - Global");
});

/*var legendbounds = new L.LatLngBounds(
    new L.LatLng(11.850403911080494, 114.78228464710038),
    new L.LatLng(15.765228811080178, 117.34279637664724));
var pm25_scheme = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/pm25_scheme.png", legendbounds, {opacity: 1.0, interactive: false});
map.addLayer(pm25_scheme);
pm25_scheme.addTo(map);
var legenedControl = L.control.layers(pm25_scheme, null, {position: 'bottomright',collapsed:false}).addTo(map);
map.addControl(legendControl); */


function determineLegend() {
	console.log("IN DETERMINELEGEND");
	let legend = [];
	let names = [];
	if (checkies === undefined) {
		legend = PMLEGEND;
	} else {
		checkies.forEach(c => {
			if (c.checked === true) {
				console.log(checkies);
				let n = c.id;
				names.push(n);
			}
		});
		names.forEach(name => {
			if (polygonLayers.includes(name)) {
				legend = legendvars[name];
			}
		});
	} return legend;
}

var legend = L.control({position:'bottomleft'});

legend.onAdd = function(map) {
        var img = L.DomUtil.create('img', 'legendboy', this._container);
        let legendurl = determineLegend();
				
        img.src = legendurl;
        img.style.width = '143px';
        img.style.height = '80px';

        return img;
    };

legend.addTo(map);
console.log(legend);


