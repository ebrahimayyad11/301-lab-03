var allData = [];
var selectedKeyword;
function ajax() {
  $.ajax({
    type: 'Get',
    url: 'data/page-2.json',
    dataType: 'text',
    success: function (data) {
      allData = JSON.parse(data);
      addAnimals(allData);
      addImgs(allAnimals);
      select(allAnimals);
      checkKeyword();
    },
    error: function () {
      alert('json not found');
    },
  });
}


function ajax2() {
  $.ajax({
    type: 'Get',
    url: 'data/page-2.json',
    dataType: 'text',
    success: function (data) {
      allData = JSON.parse(data);
      addAnimals(allData);
      addImgs(allAnimals);
      select(allAnimals);
      checkKeyword();
    },
    error: function () {
      alert('json not found');
    },
  });
}

$('#page1').on('click', function(){
  ajax();
});

$('#page2').on('click', function(){
  ajax2();
});


var allAnimals = [];

function Animal(arr) {
  this.image_url = arr.image_url;
  this.title = arr.title;
  this.description = arr.description;
  this.keyword = arr.keyword;
  this.horns = arr.horns;
  allAnimals.push(this);
}

function select (arr){
  let newArr = [];
  arr.forEach(item => {
    if (newArr.length === 0){
      newArr.push(item.keyword);
    }else {
      if (!newArr.includes(item.keyword)){
        newArr.push(item.keyword);
      }
    }
  });

  newArr.forEach(item => {
    let li = $('<option> </option>').text(item);
    li.id = item;
    li.class = 'data_container';
    $('select').append(li);
  });

}

function addAnimals (arr){
  arr.forEach(item => {
    new Animal(item);
  });
}

let knowKeyword = (arr, keyword) => {
  console.log(arr.length);
  let newArr = [];
  arr.forEach((element) => {
    if (element.keyword === keyword) {
      newArr.push(element);
    }
  });
  return newArr;
};




function checkKeyword (){
  $('select.keyword').change(function () {
    selectedKeyword = $(this).children('option:selected').val();

    switch (selectedKeyword) {
    case 'narwhal': {
      addImgs(knowKeyword(allAnimals, 'narwhal'));
      break;
    }
    case 'rhino': {
      addImgs(knowKeyword(allAnimals, 'rhino'));
      break;
    }
    case 'unicorn': {
      addImgs(knowKeyword(allAnimals, 'unicorn'));
      break;
    }
    case 'unilego': {
      addImgs(knowKeyword(allAnimals, 'unilego'));
      break;
    }
    case 'triceratops': {
      addImgs(knowKeyword(allAnimals, 'triceratops'));
      break;
    }
    case 'markhor': {
      addImgs(knowKeyword(allAnimals, 'markhor'));
      break;
    }
    case 'mouflon': {
      addImgs(knowKeyword(allAnimals, 'mouflon'));
      break;
    }
    case 'addax': {
      addImgs(knowKeyword(allAnimals, 'addax'));
      break;
    }
    case 'chameleon': {
      addImgs(knowKeyword(allAnimals, 'chameleon'));
      break;
    }
    case 'lizard': {
      addImgs(knowKeyword(allAnimals, 'lizard'));
      break;
    }
    case 'dragon': {
      addImgs(knowKeyword(allAnimals, 'dragon'));
      break;
    }
    }
  });
}


const addImgs = (arr => {
  $('#main_container').empty();
  arr.forEach(item => {
    // let div = $('<div> </div>').attr('class' ,item.title);
    // let title = $('<h2> </h2>').text(item.title);
    // let img = $('<img>').attr('src' , item.image_url);
    // let horns = $('<p> </p>)').text('number of horns = '+item.horns);
    // let description = $('<p> </p>').text('description: '+item.description);
    // div.append(title,img,horns,description);
    // $('#main_container').append(div);
    item.addAnimal();
  });
});


Animal.prototype.addAnimal = function(){
  let imgTemplate = $('#imgTemplate').html();
  let imgMergeTemplate = Mustache.render(imgTemplate,this);
  $('#main_container').append(imgMergeTemplate);
};
