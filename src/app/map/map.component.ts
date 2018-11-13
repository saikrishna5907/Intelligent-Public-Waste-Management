import { Component, OnInit, EventEmitter, Output, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MapService } from '../map.service';
import { List } from 'lodash';
import { Sensor } from '../shared/sensor.model';
import { MatDialog, MatDialogModule } from '@angular/material';
import { Bin } from '../shared/bins.model';
import { NotifierService } from 'angular-notifier';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private readonly notifier: NotifierService;
  sensorDataList: List<Sensor> = [];
  binsDataList: List<Bin> = [];
  percentage: any;
  thresholdValue: number;
  location_list: string[] = [];
  greenBins: string[] = [];
  orangeBins: string[] = [];
  redBins: string[] = [];
  lat: number;
  lng: number;
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }
  setThresholdValue(val: number) {
    this.mapService.setThresholdValue(val);
  }
  constructor(
    private mapService: MapService,
    private notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }
  filterByBinPercentage(level: string) {
  if (level ===  'low') {
    console.log('low');
  } else if (level === 'medium') {
  } else if (level === 'high') {
  }
  }
  filterByLocation(area: string) {
  }
  ngOnInit() {

    this.mapService.getThresholdValue().subscribe(data => {
      this.thresholdValue = data;
    });

    const map = L.map('mapid').setView([-37.721085, 145.047871], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const popup = L.popup();

     function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);

    const LeafIcon = L.Icon.extend({
      options: {
        iconSize: [38, 55],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      }
    });



    // tslint:disable-next-line:max-line-length
    const emptyBin = new LeafIcon({
        iconUrl:
          // tslint:disable-next-line:max-line-length
          'https://firebasestorage.googleapis.com/v0/b/pwms-db.appspot.com/o/bin%20Icon.png?alt=media&token=08e4a586-88fb-4d7b-8cd2-f2b812974ead'
      }),
      // tslint:disable-next-line:max-line-length
      mediumFilledBin = new LeafIcon({
        iconUrl:
          // tslint:disable-next-line:max-line-length
          'https://firebasestorage.googleapis.com/v0/b/pwms-db.appspot.com/o/halfFilled.png?alt=media&token=5345b660-f85c-47d1-8963-07c409a16d07'
      }),
      filledBin = new LeafIcon({
        iconUrl:
          // tslint:disable-next-line:max-line-length
          'https://firebasestorage.googleapis.com/v0/b/pwms-db.appspot.com/o/fullfilled.png?alt=media&token=13ad123a-7151-4dcc-9688-09ee88a17f48'
      });
    const clusterMarkers = L.markerClusterGroup({
      maxClusterRadius: 75,
      maxZoom: 21,
      iconCreateFunction: function(cluster) {

        const childMarkers = cluster.getAllChildMarkers();
        const numberOfChildMarkers = cluster.getChildCount();
         let total = 0.0;
        for (let i = 0; i < childMarkers.length ; i++) {
          const fullstring = childMarkers[i]._popup._content;
          const indexOfPercentage = fullstring.indexOf('Percentage');
          const percentOfBin = parseFloat(fullstring.substring(indexOfPercentage + 21, indexOfPercentage + 23));
          total += percentOfBin;
        }
        const averageOfPerOfChildBins = total / numberOfChildMarkers;
        if (averageOfPerOfChildBins <= 20) {
          return L.divIcon({
            html:
              // tslint:disable-next-line:max-line-length
              '<img style="width: 100%; height: 120%" src="https://firebasestorage.googleapis.com/v0/b/pwms-db.appspot.com/o/halfFilled.png?alt=media&token=5345b660-f85c-47d1-8963-07c409a16d07"></img>',
            className: 'mycluster',
            iconSize: L.point(40, 40)
          });

        } else if ( averageOfPerOfChildBins > 20 && averageOfPerOfChildBins <= 80) {

          return L.divIcon({
            html:
              // tslint:disable-next-line:max-line-length
              '<img style="width: 100%; height: 120%" src="https://firebasestorage.googleapis.com/v0/b/pwms-db.appspot.com/o/halfFilled.png?alt=media&token=5345b660-f85c-47d1-8963-07c409a16d07"></img>',
            className: 'mycluster',
            iconSize: L.point(40, 40)
          });
        } else {
        return L.divIcon({
          html:
            // tslint:disable-next-line:max-line-length
            '<img style="width: 100%; height: 120%" src="https://firebasestorage.googleapis.com/v0/b/pwms-db.appspot.com/o/fullfilled.png?alt=media&token=13ad123a-7151-4dcc-9688-09ee88a17f48"></img>',
          className: 'mycluster',
          iconSize: L.point(40, 40)
        });
      }
      },
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true
    });
    function addMarker(
      lat: number,
      long: number,
      popUpMsg: string,
      iconType: any,
      binID: string,
      binLevel: string,
      sensorID: string,
      sensorLocation: string,
      filledPercentage: number
    ) {
      clusterMarkers.addLayer(
        L.marker([lat, long], { icon: iconType })
          .addTo(map)
          .bindPopup(popUpMsg)
      );
    }
    this.mapService.getBinsData().subscribe(data => {
      this.binsDataList = data ;
    });

    this.mapService.getSensorData().subscribe(data => {
      this.sensorDataList = data;
      const sensorKeys = Object.keys(this.sensorDataList);
      const binKeys = Object.keys(this.binsDataList);
      for (let i = 0; i < sensorKeys.length; i++) {
        const senKey = sensorKeys[i];
      for (let k = 0; k < binKeys.length; k++) {
        const binKey = binKeys[k];
        this.percentage = (this.binsDataList[binKey].payload_fields.level /
          this.sensorDataList[senKey].capacity) *
          100;
        if (
          this.binsDataList[binKey].payload_fields.hardware_id ===
          this.sensorDataList[senKey].hardware_id
        ) {
            const popupContent = '<html><body><h3>Bin Details</h3>' +
                                '<br /> <strong>Bin Id:</strong> ' + binKey +
                                '<br/> <strong>Bin Level:</strong> ' + this.binsDataList[binKey].payload_fields.level +
                                '<br/> <strong>Sensor Id:</strong> ' + senKey +
                                '<br/> <strong>Bin Capacity:</strong> ' + this.sensorDataList[senKey].capacity +
                                '<br/> <strong>Location:</strong> ' + this.sensorDataList[senKey].location_precinct +
                                ' <br/> <strong>Percentage: </strong>' + this.percentage +
                                '</body></html>';
          if (
            this.percentage <
            20
          ) {
            addMarker(
              this.sensorDataList[senKey].location.latitude,
              this.sensorDataList[senKey].location.longitude,
              popupContent,
              emptyBin,
              this.binsDataList[binKey].$key,
              this.binsDataList[binKey].payload_fields.level,
              this.sensorDataList[senKey].$key,
              this.sensorDataList[senKey].location_precinct,
              this.percentage
            );
          } else if (
            this.percentage >
              20 &&
            this.percentage <
              80
          ) {
            addMarker(
              this.sensorDataList[senKey].location.latitude,
              this.sensorDataList[senKey].location.longitude,
              popupContent,
              mediumFilledBin,
              this.binsDataList[binKey].$key,
              this.binsDataList[binKey].payload_fields.level,
              this.sensorDataList[senKey].$key,
              this.sensorDataList[senKey].location_precinct,
              this.percentage
            );
          } else if (
            this.percentage >=
            80
          ) {
            addMarker(
              this.sensorDataList[senKey].location.latitude,
              this.sensorDataList[senKey].location.longitude,
              popupContent,
              filledBin,
              this.binsDataList[binKey].$key,
              this.binsDataList[binKey].payload_fields.level,
              this.sensorDataList[senKey].$key,
              this.sensorDataList[senKey].location_precinct,
              this.percentage
            );

              const message = 'Bin ID: '
              + binKey
              + '  ' + 'reached the threshold value at location   ' +   this.sensorDataList[senKey].location_precinct;
            this.notifier.notify( 'error', message );
          }
        }
      }
      this.location_list.push(this.sensorDataList[senKey].location_precinct);
      // console.log('locations'  + this.location_list);
    }
    });
    // function onBinClick(binID: string, binLevel: string, sensorID: string, sensorLocation: string, filledPercentage: number) {
    //   this.binID = binID;
    //   this.binLevel = binLevel;
    //   this.sensorID = sensorID;
    //   this.sensorLocation = sensorLocation;
    //   this.filledPercentage = filledPercentage;

    // }
    function onBinHover(e) {
      popup
        .setLatLng(e.latlng)
        .setContent('<html><body>' +
                      '<br/> <strong>Percentage: <b/>' + this.percentage)
        .openOn(map);
    }
    map.addLayer(clusterMarkers);
    //  clusterMarkers.on('click', onBinClick);
    // clusterMarkers.on('mouseover', onBinHover);
    clusterMarkers.refreshClusters();
  }
}
