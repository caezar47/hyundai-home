'use strict';

window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}

[[azbntple tpl="/src/common/bootstrap/js/bootstrap.js" ]]
//[[azbntple tpl="/src/common/fancybox3/js/fancybox.js" ]]
[[azbntple tpl="/src/_/concat.plugin.js" ]]


$(function() {
	
	/*
	Создание триггеров на элементы, в основном, на body
	*/
	[[azbntple tpl="/src/_/concat.body.on.js" ]]
	
	
	/*
	Событие смены класса body
	*/
	$(document.body).on('changeClass', null, {} ,function(event, event_action){
		// event_action = add || remove || toggle
		
		[[azbntple tpl="/src/_/concat.body.changeClass.js" ]]
	});
	
	
	/*
	События смены класса у любого элемента
	*/
	[[azbntple tpl="/src/_/concat.changeClass.js" ]]
	
	
	/*
	Основная логика сайта
	*/
	[[azbntple tpl="/src/_/concat.document-ready.js" ]]
	
	
	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		[[azbntple tpl="/src/_/concat.window-resize.js" ]]
	}).trigger('resize');
	
	
	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		[[azbntple tpl="/src/_/concat.window-scroll.js" ]]
	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	
	/*
	Событие инициализации fecss
	$(document.body).trigger('fecss.init');
	*/
	
	
});