
(function(){
	function QuoteGen(element){
		this.el = document.querySelector(element);
		this.init();
	}
	
	QuoteGen.prototype = {
		init: function(){
			this.wrapper = this.el.querySelector(".generator-wrapper");
			this.quotes = this.el.querySelectorAll(".quote");
			this.previous = this.el.querySelector(".generator-previous");
			this.next = this.el.querySelector(".generator-next");
			this.index = 0;
			this.total = this.quotes.length;
			this.timer = null;
			
			this.action();
			this.stopStart();
		},
		_slideTo: function(quote){
			var currentQuote = this.quotes[quote];
			currentQuote.style.opacity = 1;
			
			for(var i=0; i<this.quotes.length; i++){
				var quote = this.quotes[i];
				if(quote !== currentQuote){
					quote.style.opacity = 0;
				}
			}
		},
		action: function(){
			var self = this;
			self.timer = setInterval(function(){
				self.index++;
				if(self.index == self.quotes.length){
					self.index = 0;
				}
				self._slideTo(self.index);
				
			}, 10000);
		},
		stopStart: function(){
			var self = this;
			self.el.addEventListener("mouseover",function(){
				clearInterval(self.timer);
				self.timer = null;
				
			}, false);
			self.el.addEventListener("mouseout", function(){
				self.action();
				
			}, false);
		}
	};
	document.addEventListener("DOMContentLoaded", function(){
		var generator = new QuoteGen("#main-generator");
		
	});
	
})();