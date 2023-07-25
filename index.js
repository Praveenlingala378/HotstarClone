let movies = [
{
	name: "falcon and the winter solider",
	des:
	"Lorem ipsum dolor sitlamet consecutive adipurishing alit, avelt gorre at vienwim axcept and cesf ife excepts"
	image: "C:\Users\prave\Desktop\Hotstar\images\slider 2.png"
},
{
	name: "loki",
	des:"Lorem ipsum dolor sitlamet consecutive adipurishing alit, avelt gorre at vienwim axcept and cesf ife excepts"
	image: "C:\Users\prave\Desktop\Hotstar\images\slider 1.png"
},
{
	name: "wanda vision",
	des:"Lorem ipsum dolor sitlamet consecutive adipurishing alit, avelt gorre at vienwim axcept and cesf ife excepts"
	image: "C:\Users\prave\Desktop\Hotstar\images\slider 3.png"
},
{
	name: "loki",
	des:"Lorem ipsum dolor sitlamet consecutive adipurishing alit, avelt gorre at vienwim axcept and cesf ife excepts"
	image: "C:\Users\prave\Desktop\Hotstar\images\slider 1.png"
},
{
	name: "Rays and the last Dragon",
	des:"Lorem ipsum dolor sitlamet consecutive adipurishing alit, avelt gorre at vienwim axcept and cesf ife excepts"
	image: "C:\Users\prave\Desktop\Hotstar\images\slider 4.png"
},
{
	name: "Luca",
	des:"Lorem ipsum dolor sitlamet consecutive adipurishing alit, avelt gorre at vienwim axcept and cesf ife excepts"
	image: "C:\Users\prave\Desktop\Hotstar\images\slider 5.png"
}
];

 const carousel=document.querySelector('.carousel');
 let sliders=[];

 let slideIndex=0;/track the current slide 

 const createSlide = ()=>{
 	if(slideIndex>=movies.length){
 		slideIndex=0;
 	}

 let slide=document.createElement('div');
 var imgElement=document.createElement('img');
 let content=document.createElement('div');
 let h1=document.createElement('h1');
 let p=document.createElement('p');

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
carousel.appendChild(slide);

imgElemnt.src=movies[slideIndex].image;
slideIndex++

slide.className='slider';
content.className='slide-content';
h1.className="movie-title";
p.className="movie-des";

sliders.push(slide);

if(slide.length){
	sliders[0].style.marginLeft= 'calc(-$100 *(sliders.length-2)}% - $ { 30 * (sliders.length - 2)}px)';
 }
};

for(let i=0; i<3; i++){
	createSlide();
}

setinterval(()=>{
	createSlide();
},3000);