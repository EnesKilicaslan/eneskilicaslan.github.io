

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
						$('#author').text('~ unknown');
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

});