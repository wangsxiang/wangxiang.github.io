(function($) { 
   $.ajax({
        type     : "GET",
        url      : 'http://1.huangjunhui.sinaapp.com/',
        success  : function(data) {
                    $("#counterValue").text(data);
                   },
        error    : function() { 
					
                    $("#counter").html(""); 
                   }
    });
	
})(jQuery);