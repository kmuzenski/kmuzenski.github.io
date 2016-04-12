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
            $('#blog').append('<div class="col-lg-12"><p class="titleName">' + value.titleName + '</p><p class="date">' + value.date + '</p><p class="blogPost">' + value.blogPost + '</p><hr class="featurette-divider"></div>');
          });
          $('#blog').append('</div>');
        }
      });
    }
   
    request();
