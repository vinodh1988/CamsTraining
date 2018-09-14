
function world(){
    return "World doesnt belong to an individual!!!!!";
}

function mobile(){
    return "Individuals can own mobiles...!!!"; 
}

function pen(){
    return "Everyone can own a pen!!!";
}

module.exports={a:world,
                b:mobile,
                c:pen}

module.exports.utils=["Paper","Pen","Eraser","Shapener"];

module.exports.fun=(z)=>"Hey!!!!"+z;