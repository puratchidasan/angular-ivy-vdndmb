import { Component, VERSION, OnInit, ViewEncapsulation } from "@angular/core";
import tt from "@tomtom-international/web-sdk-maps";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  name = "TomTom Maps "; // + VERSION.major;
  ngOnInit() {
    var HQ = { lat: 50.8326, lng: 4.389 };
    const map = tt.map({
      key: "Bk1jIjy8ZLFAx79H9gtW22Xv3eIngLRo",
      container: "map",
      center: HQ,
      zoom: 10
    });

    //var marker = new tt.Marker().setLngLat(HQ).addTo(map);
    //var popup = new tt.Popup({ anchor: "top" }).setText("HeadQuarters");
    //marker.setPopup(popup).togglePopup();

    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
  }
}
