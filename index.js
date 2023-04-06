function preloader()
{
	
	const imagesList = ["img/s1.jpg","img/s2.jpg","img/s3.jpg"];

	const images=[]

	for(let i=0;i<imagesList.length;i++)
	{
		images[i]=new Image();
		images[i].src = imagesList[i];
	}

	console.log(`preloaded images :\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load",preloader);


const tabbuttons = document.querySelectorAll(".tabbutton");


let mainobject =  
{
		t1:{
		title: "Power house",
        bodytext: "This is a body text of tab1.",
        imageurl: "img/s1.jpg",
		imgalt:"solar panel 1"
		},
		t2:{
		title: "Light Source",
        bodytext: "This is a body text of tab2.",
        imageurl: "img/s2.jpg",
		imgalt:"solar panel 2"
		},
		t3:{
		title: "Today's Technique",
        bodytext: "This is a body text of tab1.",
        imageurl: "img/s3.jpg",
		imgalt:"solar panel 3"
		}
}

let navigation = document.querySelectorAll(".tab");
let tabcontent = document.querySelector("#tabdata");



tabcontent.innerHTML=`<h1>${mainobject.t1.title}</h1><img src="${mainobject.t1.imageurl}" alt="${mainobject.t1.imgalt}"><p>${mainobject.t1.bodytext}</p>`;

let eventHandler = function (targetedbutton) {
    let currentclickeditem = targetedbutton.target;
    let showcontentof = currentclickeditem.innerText;

    for (let i = 0; i < navigation.length; i++) {
        if (navigation[i].hasAttribute('id')) {
            navigation[i].removeAttribute('id');
        }
        
    }
    currentclickeditem.setAttribute('id', 'active-button');
    if(showcontentof=="Button2")
    {
    	tabcontent.innerHTML=`<h1>${mainobject.t2.title}</h1><img src="${mainobject.t2.imageurl}" alt="${mainobject.t2.imgalt}"><p>${mainobject.t2.bodytext}</p>`;
    }
    else if(showcontentof=="Button3")
    {
    	tabcontent.innerHTML=`<h1>${mainobject.t3.title}</h1><img src="${mainobject.t3.imageurl}" alt="${mainobject.t3.imgalt}"><p>${mainobject.t3.bodytext}</p>`;
    }
    else
    {
    	tabcontent.innerHTML=`<h1>${mainobject.t1.title}</h1><img src="${mainobject.t1.imageurl}" alt="${mainobject.t1.imgalt}"><p>${mainobject.t1.bodytext}</p>`;

    }
}
for (let i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener("click", eventHandler);
}







