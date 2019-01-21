$(function(){
	// 轮播
	bannerRotate.bannerInit();
});

// banner rotating
var bannerRotate = {
	_time: 10000,
	_fade: 200,
	_i: 0,
	_interval: null,
	_navId: "#mb-inav",
	_navBox: "#mb-ibox",
	_navTxt: "#mb-itxt",
	bannerShow: function() {
	    $(this._navId).find("li .item-li").removeClass("cur");
	    $(this._navId).find("li:eq(" + this._i + ")").find(".item-li").addClass("cur");
		
		//$(this._navBox).find("a").hide();
		$(this._navBox).find("a:eq(" + this._i + ")").fadeIn(this._fade);

	    $(this._navBox).find("a").removeClass("move");
		$(this._navBox).find("a[class='cur']").removeClass("cur").addClass("move");

		$(this._navBox).find("a:eq(" + this._i + ")").removeClass("move").addClass("cur");
		$(this._navTxt).find(".slide-itxt").hide();
		$(this._navTxt).find(".slide-itxt:eq(" + this._i + ")").fadeIn(this._fade);
	},
	bannerStart:function() {
		var _this = this;
		_this._interval = setInterval(function() {
			if(_this._i >= 3) {
				_this._i = 0;
			}
			else {
				_this._i++;
			}
			_this.bannerShow();
		}, _this._time);
	},
	bannerInit: function() {
		var _this = this;
		_this.bannerStart();
		
		$(_this._navId).find("li .item-li").bind("click", function () {
		    if ($(this).hasClass("cur")) {
		        return;
		    }
		    clearInterval(_this._interval);
			_this._i = $(this).parent().index();
			_this.bannerShow();
			_this.bannerStart();
		});
	}
};
/*
     FILE ARCHIVED ON 02:44:21 Sep 21, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:18:39 Jan 21, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 124.529 (3)
  esindex: 0.007
  captures_list: 144.376
  CDXLines.iter: 11.337 (3)
  PetaboxLoader3.datanode: 99.503 (5)
  exclusion.robots: 0.163
  exclusion.robots.policy: 0.15
  RedisCDXSource: 5.764
  PetaboxLoader3.resolve: 172.432 (4)
  load_resource: 161.656
*/