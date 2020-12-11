let movieInput = JSON.parse(movies);
    // console.log(movieInput);

    for (let i = 0 ; i < movieInput.length; i++){
    $("#main").append(`
    
        <div class="">
            <div class="row col-6 mb-3">
                <img src="${movieInput[i].image}" class="col-4">
                <div class="col-8 bg-dark text-white mb-3 mx-auto">
                        <div class="row mt-1">
                            <div class="col-5 ">
                            <h4 class="row ml-2">${movieInput[i].movieName}</h4>
                            <p class="row ml-2">Description:<br>${movieInput[i].description}</p>
                            </div>  
                        </div>
                    <div class="row justify-content-end align-items-center mt-4 mr-1 mb-1">
                        
                    <button type="button" class="btn btn-success btn-sm active col-2 offset-5">Like</button>
                    <img class="ml-2" id="thumbsup" src="img/thumbsup.png" width="15%">
                            <div class="circle" id="circle${i}">
                                 <p id="${i}">${movieInput[i].likes}</p>
                            </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    `);   
}

for (let i = 0; i < movieInput.length; i++) {
    $('.btn-info:eq(' + i + ')').after(`<p id=${i}>${movieInput[i].likes}</p>`);
}

$('.btn-success').on('click', function() {
    let x = $(this).parent().find(".circle p").attr('id');
    console.log(x);
    movieInput[x].likes++;
    console.log("input is " + movieInput[x].likes);
    $(`#${x}`).text(movieInput[x].likes);
    console.log("final is " + movieInput[x].quantity);
})
