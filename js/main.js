// DRY

/*
    for , while , do while , forEach ,for in , for of 

    i+=1 ... zod al i de wa7ad
*/

var element = document.getElementById('rowContent');

var elmentHtmlText;

for(var i = 0 ; i < 21 ; i +=1)
{
    elmentHtmlText += `<div class="col-md-4">
    <div class="bg-danger-subtle rounded-3">
        <div><img src="./image/person.jpg" alt="person" class="w-100"></div>
        <div class="px-3 pb-2">
            <h3>title person</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deserunt.</p>
        </div>
    </div>
    </div>`;
}

element.innerHTML = elmentHtmlText;