import { Component, AfterViewInit, ViewChild, OnInit, ElementRef } from '@angular/core';

import { Map, View } from 'ol';
import { VectorLayer } from 'ol/layer/Vector';
import { Style, Icon } from 'ol/style';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Control, defaults as defaultControls, Zoom } from 'ol/control';

@Component({
  selector: 'my-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.scss']
})
export class OlMapComponent implements OnInit, AfterViewInit {
  map: ElementRef;
  
  ngOnInit(){
  }

  ngAfterViewInit(){
    this.map = new Map({
      controls: defaultControls({
        zoomOptions: {
          zoomInLabel: document.getElementById('zoom-in'),
          zoomOutLabel: document.getElementById('zoom-out')
        }
      }),
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([7.0785, 51.4614]),
        zoom: 5
      })
    });
  }
}