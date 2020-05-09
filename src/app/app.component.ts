import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'looplabang';

  ngOnInit() {
    // $('#year').text(new Date().getFullYear());
    // // Init Scrollspy
    // $('body').scrollspy({ target: '#main-nav' });
    // // Smooth Scrolling
    // $('#main-nav a').on('click', function (event) {
    //   if (this.hash !== '') {
    //     event.preventDefault();
    //     const hash = this.hash;
    //     $('html, body').animate(
    //       {
    //         scrollTop: $(hash).offset().top,
    //       },
    //       800,
    //       function () {
    //         window.location.hash = hash;
    //       }
    //     );
    //   }
    // });
  }
}
