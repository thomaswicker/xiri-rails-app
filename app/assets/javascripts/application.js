// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .
//= require masonry/jquery.masonry

$(function(){ $(document).foundation(); });



function clearEmail(){
    var clearButton = document.getElementById('cancelEmail').value;
    document.getElementById('ghd').value = "";
    $('#ghd').val('dsds');
}

 $('#clearEmail').on('click', function () {
    var xiriFormInputs = $('#xiriForm').children('.toClear');
    var xiriTextArea = $('#xiriForm').children('textarea');
    xiriFormInputs.val("");
    xiriTextArea.val("");
 });


// Masonry for Portfolio Section

$(window).resize(function() {
  var $container = $('.masonry').masonry();
  $container.imagesLoaded( function() {
    $container.masonry({
      itemSelector : '.item',
      isAnimated: true,
      animationOptions: {
        duration: 300,
        easing: 'linear',
        queue: false
      }
    });
   });
 });
