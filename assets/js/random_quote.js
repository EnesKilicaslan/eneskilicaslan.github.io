

$(document).ready(function(){

	/*
	api:
		quoteText
		quoteAuthor
	*/
	var MAX_LEN = 150;
	var quote= "", author;
	

	function getNewQuote(){
		$.ajax({

			url: 'https://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},

			success: function(res){
				quote = res.quoteText;
				author = res.quoteAuthor;

				console.log('in ' + quote.length);

				if (quote.length > MAX_LEN)
					getNewQuote();
				else{
					$('#quote').text(quote);
					if(author)
						$('#author').text('~' + author);
					else
						$('#author').text('~ Unknown');
				}	
			},

			error: function(){ //on fail call API again
                setTimeout(getNewQuote, 200);
        	},

			complete: function(res) {
				console.log('out ' + quote.length);	
		    }
			
		});		
	};

	getNewQuote();

	$('.get-quote').click(function(e){
        e.preventDefault();
        getNewQuote();
    });

    $('.share-quote').click(function(e){
    	e.preventDefault();

    })

    $('.popup').click(function(event) {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url + quote + '\n' + '~ ' + author, 'twitter', opts);
 
    return false;
  });

});