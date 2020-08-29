import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import * as $ from 'jquery';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function($) {

      "use strict";
    
      var fullHeight = function() {
    
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
          $('.js-fullheight').css('height', $(window).height());
        });
    
      };
      fullHeight();
    
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    
    })(jQuery);


  }

}
