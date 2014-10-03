/*    $(document).ready(function() {
      $('.form_error').hide();
      $('#submit').click(function(){
           var name = $('#name').val();
           var email = $('#email').val();
           var phone = $('#phone').val();
           var message = $('#message').val();
           if(name== ''){
              $('#name').next().show();
              return false;
            }
            if(email== ''){
               $('#email').next().show();
               return false;
            }
            if(IsEmail(email)==false){
                $('#invalid_email').show();
                return false;
            }

            if(phone== ''){
                $('#phone').next().show();
                return false;
            }
            if(message== ''){
                $('#message').next().show();
                return false;
            }
            //ajax call php page
            $.post("send.php", $("#contactform").serialize(),  function(response) {
            $('#contactform').fadeOut('slow',function(){
                $('#success').html(response);
                $('#success').fadeIn('slow');
               });
             });
             return false;
          });
 
 
      });*/
$(document).ready(function() {
	$('.form_error').hide();
	
	$("#shopname").keypress(function(event) {
		$('#invalid_shopname').hide();
	});
	
	$("#abn").keypress(function(event) {
		$('#invalid_abn').hide();
	});
	
	$("#address").keypress(function(event) {
		$('#invalid_address').hide();
	});
	
	$("#mobilephone").keypress(function(event) {
		$('#invalid_mobilephone').hide();
	});
		
	$("#email").keypress(function(event) {
		$('#invalid_email').hide();
	});
		
    $(".number").keypress(function(event) {
        return /\d/.test(String.fromCharCode(event.keyCode));
    });
});
$('#order-now').live("click", function() {
	var url = 'http://www.currymasters.com.au/currymastersWS/writeJSONp/order.php';
	var error = 0;
	var $orderpage = $(this).closest('.ui-page');
	var $orderform = $(this).closest('.order-form');	
	$('.required', $orderform).each(function (i) {
        if ($(this).val() === '') {
			error++;
        } 
	}); // each
	if (error > 0) {
			alert('Please fill in all the mandatory fields. Mandatory fields are marked with an asterisk *.');	
	} else {
			
		var shopname = $orderform.find('input[name="shopname"]').val();
		var abn = $orderform.find('input[name="abn"]').val();
		var address = $orderform.find('textarea[name="address"]').val();	
		var state = $orderform.find('select[name="state"]').val();
		var mobilephone = $orderform.find('input[name="mobilephone"]').val();
		var phone = $orderform.find('input[name="phone"]').val();
		var email = $orderform.find('input[name="email"]').val();	
		var message = $orderform.find('textarea[name="message"]').val();	

		var ordererror = 0;
			
			//Shopkeeper order form validation
            if(shopname.length <2){
               $('#invalid_shopname').show();
			   ordererror++;
               //return false;
            }
			
            if(abn.length != 11){
               $('#invalid_abn').show();
			   ordererror++;
               //return false;
            }			

            if(address.length < 5){
               $('#invalid_address').show();
			   ordererror++;
               //return false;
            }			
									
            if(email== ''){
               $('#email').next().show();
			   ordererror++;
               //return false;
            }
            if(IsEmail(email)==false){
                $('#invalid_email').show();
				ordererror++;
                //return false;
            }
					
            if(mobilephone.length != 10){
               $('#invalid_mobilephone').show();
			   ordererror++;
               //return false;
            }			
			
			if (ordererror > 0) {
				return false;
			}


    			    //Shopkeeper Order Products
						//Tandoori Masala
						var TandooriMasala = $orderform.find('input[name="TandooriMasala"]').val();	
						var TandooriMasalakg = $orderform.find('input[name="TandooriMasalakg"]').val();	



                    	//Mint Chutney
                        var MintChutney = $orderform.find('input[name="MintChutney"]').val();	 
                        var MintChutneykg = $orderform.find('input[name="MintChutneykg"]').val();	 
                    
                	
                		//Biryani Masala
                        var BiryaniMasala = $orderform.find('input[name="BiryaniMasala"]').val();	 
                        var BiryaniMasalakg = $orderform.find('input[name="BiryaniMasalakg"]').val();	 
                    
                	
                    	//Chicken Korma
                        var ChickenKorma = $orderform.find('input[name="ChickenKorma"]').val();	 
                        var ChickenKormakg = $orderform.find('input[name="ChickenKormakg"]').val();	 
                    
                  	
                    	//Mix Vegetable
                        var MixVegetable = $orderform.find('input[name="MixVegetable"]').val();	 
                        var MixVegetablekg = $orderform.find('input[name="MixVegetablekg"]').val();	 
                    
                	
                    	//Fish Goa
                        var FishGoa = $orderform.find('input[name="FishGoa"]').val();	 
                        var FishGoakg = $orderform.find('input[name="FishGoakg"]').val();	 
                   	
                	
                    	//Rogan Josh
                        var RoganJosh = $orderform.find('input[name="RoganJosh"]').val();	 
                        var RoganJoshkg = $orderform.find('input[name="RoganJoshkg"]').val();	 
                    
                	
                    	//Butter Chicken
                        var ButterChicken = $orderform.find('input[name="ButterChicken"]').val();	 
                        var ButterChickenkg = $orderform.find('input[name="ButterChickenkg"]').val();	 
                    
                	
                    	//Vindaloo Curry
                        var VindalooCurry = $orderform.find('input[name="VindalooCurry"]').val();	 
                        var VindalooCurrykg = $orderform.find('input[name="VindalooCurrykg"]').val();	 
                    
                	
                    	//Chicken Tikka Masala
                        var ChickenTikkaMasala = $orderform.find('input[name="ChickenTikkaMasala"]').val();	 
                        var ChickenTikkaMasalakg = $orderform.find('input[name="ChickenTikkaMasalakg"]').val();	 
                    
                	
                    	//Chicken Delhi
                        var ChickenDelhi = $orderform.find('input[name="ChickenDelhi"]').val();	 
                        var ChickenDelhikg = $orderform.find('input[name="ChickenDelhikg"]').val();	 
                    
                	
                    	//White Korma
                        var WhiteKorma = $orderform.find('input[name="WhiteKorma"]').val();	 
                        var WhiteKormakg = $orderform.find('input[name="WhiteKormakg"]').val();	 
                    
                	    //Saag Gosht
                    	var SaagGosht = $orderform.find('input[name="SaagGosht"]').val();	 
                        var SaagGoshtkg = $orderform.find('input[name="SaagGoshtkg"]').val();	 
                    
                	
                    	//Shahi Paneer
                        var ShahiPaneer = $orderform.find('input[name="ShahiPaneer"]').val();	 
                        var ShahiPaneerkg = $orderform.find('input[name="ShahiPaneerkg"]').val();	
                    
                	
                    	//Prawn Curry
                        var PrawnCurry = $orderform.find('input[name="PrawnCurry"]').val();	 
                        var PrawnCurrykg = $orderform.find('input[name="PrawnCurrykg"]').val();	 
                    
                	
                    	//Hydrabadi Biryani
                        var HydrabadiBiryani = $orderform.find('input[name="HydrabadiBiryani" ]').val();	
                        var HydrabadiBiryanikg = $orderform.find('input[name="HydrabadiBiryanikg"]').val();	 
                    
                	
                    	//Chicken 65
                        var Chicken65 = $orderform.find('input[name="Chicken65"]').val();	 
                        var Chicken65kg = $orderform.find('input[name="Chicken65kg"]').val();	 
                    
                	
                    	//Amritsari Fish
                        var AmritsariFish = $orderform.find('input[name="AmritsariFish"]').val();	 
                        var AmritsariFishkg = $orderform.find('input[name="AmritsariFishkg"]').val();	 
                    
                	
                    	//Lamb Korma
                        var LambKorma = $orderform.find('input[name="LambKorma"]').val();	 
                        var LambKormakg = $orderform.find('input[name="LambKormakg"]').val();	 
                    
                	
                    	//Madras Curry
                        var MardesCurry = $orderform.find('input[name="MardesCurry"]').val();	 
                        var MardesCurrykg = $orderform.find('input[name="MardesCurrykg"]').val();	 
                    
                	
                    	//Kashmiri Chicken
                        var KashmiriChicken = $orderform.find('input[name="KashmiriChicken"]').val();	 
                        var KashmiriChickenkg = $orderform.find('input[name="KashmiriChickenkg"]').val();	 
                    
                	
                    	//Goat Meat Curry
                        var GoatMeatCurry = $orderform.find('input[name="GoatMeatCurry"]').val();	 
                        var GoatMeatCurrykg = $orderform.find('input[name="GoatMeatCurrykg"]').val();	 
                    
                	
                    	//Balti Chicken
                        var BaltiChicken = $orderform.find('input[name="BaltiChicken"]').val();	 
                        var BaltiChickenkg = $orderform.find('input[name="BaltiChickenkg"]').val();	 
                    
                	
                    	//Nawabi Chicken
                        var NawabiChicken = $orderform.find('input[name="NawabiChicken"]').val();	 
                        var NawabiChickenkg = $orderform.find('input[name="NawabiChickenkg"]').val();	 
                    
                	
                    	//Tawa Fry Veggie
                        var TawaFryVeggie = $orderform.find('input[name="TawaFryVeggie"]').val();	 
                        var TawaFryVeggiekg = $orderform.find('input[name="TawaFryVeggiekg"]').val();	 
                    
                	
                    	//Achar Gosht
                        var AcharGosht = $orderform.find('input[name="AcharGosht"]').val();	 
                        var AcharGoshtkg = $orderform.find('input[name="AcharGoshtkg"]').val();	 
                    
                	
                    	//Kadai Chicken
                        var KadaiChicken = $orderform.find('input[name="KadaiChicken"]').val();	 
                        var KadaiChickenkg = $orderform.find('input[name="KadaiChickenkg"]').val();	 
                    
                	
                    	//Nizami Keema
                        var NizamiKeema = $orderform.find('input[name="NizamiKeema"]').val();	 
                        var NizamiKeemakg = $orderform.find('input[name="NizamiKeemakg"]').val();	 
                    
                	
                    	//Chicken Jalfrezi
                        var ChickenJalfrezi = $orderform.find('input[name="ChickenJalfrezi"]').val();	 
                        var ChickenJalfrezikg = $orderform.find('input[name="ChickenJalfrezikg"]').val();	 
                    
                	
                    	//Chicken Chill
                        var ChickenChill = $orderform.find('input[name="ChickenChill"]').val();	 
                        var ChickenChillkg = $orderform.find('input[name="ChickenChillkg"]').val(); 
                    
                	
                    	//Aloo Gobhi
                        var AlooGobhi = $orderform.find('input[name="AlooGobhi"]').val();	 
                        var AlooGobhikg = $orderform.find('input[name="AlooGobhikg"]').val();	 
                    
                	
                    	//Thai Green Curry
                        var ThaiGreenCurry = $orderform.find('input[name="ThaiGreenCurry"]').val();	 
                        var ThaiGreenCurrykg = $orderform.find('input[name="ThaiGreenCurrykg"]').val();	 
                    
                	
                    	//Mutter Paneer
                        var MutterPaneer = $orderform.find('input[name="MutterPaneer"]').val();	 
                        var MutterPaneerkg = $orderform.find('input[name="MutterPaneerkg"]').val();	 
                    
                	
                    	//Palak Paneer
                        var PalakPaneer = $orderform.find('input[name="PalakPaneer"]').val();	 
                        var PalakPaneerkg = $orderform.find('input[name="PalakPaneerkg"]').val();	 
                    
                	
                    	//Food Colour Ask Us
                        var FoodColourAskUs = $orderform.find('input[name="FoodColourAskUs"]').val();	 
                        var FoodColourAskUskg = $orderform.find('input[name="FoodColourAskUskg"]').val();	 
                    
                	
                    	//Daal Makhani
                        var DaalMakhani = $orderform.find('input[name="DaalMakhani"]').val();	 
                        var DaalMakhanikg = $orderform.find('input[name="DaalMakhanikg"]').val();	 
                    
                	
                    	//Jungle Curry
                        var JungleCurry = $orderform.find('input[name="JungleCurry"]').val();	 
                        var JungleCurrykg = $orderform.find('input[name="JungleCurrykg"]').val();	 
                    
                	
                    	//Massaman Curry
                        var MassamanCurry = $orderform.find('input[name="MassamanCurry"]').val();	 
                        var MassamanCurrykg = $orderform.find('input[name="MassamanCurrykg"]').val();	 
                    
                	
                    	//Red Curry
                        var RedCurry = $orderform.find('input[name="RedCurry"]').val();	 
                        var RedCurrykg = $orderform.find('input[name="RedCurrykg"]').val();	 
                    
                	
                    	//Mango Chicken
                        var MangoChicken = $orderform.find('input[name="MangoChicken" ]').val();	
                        var MangoChickenkg = $orderform.find('input[name="MangoChickenkg"]').val();	 
                    
                	
                    	//Chicken Chettinad
                        var ChickenChettinad = $orderform.find('input[name="ChickenChettinad"]').val();	 
                        var ChickenChettinadkg = $orderform.find('input[name="ChickenChettinadkg"]').val();	 
                    
                	
                    	//Lamb Dhanksak
                        var LambDhanksak = $orderform.find('input[name="LambDhanksak"]').val();	 
                        var LambDhanksakkg = $orderform.find('input[name="LambDhanksakkg"]').val();	 
                    
                		
                    	//Rajma Curry
                        var RajmaCurry = $orderform.find('input[name="RajmaCurry"]').val();	 
                        var RajmaCurrykg = $orderform.find('input[name="RajmaCurrykg"]').val();	 
                    
                	
                    	//Lamb Curry
                        var LambCurry = $orderform.find('input[name="LambCurry"]').val();	 
                        var LambCurrykg = $orderform.find('input[name="LambCurrykg"]').val();	 
                    
                	
                    	//Chicken Curry
                        var ChickenCurry = $orderform.find('input[name="ChickenCurry"]').val();	 
                        var ChickenCurrykg = $orderform.find('input[name="ChickenCurrykg"]').val();	 
                    
                	
                    	//Lamb Shank
                        var LambShank = $orderform.find('input[name="LambShank"]').val();	 
                        var LambShankkg = $orderform.find('input[name="LambShankkg"]').val();	 
                    
                	
                    	//Fish Curry
                        var FishCurry = $orderform.find('input[name="FishCurry"]').val();	 
                        var FishCurrykg = $orderform.find('input[name="FishCurrykg"]').val();	 
                    
                	
                    	//Singapore Fish Head Curry
                        var SingaporeFishHeadCurry = $orderform.find('input[name="SingaporeFishHeadCurry"]').val();	 
                        var SingaporeFishHeadCurrykg = $orderform.find('input[name="SingaporeFishHeadCurrykg"]').val();	 
                    
                	
                    	//Singapore Chilli Crab
                        var SingaporeChilliCrab = $orderform.find('input[name="SingaporeChilliCrab"]').val();	 
                        var SingaporeChilliCrabkg = $orderform.find('input[name="SingaporeChilliCrabkg"]').val();	 
                    
                	
                    	//Rendang Curry
                        var Rendang = $orderform.find('input[name="Rendang"]').val();	 
                        var Rendangkg = $orderform.find('input[name="Rendangkg"]').val();	 
                    
                	
                    	//Panang Curry
                        var Panang = $orderform.find('input[name="Panang"]').val();	 
                        var Panangkg = $orderform.find('input[name="Panangkg"]').val();	 
                    
                	
                    	//Durban Bunny Chow Curry
                        var DurbanBunnyChowCurry = $orderform.find('input[name="DurbanBunnyChowCurry"]').val();	 
                        var DurbanBunnyChowCurrykg = $orderform.find('input[name="DurbanBunnyChowCurrykg"]').val();	 
                    
                	
                    	//Peri Peri Seasoning
                        var PeriPeri = $orderform.find('input[name="PeriPeri"]').val();	 
                        var PeriPerikg = $orderform.find('input[name="PeriPerikg"]').val();	 
                    
                	
                    	//Harissa Seasoning
                        var Harissa = $orderform.find('input[name="Harissa"]').val();	 
                        var Harissakg = $orderform.find('input[name="Harissakg"]').val();	 
                    
                	
                    	//Cajun Seasoning
                        var Cajun = $orderform.find('input[name="Cajun"]').val();	 
                        var Cajunkg = $orderform.find('input[name="Cajunkg"]').val();	 
                    
                	
                    	//Chipotle Seasoning
                        var Chipotle = $orderform.find('input[name="Chipotle"]').val();	 
                        var Chipotlekg = $orderform.find('input[name="Chipotlekg"]').val();	 
                    
                	
                    	//Fried Rice Seasoning
                        var FriedRice = $orderform.find('input[name="FriedRice"]').val();	 
                        var FriedRicekg = $orderform.find('input[name="FriedRicekg"]').val();	 
                    
                	
                    	//Moroccan Seasoning
                        var Moroccan = $orderform.find('input[name="Moroccan"]').val();	 
                        var Moroccankg = $orderform.find('input[name="Moroccankg"]').val();	 
                    
                	
                    	//Paella Seasoning
                        var Paella = $orderform.find('input[name="Paella"]').val();	 
                        var Paellakg = $orderform.find('input[name="Paellakg"]').val();	 
                    
                	
                    	//Portugese Seasoning
                        var Portugese = $orderform.find('input[name="Portugese"]').val();	 
                        var Portugesekg = $orderform.find('input[name="Portugesekg"]').val();	 
                    


        var success = function (response) {
				if (response == 'success') {
					// show thank you 
					$orderpage.find('.order-thankyou').show();
					$orderpage.find('.order-form').hide();
				}  else {
					alert('Unable to process your order. Please try again.');
				}
			}

		
		//submit the form
		$.ajax({
			type: "GET",
			url: url,
			data: {
					shopname:shopname, 
					abn:abn, 
					address: address, 
					state: state, 
					mobilephone: mobilephone, 
					phone: phone, 
					email: email, 
					message: message, 
					
						//Tandoori Masala
						TandooriMasala: TandooriMasala,
						TandooriMasalakg: TandooriMasalakg,


                    	//Mint Chutney
                        MintChutney: MintChutney,	 
                        MintChutneykg: MintChutneykg,	 
                    
                	
                		//Biryani Masala
                        BiryaniMasala: BiryaniMasala,	 
                        BiryaniMasalakg: BiryaniMasalakg,	 
                    
                	
                    	//Chicken Korma
                        ChickenKorma: ChickenKorma,	 
                        ChickenKormakg: ChickenKormakg,	 
                    
                  	
                    	//Mix Vegetable
                        MixVegetable: MixVegetable,	 
                        MixVegetablekg: MixVegetablekg,	 
                    
                	
                    	//Fish Goa
                        FishGoa: FishGoa,	 
                        FishGoakg: FishGoakg,	 
                   	
                	
                    	//Rogan Josh
                        RoganJosh: RoganJosh,	 
                        RoganJoshkg: RoganJoshkg,	 
                    
                	
                    	//Butter Chicken
                        ButterChicken: ButterChicken,	 
                        ButterChickenkg: ButterChickenkg,	 
                    
                	
                    	//Vindaloo Curry
                        VindalooCurry: VindalooCurry,	 
                        VindalooCurrykg: VindalooCurrykg,	 
                    
                	
                    	//Chicken Tikka Masala
                        ChickenTikkaMasala: ChickenTikkaMasala,	 
                        ChickenTikkaMasalakg: ChickenTikkaMasalakg,	 
                    
                	
                    	//Chicken Delhi
                        ChickenDelhi: ChickenDelhi,	 
                        ChickenDelhikg: ChickenDelhikg,	 
                    
                	
                    	//White Korma
                        WhiteKorma: WhiteKorma,	 
                        WhiteKormakg: WhiteKormakg,	 
                    
                	    //Saag Gosht
                    	SaagGosht: SaagGosht,	 
                        SaagGoshtkg: SaagGoshtkg,	 
                    
                	
                    	//Shahi Paneer
                        ShahiPaneer: ShahiPaneer,	 
                        ShahiPaneerkg: ShahiPaneerkg,	
                    
                	
                    	//Prawn Curry
                        PrawnCurry: PrawnCurry,	 
                        PrawnCurrykg: PrawnCurrykg,	 
                    
                	
                    	//Hydrabadi Biryani
                        HydrabadiBiryani: HydrabadiBiryani,	 	
                        HydrabadiBiryanikg: HydrabadiBiryanikg,	 
                    
                	
                    	//Chicken 65
                        Chicken65: Chicken65,	 
                        Chicken65kg: Chicken65kg,	 
                    
                	
                    	//Amritsari Fish
                        AmritsariFish: AmritsariFish,	 
                        AmritsariFishkg: AmritsariFishkg,	 
                    
                	
                    	//Lamb Korma
                        LambKorma: LambKorma,	 
                        LambKormakg: LambKormakg,	 
                    
                	
                    	//Madras Curry
                        MardesCurry: MardesCurry,	 
                        MardesCurrykg: MardesCurrykg,	 
                    
                	
                    	//Kashmiri Chicken
                        KashmiriChicken: KashmiriChicken,	 
                        KashmiriChickenkg: KashmiriChickenkg,	 
                    
                	
                    	//Goat Meat Curry
                        GoatMeatCurry: GoatMeatCurry,	 
                        GoatMeatCurrykg: GoatMeatCurrykg,	 
                    
                	
                    	//Balti Chicken
                        BaltiChicken: BaltiChicken,	 
                        BaltiChickenkg: BaltiChickenkg,	 
                    
                	
                    	//Nawabi Chicken
                        NawabiChicken: NawabiChicken,	 
                        NawabiChickenkg: NawabiChickenkg,	 
                    
                	
                    	//Tawa Fry Veggie
                        TawaFryVeggie: TawaFryVeggie,	 
                        TawaFryVeggiekg: TawaFryVeggiekg,	 
                    
                	
                    	//Achar Gosht
                        AcharGosht: AcharGosht,	 
                        AcharGoshtkg: AcharGoshtkg,	 
                    
                	
                    	//Kadai Chicken
                        KadaiChicken: KadaiChicken,	 
                        KadaiChickenkg: KadaiChickenkg,	 
                    
                	
                    	//Nizami Keema
                        NizamiKeema: NizamiKeema,	 
                        NizamiKeemakg: NizamiKeemakg,	 
                    
                	
                    	//Chicken Jalfrezi
                        ChickenJalfrezi: ChickenJalfrezi,	 
                        ChickenJalfrezikg: ChickenJalfrezikg,	 
                    
                	
                    	//Chicken Chill
                        ChickenChill: ChickenChill,	 
                        ChickenChillkg: ChickenChillkg, 
                    
                	
                    	//Aloo Gobhi
                        AlooGobhi: AlooGobhi,	 
                        AlooGobhikg: AlooGobhikg,	 
                    
                	
                    	//Thai Green Curry
                        ThaiGreenCurry: ThaiGreenCurry,	 
                        ThaiGreenCurrykg: ThaiGreenCurrykg,	 
                    
                	
                    	//Mutter Paneer
                        MutterPaneer: MutterPaneer,	 
                        MutterPaneerkg: MutterPaneerkg,	 
                    
                	
                    	//Palak Paneer
                        PalakPaneer: PalakPaneer,	 
                        PalakPaneerkg: PalakPaneerkg,	 
                    
                	
                    	//Food Colour Ask Us
                        FoodColourAskUs: FoodColourAskUs,	 
                        FoodColourAskUskg: FoodColourAskUskg,	 
                    
                	
                    	//Daal Makhani
                        DaalMakhani: DaalMakhani,	 
                        DaalMakhanikg: DaalMakhanikg,	 
                    
                	
                    	//Jungle Curry
                        JungleCurry: JungleCurry,	 
                        JungleCurrykg: JungleCurrykg,	 
                    
                	
                    	//Massaman Curry
                        MassamanCurry: MassamanCurry,	 
                        MassamanCurrykg: MassamanCurrykg,	 
                    
                	
                    	//Red Curry
                        RedCurry: RedCurry,	 
                        RedCurrykg: RedCurrykg,	 
                    
                	
                    	//Mango Chicken
                        MangoChicken: MangoChicken,	 
                        MangoChickenkg: MangoChickenkg,	 
                    
                	
                    	//Chicken Chettinad
                        ChickenChettinad: ChickenChettinad,	 
                        ChickenChettinadkg: ChickenChettinadkg,	 
                    
                	
                    	//Lamb Dhanksak
                        LambDhanksak: LambDhanksak,	 
                        LambDhanksakkg: LambDhanksakkg,	 
                    
                		
                    	//Rajma Curry
                        RajmaCurry: RajmaCurry,	 
                        RajmaCurrykg: RajmaCurrykg,	 
                    
                	
                    	//Lamb Curry
                        LambCurry: LambCurry,	 
                        LambCurrykg: LambCurrykg,	 
                    
                	
                    	//Chicken Curry
                        ChickenCurry: ChickenCurry,	 
                        ChickenCurrykg: ChickenCurrykg,	 
                    
                	
                    	//Lamb Shank
                        LambShank: LambShank,	 
                        LambShankkg: LambShankkg,	 
                    
                	
                    	//Fish Curry
                        FishCurry: FishCurry,	 
                        FishCurrykg: FishCurrykg,	 
                    
                	
                    	//Singapore Fish Head Curry
                        SingaporeFishHeadCurry: SingaporeFishHeadCurry,	 
                        SingaporeFishHeadCurrykg: SingaporeFishHeadCurrykg,	 
                    
                	
                    	//Singapore Chilli Crab
                        SingaporeChilliCrab: SingaporeChilliCrab,	 
                        SingaporeChilliCrabkg: SingaporeChilliCrabkg,	 
                    
                	
                    	//Rendang Curry
                        Rendang: Rendang,	 
                        Rendangkg: Rendangkg,	 
                    
                	
                    	//Panang Curry
                        Panang: Panang,	 
                        Panangkg: Panangkg,	 
                    
                	
                    	//Durban Bunny Chow Curry
                        DurbanBunnyChowCurry: DurbanBunnyChowCurry,	 
                        DurbanBunnyChowCurrykg: DurbanBunnyChowCurrykg,	 
                    
                	
                    	//Peri Peri Seasoning
                        PeriPeri: PeriPeri,	 
                        PeriPerikg: PeriPerikg,	 
                    
                	
                    	//Harissa Seasoning
                        Harissa: Harissa,	 
                        Harissakg: Harissakg,	 
                    
                	
                    	//Cajun Seasoning
                        Cajun: Cajun,	 
                        Cajunkg: Cajunkg,	 
                    
                	
                    	//Chipotle Seasoning
                        Chipotle: Chipotle,	 
                        Chipotlekg: Chipotlekg,	 
                    
                	
                    	//Fried Rice Seasoning
                        FriedRice: FriedRice,	 
                        FriedRicekg: FriedRicekg,	 
                    
                	
                    	//Moroccan Seasoning
                        Moroccan: Moroccan,	 
                        Moroccankg: Moroccankg,	 
                    
                	
                    	//Paella Seasoning
                        Paella: Paella,	 
                        Paellakg: Paellakg,	 
                    
                	
                    	//Portugese Seasoning
                        Portugese: Portugese,	 
                        Portugesekg: Portugesekg	 
				},
		    dataType: "jsonp",
			crossDomain:true,
			cache:false, 
            success: success,
			error: function(jqXHR, textStatus, errorThrown){
				//alert(errorThrown);
				alert('Order failed: ' + errorThrown);
				}
		}); //$.ajax

	}
	return false;
});

  function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email)) {
	   return false;
	}else{
	   return true;
	}
  }