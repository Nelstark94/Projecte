
var midaTaulell = 12;
var intents = 0;
var punts = 0;
var click = 1;
var numId;
var numId2;
var src1;
var src2;

var imatges = ["images/img_1.jpg","images/img_2.jpg","images/img_3.jpg","images/img_4.jpg","images/img_5.jpg",
"images/img_6.jpg","images/img_1.jpg","images/img_2.jpg","images/img_3.jpg","images/img_4.jpg","images/img_5.jpg","images/img_6.jpg"];

imatges = imatges.sort(function() {return Math.random() - 0.5});

$(document).ready(function(){
	$('img').click(function(){
		if(click == 1){
			var id = $(this).attr("id");
			var tmpId = id.split("_");
			numId = parseInt(tmpId[1])-1;

			$(this).attr("src", imatges[numId]);
			src1 = $(this).attr("src");
			click = 2;
		}else{
			var id2 = $(this).attr("id");
			var tmpId2 = id2.split("_");
			numId2 = parseInt(tmpId2[1])-1;

			$(this).attr("src", imatges[numId2]);
			src2 = $(this).attr("src");

			intents++;

			if(src1 != src2){
				setTimeout(function(){
					$("#img_"+(numId2+1)).attr("src", "images/portada.png");
					$("#img_"+(numId+1)).attr("src", "images/portada.png");
				},0500);

			}else{
				punts++;
				if(punts == imatges.length/2){
					alert("Ho has aconseguit!");
				}
			}
		click=1;
		}
	});
});