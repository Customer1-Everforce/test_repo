var uploadURL ="https://api.github.com/repos/daniellevass/web-quiz/git/blobs" + accessToken;

console.log(uploadURL);

$.ajax({
  type: "POST",
  url: uploadURL,
  contentType: "application/json",
  dataType: "json",
  data: JSON.stringify({
      "content": "aGVsbG8=",
      "encoding": "utf-8"
    })
})
  .done(function( data ) {
    console.log( data );
  });
