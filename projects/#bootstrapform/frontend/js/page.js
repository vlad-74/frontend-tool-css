'use strict';

(function() {
  
	var app = {
		
		initialize : function () {	
			this.setUpListeners();
		},

		setUpListeners: function () {
			$('form').on('submit', app.submitForm);
			$('form').on('keydown', '.has-error', app.removeError);
		},

		submitForm: function (e) {
			e.preventDefault();

			var form = $(this),
				submitBtn = form.find('button[type="submit"]'); 

			// если валидация не проходит - то дальше не идём
			if ( app.validateForm(form) === false )	return false; 

			var str = form.serialize();   

			// против повторного нажатия
	        submitBtn.attr({disabled: 'disabled'});

	        console.log('ajax !!!');

            // $.ajax({
            //     type: "GET", //"POST",
            //     url: "contact_form/test.json", //"contact_form/contact_process.php",
            //     data: str                
            // }).done(function(msg) {
            //     if(msg == 'OK') {
            //         result = 'Спасибо за ваш заказ! Мы свяжемся с вами в течение 15 минут';
            //         form.html(result);
            //     } else {
            //         form.html('msg');
            //     }		
            // }).always(function(){
            // 	submitBtn.removeAttr("disabled");
            // })

            // ВМЕСТО ЗАКОММЕНТИРОВАННОГО $.ajax
            var itog;
            app.httpGetPromise("contact_form/test.json")
	        .then( function f1(result) {
				itog = JSON.parse(result)
	        	form.html(itog.test);
	        })
		},

		validateForm: function (form){

			var inputs = form.find('input'),
				valid = true;
			
			inputs.tooltip('destroy');

			$.each(inputs, function(index, val) {
				var input = $(val),
					val = input.val(),
					formGrout = input.parents('.form-group'),
					label = formGrout.find('label').text().toLowerCase(),
					textError = 'Введите ' + label;

				if(val.length === 0){
					formGrout.addClass('has-error').removeClass('has-success');	
					input.tooltip({
						trigger: 'manual',
						placement: 'right',
						title: textError
					}).tooltip('show');		
					valid = false;		
				}else{
					formGrout.removeClass('has-error').addClass('has-success');
					input.tooltip('hide');
				}	
			});

			return valid;
			
		},

		removeError: function() {
			$(this).removeClass('has-error').find('input').tooltip('destroy');
		},

		httpGetPromise: function (url) {
		  return new Promise(function(resolve, reject) {
		    var xhr = new XMLHttpRequest();
		    xhr.open('GET', url, true);

		    xhr.onload = function() {
		      if (this.status == 200) {
		        resolve(this.response);
		      } else {
		        var error = new Error(this.statusText);
		        error.code = this.status;
		        reject(error);
		      }
		    };
		    xhr.onerror = function() {
		      reject(new Error("Network Error"));
		    };
		    xhr.send();
		  });
		}
		
	}

	app.initialize();

}());