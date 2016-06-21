function request() {
      return $.ajax({
        type : 'GET',
        dataType : 'json',
        cache : 'false',
        url : "blogging.json",


        success : function(r) {
          
          $.each(r.posts, function(key, value){
            console.log(value.titleName);
            console.log(value.date);
            console.log(value.blogPost)
            $('#blog').append('<table id="blogSize"><tr><th><p class="titleName">' + value.titleName + '</p></th></tr><tr><td><p class="date">' + value.date + '</p><p class="blogPost">' + value.blogPost + '</p></td></tr></table><br>');
          });
      
        }
      });
    }
   
    request();
