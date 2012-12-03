$(document).ready(function(){
	(function($) {
	  var cache = [];
	  $.preLoadImages = function() {
	    var args_len = arguments.length;
	    for (var i = args_len; i--;) {
	      var cacheImage = document.createElement('img');
	      cacheImage.src = arguments[i];
	      cache.push(cacheImage);
	    }
	  }
	})(jQuery)

	jQuery.preLoadImages("/images/purse_back.jpg", "/images/purse.png");

	$(function($){
	   $("#phoneNum").mask("+7 (999) 999-99-99");
	});

	$(".numberFilter").keydown(function(event) {
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
			 (event.keyCode == 65 && event.ctrlKey === true) || 
			 (event.keyCode >= 35 && event.keyCode <= 39)) {
			 return;
		 }
		 else {
			if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault(); 
			}   
		}
	});

	$(".wordFilter").keydown(function(event) {
		if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 111 || event.keyCode >= 186 && event.keyCode <= 222 ) {
			event.preventDefault();
		}
	});

	var jVal = {
		"peoplesCheck": function () {
			var e = $("#peoplesOverall");
			var errorLabel = e.parents("dl"); // у него меняем класс
			
			if(e.val() != 0 && e.val().length != 0) { //если введенная информация верна
				errorLabel.removeClass('error').addClass('valid');
			} else {
				jVal.errors = true;
				errorLabel.removeClass('valid').addClass('error');
			}
		},
		"socialCheck": function () {
			var errorLabel = $("#q2"); // у него меняем класс

			if(errorLabel.find("input:checked").length){
				errorLabel.removeClass('error').addClass('valid');
			} else {
				jVal.errors = true;
				errorLabel.removeClass('valid').addClass('error');
			}
		},
		"lateCheck": function () {
			var errorLabel = $("#q3"); // у него меняем класс

			if(errorLabel.find("input:checked").length){
				errorLabel.removeClass('error').addClass('valid');
			} else {
				jVal.errors = true;
				errorLabel.removeClass('valid').addClass('error');
			}
		},
		"payCheck": function () {
			var e = $("#wage");
			var errorLabel = e.parents("dl"); // у него меняем класс
			
			if(e.val() != 0 && e.val().length != 0) { //если введенная информация верна
				errorLabel.removeClass('error').addClass('valid');
			} else {
				jVal.errors = true;
				errorLabel.removeClass('valid').addClass('error');
			}
		},
		"squareCheck": function () {
			var e = $("#square");
			var errorLabel = e.parents("dl"); // у него меняем класс
			
			if(e.val() != 0 && e.val().length != 0) { //если введенная информация верна
				errorLabel.removeClass('error').addClass('valid');
			} else {
				jVal.errors = true;
				errorLabel.removeClass('valid').addClass('error');
			}
		},
		"lampsCheck": function () {
			var errorLabel = $("#q6"); // у него меняем класс

			if(errorLabel.find("input:checked").length){
				errorLabel.removeClass('error').addClass('valid');
			} else {
				jVal.errors = true;
				errorLabel.removeClass('valid').addClass('error');
			}
		},
		"smokersCheck": function () {

			var e = $("#smokers");
			var errorLabel = e.parents("dl"); // у него меняем класс

			if(e.val().length != 0 && parseInt($("#peoplesOverall").val()) >= parseInt(e.val())) { //если введенная информация верна
				errorLabel.removeClass('error').addClass('valid');
			} else {
				jVal.errors = true;
				errorLabel.removeClass('valid').addClass('error');
			}
		},
		"mobileCheck": function () {
			var errorLabel = $("#q8"); // у него меняем класс

			if(errorLabel.find("input:checked").length){
				errorLabel.removeClass('error').addClass('valid');
			} else {
				jVal.errors = true;
				errorLabel.removeClass('valid').addClass('error');
			}
		},
		"createInfographics": function () {
			if(jVal.errors) {
				$(".error-message").fadeIn();
				flyCheck();
			} else {
				//запретить нажимать несколько раз
				$('.calculate').click(function (){
					return false;
				});
				
				$(".error-message").hide();
				calculate();
				
				$(".form").slideUp(600);

				$(".purse").delay(600)
					.animate({
					 	"top": 100,
					}, {queue:true, duration:800})
					.delay(50).animate({
					 	"marginLeft":"-=250"
					}, 700, "easeOutQuint")
					.animate({
					 	"marginLeft":"+=30"
					}, 50)
					.animate({
					 	"marginLeft":"-=30"
					}, 50)
					.animate({
					 	"marginLeft":"+=30"
					}, 50)
					.animate({
					 	"marginLeft":"-=30"
					}, 50)
					.animate({
					 	"marginLeft":"+=30"
					}, 50)
					.animate({
					 	"marginLeft":"-=30"
					}, 50)
					.delay(100).animate({
					 	"marginLeft":"+=450"
					}, 900, "easeOutQuint")
					.delay(50).animate({
					 	"marginLeft":"-=20"
					}, 50)
					.animate({
					 	"marginLeft":"+=20"
					}, 50)
					.animate({
					 	"marginLeft":"-=20"
					}, 50)
					.animate({
					 	"marginLeft":"+=20"
					}, 50)
					.animate({
					 	"marginLeft":"-=230"
					}, 600, "easeOutQuint")



				$(".infographic").delay(750).slideDown();

				$(".spend-title").delay(1300).animate({
					"paddingTop": 540
				}, 700, "easeOutBack");

				$(".overall").show();

				$(".pos1").delay(2000).animate({
					"top": "70"
				}, 700, "easeOutBack", function(){
					$(".pos1 .monet-text").fadeIn(400);
				});

				$(".pos2").delay(3600).animate({
					"top": "150"
				}, 700, "easeOutBack", function(){
					$(".pos2 .monet-text").fadeIn(400);
				});

				$(".pos3").delay(2200).animate({
					"top": "450"
				}, 1200, "easeOutBack", function(){
					$(".pos3 .monet-text").fadeIn(400);
				});

				$(".pos4").delay(3700).animate({
					"top": "550"
				}, 1200, "easeOutBack", function(){
					$(".pos4 .monet-text").fadeIn(400);
				});

				$(".pos5").delay(2400).animate({
					"top": "887"
				}, 1300, "easeOutBack", function(){
					$(".pos5 .monet-text").fadeIn(400);
					$(".whatToDo-wrapper").show();
				});

				// for(i = 0; i < 6; i++) {
				// 	$(".pos" + i).delay(i * "450").show().animate({
				// 		"top": "+=400"
				// 	});
				// }

				// $(".overall, .whatToDo-wrapper").delay(1500).fadeIn();


			}
		}
	};

	// Проверка на лету 
	var flyCheck = function() {
		$("#peoplesOverall").change(jVal.peoplesCheck);
		$("#peoplesOverall").focusout(jVal.peoplesCheck);
		$("#q2 input").change(jVal.socialCheck);
		$("#q3 input").change(jVal.lateCheck);
		$("#wage").change(jVal.payCheck);
		$("#wage").focusout(jVal.payCheck);
		$("#square").change(jVal.squareCheck);
		$("#square").focusout(jVal.squareCheck);
		$("#q6").change(jVal.lampsCheck);
		$("#smokers").change(jVal.smokersCheck);
		$("#smokers").focusout(jVal.smokersCheck);
		$("#q8").change(jVal.mobileCheck);
	};

	// function number_format (str) {
	//    return str.replace(/(\s)+/g, '').replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ');
	// }

	$(".text-input").keyup(function(event){
		var val = $(this).val();

		// $(this).val(number_format ($(this).val()));

		var people = $(this).parent().find(".people");
		var lastChar = val.substring(val.toString().length - 1); // получаем последнюю цифру
		var lastChar2 = val.substring(val.toString().length - 2); // получаем последнюю цифру
		
		var rub = $(this).parent().find(".rub");
		var wageRub = val.substring(val.toString().length - 1)
		var wageRub2 = val.substring(val.toString().length - 2)

		if (wageRub2 >= 12 && wageRub2 <= 14 || wageRub2 == 11) {
			rub = rub.html(" рублей");
		} else if (wageRub == 1) {
			rub = rub.html(" рубль");
		} else if (wageRub >= 2 && wageRub <= 4) {
			rub = rub.html(" рубля");
		} else {
			rub = rub.html(" рублей");
		}

		if (lastChar2 >= 12 && lastChar2 <= 14) {
			people = people.html(" человек");
		} else if (lastChar >= 2 && lastChar <= 4) {
			people = people.html(" человека");
		} else {
			people = people.html(" человек");
		}
	});

	$('.calculate').click(function (){
		jVal.errors = false;
		jVal.peoplesCheck();
		jVal.socialCheck();
		jVal.lateCheck();
		jVal.payCheck();
		jVal.squareCheck();
		jVal.lampsCheck();
		jVal.smokersCheck();
		jVal.mobileCheck();

		jVal.createInfographics();
			
		return false;
	});

	$(".try").click(function(){
		window.location.reload();
		return false;
	});



	$(".whatToDo").click(function(){
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));


		var doc = $(document).height();
		var rec = $(".recommendations").height()
		var obj = $.browser.webkit ? $('body') : $('html');
		console.log("rec " + rec)

		$(".recommendations").slideDown(300);
		$(obj).animate({
			"scrollTop": "+=" + rec
		}, 1000, "easeOutCirc");

		return false;
	});

	var overallFinall = 0;

	var calculate = function () {
		//Получаем значения всех полей для их дальнейшей обработки
		var peoplesOverall = parseInt($("#peoplesOverall").val());
		var social = $("#q2").find("input:checked").prop("id");
		var late = $("#q3").find("input:checked").attr("value");
		var pay = parseInt($("#wage").val()) * 12;//зарплата всех работников в год
		var wage = parseInt($("#wage").val());
		var square = $("#square").val();
		var lamps = $("#q6").find("input:checked").prop("id");
		var smokers = parseInt($("#smokers").val());
		var mobile = $("#q8").find("input:checked").prop("id");
		var str = document.location.href;
		$.ajax({
		url: 'answer.php?peoplesOverall='+peoplesOverall+"&social="+social+"&late="+late+"&wage="+wage+"&square="+square+"&lamps="+lamps+"&smokers="+smokers+"&mobile="+mobile,
		});
		console.log("peoplesOverall " + peoplesOverall)
		console.log("social " + social)
		console.log("late " + late)
		console.log("pay " + pay)
		console.log("square " + square)
		console.log("lamps " + lamps)
		console.log("smokers " + smokers)
		console.log("mobile " + mobile)
		console.log("____________________")





	//Считаем время стоимость минуты работника
		var workTime = peoplesOverall * 120000; //минут в год на всех человек
		var workTimeCost = pay/workTime; //стоимость 1 минуты всех работников
		console.log("Стоимость 1 минуты работника " + workTimeCost);

	//Расход  лишнего времени на соц. сети
		var loseTimeInSocial, loseTimeInSocialHrs, loseTimeInSocialCost;
		
		if (social == "socialEnabled") {
			loseTimeInSocial = peoplesOverall * 30 * 250; // количество минут в год
			loseTimeInSocialHrs = Math.round(loseTimeInSocial/60); // количество часов в год
			loseTimeInSocialCost = loseTimeInSocial * workTimeCost;

			$("#advice-social").show();

			//console.log("Вы теряете " + loseTimeInSocial + " минут в год на соц. сетях") 
			//console.log("Вы теряете " + loseTimeInSocialCost + " рублей в год на соц. сетях") 
		} else {
			loseTimeInSocial = 0;
			loseTimeInSocialCost = 0;
			loseTimeInSocialHrs = 0;
			$(".pos4 .monet-text").html('из-за социальных сетей')
			//console.log("Вы экономите " + loseTimeInSocialCost + " минут в год на соц. сетях") // здесь код, который формирует инфографику
		};



	//Использование ламп 
		var lumens = 300 * square;
		var lampsAmount = Math.round(lumens / 1600);
		var lampsOverall = lampsAmount * 0.1 * 8 * 20 * 12 * 4 * 0.75; //Столько платим в год с лампами накаливания (руб.)
		var lampsResultPay = 0;
		var lampsEconomy = lampsOverall - lampsResultPay; //Столько теряем в год и будем экономить если поставим нормальные лампы соответсвенно

		if (lamps == "lampsYes") {
			//console.log("Вы экономите на лампах накаливания " + lampsEconomy + " рублей в год") // здесь код, который формирует инфографику
			lampsOverall = 0;
			$(".pos1 .monet-text").html('из-за ламп накаливания');
		} else {
			$("#advice-lamps").show()
			//console.log("Вы теряете на лампах накаливания " + lampsEconomy + " рублей в год") 
		};

		//console.log("Экономите на лампах " + lampsEconomy);

	//Плата за ежедневные опаздания в год для всех сотрудников
		var latePayMinutes = late * peoplesOverall * 250; // количество минут в год
		var latePayHrs = Math.round(latePayMinutes/60);
		var latePay = latePayMinutes * workTimeCost;

		//console.log(latePayHrs)

		if(late == 0) {
			//console.log("Вы экономите на опозданиях");
			$(".pos5 .monet-text").html('из-за опозданий')
		} else {
			$("#advice-late").show();
			//console.log(latePayMinutes + " минут в год вы теряете на опозданиях ваших сотрудников");
		}

	//Убытки от курящих сотрудников
		var smokersTimeMinutes = smokers * 40 * 250; // количество минут на всех курильщиков
		var smokersTimeHrs = Math.round(smokersTimeMinutes/60);
		var smokersTimeCost = workTimeCost * smokersTimeMinutes;
		
		console.log("Убытки от курильщиков в год " + smokersTimeCost);

		if (smokers != 0){
			$("#advice-smoke").show();
			//console.log("Вы тратите на курящих сотрудников " + smokersTimeHrs + " часов в год");//количество часов в год
		} else {
			smokersTimeCost = 0;
			$(".pos3 .monet-text").html("из-за перекуров")
			//console.log("Вы экономите на курящих сотрудниках " + smokersTimeHrs + " часов в год")
		}

	//Убытки от использования обычных тарифов
		
		//Chelyabinsk
		// var monthPayForTalk = 238;
		// var monthBenefitPercent = 30;

		//Tomsk
		var monthPayForTalk = 203;
		var monthBenefitPercent = 40;

		var yearEconomyForTalk = Math.round( ( (monthPayForTalk/100) * monthBenefitPercent) * 12 * peoplesOverall)


		if (mobile == "mobileYes") {
			yearEconomyForTalk = 0;
			$("#advice-mobile").show();
			//console.log("Подключите тариф Tele2, так как он еще выгоднее")
		} else {
			$("#advice-mobile2").show();
			//console.log("Вы можете сэкономить " + yearEconomyForTalk + " рублей в год на бизнес тарифах")
		}

	//Итого

		var overallSumm = Math.round((loseTimeInSocial + latePayMinutes + smokersTimeMinutes) * workTimeCost + lampsOverall + yearEconomyForTalk); //столько оплачиваем зря
		if(overallSumm == 0) $(".overall").html("Осталось выяснить, на чем можно сэкономить");

		//console.log("Итого вы тратите " + overallSumm + " рублей в год зря")
		//console.log("___________________________________________________")

		//Create infographics
		

	// Создаем монетки
		
		console.log("lampsOverall " + lampsOverall)
		console.log("yearEconomyForTalk " + yearEconomyForTalk)
		console.log("smokersTimeCost " + smokersTimeCost)
		console.log("loseTimeInSocialCost " + loseTimeInSocialCost)
		console.log("latePay " + latePay)

		// createMonet($(".pos1"), lampsOverall);
		// createMonet($(".pos2"), yearEconomyForTalk);
		// createMonet($(".pos3"), smokersTimeCost, smokersTimeHrs);
		// createMonet($(".pos4"), loseTimeInSocialCost, loseTimeInSocialHrs);
		// createMonet($(".pos5"), latePay, latePayHrs);

		var m1 = createMonet($(".pos1"), lampsOverall);
		var m2 = createMonet($(".pos2"), yearEconomyForTalk);
		var m3 = createMonet($(".pos3"), smokersTimeCost, smokersTimeHrs);
		var m4 = createMonet($(".pos4"), loseTimeInSocialCost, loseTimeInSocialHrs);
		var m5 = createMonet($(".pos5"), latePay, latePayHrs);

		
		console.log(overallSumm = m1 + m2 + m3 + m4 + m5);	

		overallSumm = overallSumm.toString().replace( /(?=\B(?:\d{3})+\b)/g, '<ins class="spacer">&nbsp;</ins>' );
		var overallSummLastChar = overallSumm.toString().substring(overallSumm.toString().length - 1 );
		var rubls = " рублей";
		
		if(overallSumm.length <= 3) {
			if (overallSummLastChar == 1) {
				rubls = " рубль"
			} else if (overallSummLastChar >= 2 && overallSummLastChar <=4) {
				rubls = " рубля"
			}
		}

		$(".red").html(overallSumm + rubls);

		// overallFinall = overallFinall.toString().replace( /(?=\B(?:\d{3})+\b)/g, '<ins class="spacer">&nbsp;</ins>' );
		// var overallSummLastChar = overallFinall.toString().substring(overallSumm.toString().length - 1 );
		// var rubls = " рублей";
		
		// if(overallFinall.length <= 3) {
		// 	if (overallSummLastChar == 1) {
		// 		rubls = " рубль"
		// 	} else if (overallSummLastChar >= 2 && overallSummLastChar <=4) {
		// 		rubls = " рубля"
		// 	}
		// }
		// $(".red").html(overallFinall + rubls);
	};

	var createMonet = function(position, money, hrs){
			var pos = position;
			money = Math.round(money);
			var moneyLast = money.toString().substring(money.toString().length - 1 );

			if(hrs != undefined) {
				pos.find(".hrs").html(hrs.toString().replace( /(?=\B(?:\d{3})+\b)/g, '<span class="hrs-spacer">&nbsp;</span>'));
			}
			
			pos.removeClass("monet1"); //удалить после отладки
			
			if (money == 0) {
				pos.addClass("monet1");
				pos.find(".monet-numbers").append('<ins class="x0"></ins>');

				money = 0;
				return money;

			} else if (money < 1000) {
				pos.addClass("monet3");
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(0) + '"></ins>');
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(1) + '"></ins>');
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(2) + '"></ins>');

				if (moneyLast == 1) {
					pos.addClass("rubl");
				} else if (moneyLast >= 2 && moneyLast <=4) {
					pos.addClass("rublya");
				}

				money = parseInt(money.toString().charAt(0) + money.toString().charAt(1) + money.toString().charAt(2));
				return money;
			} 

			if(money > 1000 && money < 1000000) {
				money = Math.round(money / 1000) * 1000;
			} else if(money > 1000000 && money < 1000000000) {
				money = Math.round(money / 1000000) * 1000000;
			}

			if (money >= 1000 && money < 10000 ) {
				pos.addClass("monet1 ths");

				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(0) + '"></ins>');

				money = parseInt(money.toString().charAt(0) + "000");
				return money;
				
			} else if (money >= 10000 && money < 100000 ) {
				pos.addClass("monet2 ths");

				// money = Math.round(money / 1000) * 1000;

				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(0) + '"></ins>');
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(1) + '"></ins>');
				
				money = parseInt(money.toString().charAt(0) + money.toString().charAt(1) + "000");
				return money;

			} else if (money >= 100000 && money < 1000000 ) {
				pos.addClass("monet3 ths");

				// money = Math.round(money / 1000) * 1000;

				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(0) + '"></ins>');
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(1) + '"></ins>');
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(2) + '"></ins>');

				money = parseInt(money.toString().charAt(0) + money.toString().charAt(1) + money.toString().charAt(2) + "000");
				return money;

			} else if (money >= 1000000 && money < 10000000 ) {
				pos.addClass("monet1 mln");

				// money = Math.round(money / 1000000) * 1000000;

				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(0) + '"></ins>');

				money = parseInt(money.toString().charAt(0) + "000000");
				return money;

			} else if (money >= 10000000 && money < 100000000 ) {
				pos.addClass("monet2 mln");

				// money = Math.round(money / 1000000) * 1000000;

				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(0) + '"></ins>');
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(1) + '"></ins>');

				money = parseInt(money.toString().charAt(0) + money.toString().charAt(1) + "000000");
				return money;

			} else if (money >= 100000000 && money < 1000000000 ) {
				pos.addClass("monet3 mln");
				// money = Math.round(money / 1000000) * 1000000;
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(0) + '"></ins>');
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(1) + '"></ins>');
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(2) + '"></ins>');

				money = parseInt(money.toString().charAt(0) + money.toString().charAt(1) + money.toString().charAt(2) + "000000");
				return money;
				
			} else if (money >= 1000000000 && money < 10000000000 ) {
				pos.addClass("monet1");
				pos.find(".monet-numbers").append('<ins class="xInfinity"></ins>');

				money = 0;
				return money;
			} else {
				pos.addClass("monet1");
				pos.find(".monet-numbers").append('<ins class="x' + money.toString().charAt(0) + '"></ins>');

				money = parseInt(money.toString().charAt(0));
				return money;
			}
		}

	// Radio buttons
	$(".button-small, .button-big").click(function(){
		var wrapper = $(this).parents("dd");

		wrapper.find("label").removeClass("checked");
		wrapper.find("input").removeAttr("checked");

		$(this).addClass("checked");
		$(this).parent().find("input").attr("checked", "checked")
	});
	
	$('.input-button').find('ins,input').click(function() {
		var $this = $(this);
		var form = $this.closest('form');
		form.find('.message').css('visibility','hidden');
		$.post('send.php',form.serialize(),function(data) {
			if (data.response == 'success') {
				form.find('.message').css('visibility','visible');
				form.find(':text').val('');
			}
		},'json');
		return false;
	})
});








