var express = require('express');
var router = express.Router();

var request_yelp = require('../functions/request_yelp');

router.get('/', function(req, res) {

  // calling yelp api (commented out for now, replaced with hardcoded businesses below)
  request_yelp({location: req.query.location}, function (error, response, body) {
    if (error) {
      console.error(error);
    }
    var parsed = JSON.parse(body);
    var businesses = parsed.businesses;

    for (var i=0; i<businesses.length; i++) {
      console.log(businesses[i].image_url);
      businesses[i].image_url = businesses[i].image_url.slice(0,-6)+'o.jpg';
    }

    console.log(JSON.stringify(businesses));
    res.json(businesses);
  })

  // var businesses = [{"is_claimed":true,"rating":5,"mobile_url":"https://m.yelp.com/biz/dans-kitchen-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png","review_count":36,"name":"Dan's Kitchen","rating_img_url_small":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png","url":"https://www.yelp.com/biz/dans-kitchen-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["American (Traditional)","tradamerican"],["Burgers","burgers"],["Breakfast & Brunch","breakfast_brunch"]],"menu_date_updated":1453492420,"phone":"2065782935","snippet_text":"It's not often that catch myself meditating on the taste of food. It's even more rare that I meditate on food I didn't even order. That's really saying...","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/SopZzPnA1aHAPiTAOyxxQQ/o.jpg","snippet_image_url":"https://s3-media1.fl.yelpcdn.com/photo/JVZJKV45d1NS6Twz_7IvwQ/ms.jpg","display_phone":"+1-206-578-2935","rating_img_url_large":"https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png","menu_provider":"eat24","id":"dans-kitchen-seattle","is_closed":false,"location":{"cross_streets":"68th St & 66th St","city":"Seattle","display_address":["6552 15th Ave NE","Ravenna","Seattle, WA 98115"],"geo_accuracy":8,"neighborhoods":["Ravenna"],"postal_code":"98115","country_code":"US","address":["6552 15th Ave NE"],"coordinate":{"latitude":47.67739,"longitude":-122.31177},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/tenth-west-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":75,"name":"Tenth West","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/tenth-west-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["American (New)","newamerican"],["Sandwiches","sandwiches"]],"phone":"2067086742","snippet_text":"Wonderful café in walking distance from home for me and #girlfriend, with great food at great prices, and friendly service from people who feel like...","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/zd5H634iEbdFDHa8fMFm1w/o.jpg","snippet_image_url":"https://s3-media3.fl.yelpcdn.com/photo/O1ycgWkxttw_xyi17CTEjw/ms.jpg","display_phone":"+1-206-708-6742","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"tenth-west-seattle","is_closed":false,"location":{"cross_streets":"Crockett St & Howe St","city":"Seattle","display_address":["1903 10th Ave W","Queen Anne","Seattle, WA 98119"],"geo_accuracy":8,"neighborhoods":["Queen Anne"],"postal_code":"98119","country_code":"US","address":["1903 10th Ave W"],"coordinate":{"latitude":47.636104,"longitude":-122.37075},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/le-caviste-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":87,"name":"Le Caviste","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/le-caviste-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Wine Bars","wine_bars"],["French","french"]],"phone":"2067282657","snippet_text":"What a wonderful place! \nIt feels like being back in France. \n\nGreat selection of wine, superb food and an owner very nonchalant/ easygoing that makes you...","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/MT8YcC2yIHK6AW4ewNgmSg/o.jpg","snippet_image_url":"https://s3-media1.fl.yelpcdn.com/photo/ZqM0ZUkYfQepV7Ss6YZcYA/ms.jpg","display_phone":"+1-206-728-2657","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"le-caviste-seattle","is_closed":false,"location":{"cross_streets":"Virginia St & Stewart St","city":"Seattle","display_address":["1919 7th Ave","Denny Triangle","Seattle, WA 98101"],"geo_accuracy":9.5,"neighborhoods":["Denny Triangle"],"postal_code":"98101","country_code":"US","address":["1919 7th Ave"],"coordinate":{"latitude":47.6145686,"longitude":-122.3366618},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/ummas-lunch-box-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":195,"name":"Umma's Lunch Box","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/ummas-lunch-box-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Korean","korean"],["Buffets","buffets"]],"phone":"2068543166","snippet_text":"Great staff and Korean-style take-out restaurant underneath the 5th Avenue Theater! Like the others have mentioned, you are charged by the size of your...","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/QqrpImnPywZ9zc721RVRrg/o.jpg","snippet_image_url":"https://s3-media3.fl.yelpcdn.com/photo/k_7eAarmDd117Hb075WwmA/ms.jpg","display_phone":"+1-206-854-3166","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"ummas-lunch-box-seattle","is_closed":false,"location":{"cross_streets":"Union St & University St","city":"Seattle","display_address":["1301 5th Ave","Concourse","Downtown","Seattle, WA 98101"],"geo_accuracy":9.5,"neighborhoods":["Downtown"],"postal_code":"98101","country_code":"US","address":["1301 5th Ave","Concourse"],"coordinate":{"latitude":47.6088937,"longitude":-122.3342613},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/bottlehouse-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":194,"name":"Bottlehouse","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/bottlehouse-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Wine Bars","wine_bars"],["Tapas/Small Plates","tapasmallplates"]],"phone":"2067087164","snippet_text":"My friends and I waited 45 minutes for a table on a Thursday night. The place was packed so if you want to guarantee a shorter wait time, come earlier to...","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/cnx9UEXR3TIaApI6fnykQA/o.jpg","snippet_image_url":"https://s3-media1.fl.yelpcdn.com/photo/knkYVSjxTGONce4_A9rSQQ/ms.jpg","display_phone":"+1-206-708-7164","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"bottlehouse-seattle","is_closed":false,"location":{"cross_streets":"Union St & Pike St","city":"Seattle","display_address":["1416 34th Ave","Madrona","Seattle, WA 98122"],"geo_accuracy":8,"neighborhoods":["Madrona"],"postal_code":"98122","country_code":"US","address":["1416 34th Ave"],"coordinate":{"latitude":47.6134605407715,"longitude":-122.288963317871},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/simply-soulful-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":78,"name":"Simply Soulful","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/simply-soulful-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Desserts","desserts"],["Soul Food","soulfood"],["Southern","southern"]],"menu_date_updated":1450697313,"phone":"2064749841","snippet_text":"Just love this place. This is one of those places I hate writing an amazing review about because it will get super popular but I can't say enough good...","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/TWZxZ0Yg2T3VKjUQUbz0tQ/o.jpg","snippet_image_url":"https://s3-media2.fl.yelpcdn.com/photo/lfEcMgoXzEEKsnd9OheNbw/ms.jpg","display_phone":"+1-206-474-9841","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","menu_provider":"single_platform","id":"simply-soulful-seattle","is_closed":false,"location":{"cross_streets":"E 31st Ave & E Lake Washington Blvd","city":"Seattle","display_address":["2909-B E Madison Ave","Madison Valley","Seattle, WA 98112"],"geo_accuracy":9.5,"neighborhoods":["Madison Valley"],"postal_code":"98112","country_code":"US","address":["2909-B E Madison Ave"],"coordinate":{"latitude":47.624083,"longitude":-122.294851},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/morsel-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":427,"name":"Morsel","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/morsel-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Coffee & Tea","coffee"],["Comfort Food","comfortfood"],["Breakfast & Brunch","breakfast_brunch"]],"phone":"2062680154","snippet_text":"Yeah this place is legit. Small choice selection because they do a few things extremely well. \n\nI had the spanish fly based on all my friends recs and it...","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/uVGyORl8oW63YrkL9C8cGw/o.jpg","snippet_image_url":"https://s3-media2.fl.yelpcdn.com/photo/vuZN8Dk_hEfGB8UU13jq2A/ms.jpg","display_phone":"+1-206-268-0154","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"morsel-seattle","is_closed":false,"location":{"cross_streets":"47th St & 50th St","city":"Seattle","display_address":["4754 University Way NE","University District","Seattle, WA 98105"],"geo_accuracy":8,"neighborhoods":["University District"],"postal_code":"98105","country_code":"US","address":["4754 University Way NE"],"coordinate":{"latitude":47.664669,"longitude":-122.3128967},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/paseo-seattle-3?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":4151,"name":"Paseo","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/paseo-seattle-3?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Caribbean","caribbean"],["Cuban","cuban"],["Sandwiches","sandwiches"]],"menu_date_updated":1447907727,"phone":"2065457440","snippet_text":"Got the #2 and #8 and split with my girlfriend.\n\nBOOM! That was amazing the meat is juicy and is more or less falling apart and the bread was on point....","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/4m424s2qtBvNbpB7kgW8cQ/o.jpg","snippet_image_url":"https://s3-media1.fl.yelpcdn.com/photo/z68J-jukT0eqEP3SbfNRyA/ms.jpg","display_phone":"+1-206-545-7440","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","menu_provider":"single_platform","id":"paseo-seattle-3","is_closed":false,"location":{"cross_streets":"42nd St & Motor Pl","city":"Seattle","display_address":["4225 Fremont Ave N","Fremont","Seattle, WA 98103"],"geo_accuracy":8,"neighborhoods":["Fremont"],"postal_code":"98103","country_code":"US","address":["4225 Fremont Ave N"],"coordinate":{"latitude":47.6584968566895,"longitude":-122.350311279297},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/some-random-bar-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":346,"name":"Some Random Bar","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/some-random-bar-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Gastropubs","gastropubs"],["Cocktail Bars","cocktailbars"]],"phone":"2067452185","snippet_text":"Amazing food, drinks and they don't serve InBev AB beers.  Thanks for supporting the local beers!!\n\nWe had been in here once before for drinks with some...","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/UdLQi3EdV3uVuQKFwH1xfw/o.jpg","snippet_image_url":"https://s3-media2.fl.yelpcdn.com/photo/la_4NBHxOLvTnkDYKLbIUw/ms.jpg","display_phone":"+1-206-745-2185","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"some-random-bar-seattle","is_closed":false,"location":{"cross_streets":"Cedar St & Vine St","city":"Seattle","display_address":["2604 1st Ave","Belltown","Seattle, WA 98121"],"geo_accuracy":9.5,"neighborhoods":["Belltown"],"postal_code":"98121","country_code":"US","address":["2604 1st Ave"],"coordinate":{"latitude":47.6155010022786,"longitude":-122.349802245912},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/korean-bamboo-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":51,"name":"Korean Bamboo","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/korean-bamboo-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Korean","korean"]],"phone":"2064439898","snippet_text":"Great food, large portions, not expensive.\n\nThis is definitely on my list of places to come back to next time I'm in Seattle.","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/EvhI3adlRMLTSAaZ32IJ7w/o.jpg","snippet_image_url":"https://s3-media2.fl.yelpcdn.com/photo/Rn4sVdncm5dd7ky6UgetTw/ms.jpg","display_phone":"+1-206-443-9898","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"korean-bamboo-seattle","is_closed":false,"location":{"cross_streets":"Blanchard St & Bell St","city":"Seattle","display_address":["2236 3rd Ave","Belltown","Seattle, WA 98121"],"geo_accuracy":8,"neighborhoods":["Belltown"],"postal_code":"98121","country_code":"US","address":["2236 3rd Ave"],"coordinate":{"latitude":47.61479,"longitude":-122.34435},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/schooner-exact-brewing-company-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":144,"name":"Schooner Exact Brewing Company","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/schooner-exact-brewing-company-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Breweries","breweries"],["American (New)","newamerican"]],"phone":"2064329734","snippet_text":"Went here with my wife and 3-month old baby yesterday.  Kid-friendly place (dining room)...there were 4 other couples with kids in the place.  Nice bar area...","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/zMZboFLXj9sbSWV9KqI6tQ/o.jpg","snippet_image_url":"https://s3-media1.fl.yelpcdn.com/photo/pEAJp1vmBv9VuW6wdcC2oQ/ms.jpg","display_phone":"+1-206-432-9734","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"schooner-exact-brewing-company-seattle","is_closed":false,"location":{"cross_streets":"South Dakota St","city":"Seattle","display_address":["3901 1st Ave S","Industrial District","Seattle, WA 98134"],"geo_accuracy":9.5,"neighborhoods":["Industrial District"],"postal_code":"98134","country_code":"US","address":["3901 1st Ave S"],"coordinate":{"latitude":47.5677596618358,"longitude":-122.335340227786},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/taylor-shellfish-oyster-bar-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":195,"name":"Taylor Shellfish Oyster Bar","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/taylor-shellfish-oyster-bar-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Seafood","seafood"],["Bars","bars"],["Live/Raw Food","raw_food"]],"menu_date_updated":1442205518,"phone":"2065014442","snippet_text":"Holy Oyster!  OK, we stopped by after visiting the Woodland Park Zoo.  The last time we were in Seattle, we stayed literally footsteps from this location...","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/xIK0P6yXAHNLjusUHgDYRQ/o.jpg","snippet_image_url":"https://s3-media1.fl.yelpcdn.com/photo/OA4ShLm2N1_dtO4Zos2_WQ/ms.jpg","display_phone":"+1-206-501-4442","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","menu_provider":"single_platform","id":"taylor-shellfish-oyster-bar-seattle","is_closed":false,"location":{"cross_streets":"N Warren Ave & N 1st Ave","city":"Seattle","display_address":["124 Republican St","Lower Queen Anne","Seattle, WA 98109"],"geo_accuracy":9.5,"neighborhoods":["Lower Queen Anne"],"postal_code":"98109","country_code":"US","address":["124 Republican St"],"coordinate":{"latitude":47.6232809,"longitude":-122.354362},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/radiator-whiskey-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":606,"name":"Radiator Whiskey","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/radiator-whiskey-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["American (New)","newamerican"],["Cocktail Bars","cocktailbars"]],"menu_date_updated":1453590484,"phone":"2064674268","snippet_text":"This place is renowned for its plates of meat and its pig's head (which I am DEFINITELY coming back to try) but if you're just a humble party of two looking...","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/Xsbgu8r9O03Xkdp1D-Hwfw/o.jpg","snippet_image_url":"https://s3-media1.fl.yelpcdn.com/photo/YgXQ8aT3a_ozttw2CtZSFg/ms.jpg","display_phone":"+1-206-467-4268","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","menu_provider":"single_platform","id":"radiator-whiskey-seattle","is_closed":false,"location":{"cross_streets":"Post Aly & 1st Ave","city":"Seattle","display_address":["94 Pike St","Ste 30","Downtown","Seattle, WA 98101"],"geo_accuracy":8,"neighborhoods":["Downtown"],"postal_code":"98101","country_code":"US","address":["94 Pike St","Ste 30"],"coordinate":{"latitude":47.60888,"longitude":-122.34036},"state_code":"WA"}},{"is_claimed":false,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/ittos-tapas-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":26,"name":"Itto's Tapas","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/ittos-tapas-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Moroccan","moroccan"],["Tapas Bars","tapas"]],"phone":"2069325039","snippet_text":"A little West Seattle jewel for grown-ups with a tucked-away dining room for the fam. \n\nDrinks: strong, inventive. Excellent bartenders, waitstaff. The...","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/A3cmXIa90dcwtf7Fx4OZ3w/o.jpg","snippet_image_url":"https://s3-media2.fl.yelpcdn.com/photo/EgJwAaEzMPTLip5jusVDCA/ms.jpg","display_phone":"+1-206-932-5039","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"ittos-tapas-seattle","is_closed":false,"location":{"city":"Seattle","display_address":["4160 California Ave SW","Junction","Seattle, WA 98126"],"geo_accuracy":8,"neighborhoods":["Junction"],"postal_code":"98126","country_code":"US","address":["4160 California Ave SW"],"coordinate":{"latitude":47.5648,"longitude":-122.38655},"state_code":"WA"}},{"is_claimed":false,"rating":4,"mobile_url":"https://m.yelp.com/biz/heyday-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png","review_count":78,"name":"Heyday","rating_img_url_small":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png","url":"https://www.yelp.com/biz/heyday-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["American (New)","newamerican"],["Burgers","burgers"]],"menu_date_updated":1448863632,"phone":"2068299816","snippet_text":"Great food, service, and drinks.\n\nI can't stop coming here.\n\nBYOB is the way to go; so simple but very delicious. High quality ingredients here. Definitely...","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/CsvuL2KKdux2adlLYQzA4Q/o.jpg","snippet_image_url":"https://s3-media1.fl.yelpcdn.com/photo/WhLtbBt4hSJHeUA_Yb2seA/ms.jpg","display_phone":"+1-206-829-9816","rating_img_url_large":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png","menu_provider":"single_platform","id":"heyday-seattle","is_closed":false,"location":{"cross_streets":"Irving St & Day St","city":"Seattle","display_address":["1372 31st Ave S","Leschi","Seattle, WA 98144"],"geo_accuracy":9.5,"neighborhoods":["Leschi"],"postal_code":"98144","country_code":"US","address":["1372 31st Ave S"],"coordinate":{"latitude":47.5908721329221,"longitude":-122.292292676057},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/the-butcher-and-the-baker-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":184,"name":"The Butcher & The Baker","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/the-butcher-and-the-baker-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Sandwiches","sandwiches"],["Breakfast & Brunch","breakfast_brunch"]],"phone":"2064143100","snippet_text":"Oh The Butcher & The Baker, you had me at hello. You know the warm, welcoming, and \"We're genuinely happy you decided to stop in\" hello that was so nicely...","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/UOXOMYkDj0EK8ZkVqftyLQ/o.jpg","snippet_image_url":"https://s3-media3.fl.yelpcdn.com/photo/WYY7bG5DogLvA4LWfnMWuw/ms.jpg","display_phone":"+1-206-414-3100","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","id":"the-butcher-and-the-baker-seattle","is_closed":false,"location":{"cross_streets":"64th St & 65th St","city":"Seattle","display_address":["6412 Latona Ave NE","Greenlake","Seattle, WA 98115"],"geo_accuracy":9.5,"neighborhoods":["Greenlake"],"postal_code":"98115","country_code":"US","address":["6412 Latona Ave NE"],"coordinate":{"latitude":47.675894,"longitude":-122.3254382},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/chan-seattle-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":300,"name":"Chan Seattle","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/chan-seattle-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Korean","korean"],["Seafood","seafood"],["Tapas/Small Plates","tapasmallplates"]],"menu_date_updated":1442101293,"phone":"2064435443","snippet_text":"I really love this place. It's tucked away in a plaza/square close to the Pike Place Market. The restaurant is sleek and modern, consistent with its...","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/gmpNXyWPalUxqdG5Eoo2eQ/o.jpg","snippet_image_url":"https://s3-media4.fl.yelpcdn.com/photo/HVBIRZyuxiCvprPyebc1WA/ms.jpg","display_phone":"+1-206-443-5443","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","menu_provider":"single_platform","id":"chan-seattle-seattle","is_closed":false,"location":{"cross_streets":"Pike Pl & Post Aly","city":"Seattle","display_address":["86 Pine St","Downtown","Seattle, WA 98101"],"geo_accuracy":9.5,"neighborhoods":["Downtown"],"postal_code":"98101","country_code":"US","address":["86 Pine St"],"coordinate":{"latitude":47.6098823547363,"longitude":-122.341438293457},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/blind-pig-bistro-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":216,"name":"Blind Pig Bistro","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/blind-pig-bistro-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["American (New)","newamerican"]],"menu_date_updated":1442095427,"phone":"2063292744","snippet_text":"I have been here several times to a changing menu and it never disappoints. Big group, little group it doesn't matter, the service is ALWAYS on point. Buy...","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/xSSwitPzEBJ_84rLmrmjeg/o.jpg","snippet_image_url":"https://s3-media4.fl.yelpcdn.com/photo/qVNfDjEAAaH98nC8gIEXtg/ms.jpg","display_phone":"+1-206-329-2744","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","menu_provider":"single_platform","id":"blind-pig-bistro-seattle","is_closed":false,"location":{"cross_streets":"Boston St & Lynn St","city":"Seattle","display_address":["2238 Eastlake Ave E","Eastlake","Seattle, WA 98102"],"geo_accuracy":8,"neighborhoods":["Eastlake"],"postal_code":"98102","country_code":"US","address":["2238 Eastlake Ave E"],"coordinate":{"latitude":47.6388537883759,"longitude":-122.325846925378},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/i-see-food-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":97,"name":"I See Food","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/i-see-food-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Cajun/Creole","cajun"],["Seafood","seafood"]],"menu_date_updated":1451209626,"phone":"2065471111","snippet_text":"I went here twice. The first time, I had 1lb of their cajun crawfish and shrimp. The shrimp was juicy, big and full of flavor. Worked really well with their...","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/OZVFzIEh3RhM6NdCFexCrw/o.jpg","snippet_image_url":"https://s3-media4.fl.yelpcdn.com/photo/0JBPWaDmnzgXsvZmhiHObA/ms.jpg","display_phone":"+1-206-547-1111","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","menu_provider":"eat24","id":"i-see-food-seattle","is_closed":false,"location":{"cross_streets":"45th St & 43rd St","city":"Seattle","display_address":["4311 University Way NE","University District","Seattle, WA 98105"],"geo_accuracy":8,"neighborhoods":["University District"],"postal_code":"98105","country_code":"US","address":["4311 University Way NE"],"coordinate":{"latitude":47.66015,"longitude":-122.3134},"state_code":"WA"}},{"is_claimed":true,"rating":4.5,"mobile_url":"https://m.yelp.com/biz/pike-place-chowder-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","rating_img_url":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png","review_count":3611,"name":"Pike Place Chowder","rating_img_url_small":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png","url":"https://www.yelp.com/biz/pike-place-chowder-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=526wJLBBRl8Swq261NESpQ","categories":[["Seafood","seafood"],["American (Traditional)","tradamerican"],["Soup","soup"]],"menu_date_updated":1453953263,"phone":"2062672537","snippet_text":"Milo's at Cosmopolitan in Las Vegas\nMiko's restaurant and Greek cuisine is a gem in a worth to visit.\nMonika who was our server provided an impeccable...","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/ijju-wYoRAxWjHPTCxyQGQ/o.jpg","snippet_image_url":"https://s3-media3.fl.yelpcdn.com/photo/Gl9B8TdkXMjAFf8ZS0t_DA/ms.jpg","display_phone":"+1-206-267-2537","rating_img_url_large":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png","menu_provider":"single_platform","id":"pike-place-chowder-seattle","is_closed":false,"location":{"cross_streets":"Pike Pl & Pine St","city":"Seattle","display_address":["1530 Post Alley","Ste 11","Downtown","Seattle, WA 98101"],"geo_accuracy":9.5,"neighborhoods":["Downtown"],"postal_code":"98101","country_code":"US","address":["1530 Post Alley","Ste 11"],"coordinate":{"latitude":47.609376,"longitude":-122.341132},"state_code":"WA"}}]

  // res.send(businesses);



})

module.exports = router;
