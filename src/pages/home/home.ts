import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { GeoService } from '../../services/geo.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: number;
  lng: number;

  markers: any;

  constructor(public geolocation: Geolocation, private geo: GeoService) { }

  ionViewWillLoad() {
    this.getUserLocation()
    this.geo.hits.subscribe(hits => this.markers = hits)
  }

  private getUserLocation() {
    if (this.geolocation) {
      console.log('geolocalisation')
      this.geolocation.getCurrentPosition()
        .then(position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat, this.lng)

          this.geo.getLocations(500, [this.lat, this.lng])
        })
        .catch(
          error => {
            console.log(error)
          }
        )
    }

  }

}
