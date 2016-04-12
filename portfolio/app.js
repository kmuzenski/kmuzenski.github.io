function request() {
      return $.ajax({
        type : 'GET',
        dataType : 'json',
        cache : 'false',
        url : "blogging.json",


        success : function(r) {
          $('#blog').append('<div class="row">');
          $.each(r.posts, function(key, value){
            console.log(value.titleName);
            console.log(value.date);
            console.log(value.blogPost)
            $('#blog').append('<div class="col-md-12"><table id="blogSize"><tr><th><p class="titleName">' + value.titleName + '</p></th></tr><tr><td><p class="date">' + value.date + '</p><p class="blogPost">' + value.blogPost + '</p></td></tr></div></table><br>');
          });
          $('#blog').append('</div>');
        }
      });
    }
   
    request();
