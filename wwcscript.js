function mOut(obj){
	obj.innerHTML = "What is 'Wild Wild Country' about?"
	obj.style.backgroundColor = 'grey'
	obj.style.border = 'none'
}

function mOver(obj){

	obj.style.backgroundColor = 'black'
	obj.style.border = '5px inset white'
	obj.innerHTML = "'When a controversial guru builds a utopian city in the Oregon desert, it causes a massive conflict with local ranchers. This docuseries chronicles the conflict, which leads to the first bioterror attack in the United States and a massive case of illegal wiretapping. It is a pivotal, but largely forgotten, time in American cultural history that tested the country's tolerance for the separation of church and state. Brothers Mark and Jay Duplass serve as executive producers on the series.'"
}

var video = document.getElementsByClassName('youtube');
var youtube	= video[0]

var img = document.createElement('img');

img.setAttribute('src', "http://i.ytimg.com/vi/" + youtube.id + "/hqdefault.jpg");
img.setAttribute('class', 'thumb');


youtube.appendChild(img);

youtube.onclick = function() {

	var iframe = document.createElement('iframe');
	iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.id 
        + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");

	iframe.style.width = this.style.width;
	iframe.style.height = this.style.height;
	iframe.style.display = 'block';
	iframe.style.margin = 'auto'; 



	this.parentNode.replaceChild(iframe, this);

}