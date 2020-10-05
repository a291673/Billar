var d1,d2,d3,d4,d5,d6,g1,g2,g3,g4,g5,g6;
var costo = 50;
function cambiar(mesa){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    switch (mesa) {
        case 1:
            var estado = document.getElementById('mesa1');
            if(estado.src.match('mesaColor')){
                estado.src='img/mesaGris.png';
                clearInterval(clock1);
                g1=0;
                document.getElementById('total1').style.display="block";
                var current = (h-d1.getHours())+((m-d1.getMinutes())/60)+((s-d1.getSeconds())/3600);
                current = current*costo;
                document.getElementById('total1').innerHTML = "Total: $"+ current.toFixed(3);;
            }
            else{
                estado.src='img/mesaColor.png';
                d1=d;
                document.getElementById('inicio1').innerHTML = "Hora de inicio: "+ d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds();
                document.getElementById('total1').innerHTML = "Total: $0"
                g1=1;
                var clock1 = setInterval( function() { displayCost1(); }, 1000 );
            }
            break;
        case 2:
            var estado = document.getElementById('mesa2');
            if(estado.src.match('mesaColor')){
                estado.src='img/mesaGris.png';
                clearInterval(clock2);
                g2=0;
                var current = (h-d2.getHours())+((m-d2.getMinutes())/60)+((s-d2.getSeconds())/3600);
                current = current*costo;
                document.getElementById('total2').innerHTML = "Total: $"+ current.toFixed(3);;
            }
            else{
                estado.src='img/mesaColor.png';
                d2=d;
                document.getElementById('inicio2').innerHTML = "Hora de inicio: "+ d2.getHours()+":"+d2.getMinutes()+":"+d2.getSeconds();
                document.getElementById('total2').innerHTML = "Total: $0"
                g2=1;
                var clock2 = setInterval( function() { displayCost2(); }, 1000 );
            }
            break;
        case 3:
            var estado = document.getElementById('mesa3');
            if(estado.src.match('mesaColor')){
                estado.src='img/mesaGris.png';
                clearInterval(clock3);
                g3=0;
                var current = (h-d3.getHours())+((m-d3.getMinutes())/60)+((s-d3.getSeconds())/3600);
                current = current*costo;
                document.getElementById('total3').innerHTML = "Total: $"+ current.toFixed(3);;
            }
            else{
                estado.src='img/mesaColor.png';
                d3=d;
                document.getElementById('inicio3').innerHTML = "Hora de inicio: "+ d3.getHours()+":"+d3.getMinutes()+":"+d3.getSeconds();
                document.getElementById('total3').innerHTML = "Total: $0"
                g3=1;
                var clock3 = setInterval( function() { displayCost3(); }, 1000 );
            }
            break;
        case 4:
            var estado = document.getElementById('mesa4');
            if(estado.src.match('mesaColor')){
                estado.src='img/mesaGris.png';
                clearInterval(clock4);
                g4=0;
                var current = (h-d4.getHours())+((m-d4.getMinutes())/60)+((s-d4.getSeconds())/3600);
                current = current*costo;
                document.getElementById('total4').innerHTML = "Total: $"+ current.toFixed(3);;
            }
            else{
                estado.src='img/mesaColor.png';
                d4=d;
                document.getElementById('inicio4').innerHTML = "Hora de inicio: "+ d4.getHours()+":"+d4.getMinutes()+":"+d4.getSeconds();
                document.getElementById('total4').innerHTML = "Total: $0"
                g4=1;
                var clock4 = setInterval( function() { displayCost4(); }, 1000 );
            }
            break;
        case 5:
            var estado = document.getElementById('mesa5');
            if(estado.src.match('mesaColor')){
                estado.src='img/mesaGris.png';
                clearInterval(clock5);
                g5=0;
                var current = (h-d5.getHours())+((m-d5.getMinutes())/60)+((s-d5.getSeconds())/3600);
                current = current*costo;
                document.getElementById('total5').innerHTML = "Total: $"+ current.toFixed(3);;
            }
            else{
                estado.src='img/mesaColor.png';
                d5=d;
                document.getElementById('inicio5').innerHTML = "Hora de inicio: "+ d5.getHours()+":"+d5.getMinutes()+":"+d5.getSeconds();
                document.getElementById('total5').innerHTML = "Total: $0"
                g5=1;
                var clock5 = setInterval( function() { displayCost5(); }, 1000 );
            }
            break;
        case 6:
            var estado = document.getElementById('mesa6');
            if(estado.src.match('mesaColor')){
                estado.src='img/mesaGris.png';
                clearInterval(clock6);
                g6=0;
                var current = (h-d6.getHours())+((m-d6.getMinutes())/60)+((s-d6.getSeconds())/3600);
                current = current*costo;
                document.getElementById('total6').innerHTML = "Total: $"+ current.toFixed(3);;
            }
            else{
                estado.src='img/mesaColor.png';
                d6=d;
                document.getElementById('inicio6').innerHTML = "Hora de inicio: "+ d6.getHours()+":"+d6.getMinutes()+":"+d6.getSeconds();
                document.getElementById('total6').innerHTML = "Total: $0"
                g6=1;
                var clock6 = setInterval( function() { displayCost6(); }, 1000 );
            }
            break;
        default:
            break;
    }
}
function displayCost1(){
    if(g1==1)
    {
        var d = new Date();
        h=d.getHours();
        m=d.getMinutes();
        s=d.getSeconds();
        var current = (h-d1.getHours())+((m-d1.getMinutes())/60)+((s-d1.getSeconds())/3600);
        current = current*costo;
        document.getElementById('total1').innerHTML = "Total: $"+ current.toFixed(3);
    }

}
function displayCost2(){
    if(g2==1)
    {
        var d = new Date();
        h=d.getHours();
        m=d.getMinutes();
        s=d.getSeconds();
        var current = (h-d2.getHours())+((m-d2.getMinutes())/60)+((s-d2.getSeconds())/3600);
        current = current*costo;
        document.getElementById('total2').innerHTML = "Total: $"+ current.toFixed(3);
    }
}
function displayCost3(){
    if(g3==1)
    {
        var d = new Date();
        h=d.getHours();
        m=d.getMinutes();
        s=d.getSeconds();
        var current = (h-d3.getHours())+((m-d3.getMinutes())/60)+((s-d3.getSeconds())/3600);
        current = current*costo;
        document.getElementById('total3').innerHTML = "Total: $"+ current.toFixed(3);
    }
}
function displayCost4(){
    if(g4==1)
    {
        var d = new Date();
        h=d.getHours();
        m=d.getMinutes();
        s=d.getSeconds();
        var current = (h-d4.getHours())+((m-d4.getMinutes())/60)+((s-d4.getSeconds())/3600);
        current = current*costo;
        document.getElementById('total4').innerHTML = "Total: $"+ current.toFixed(3);
    }
}
function displayCost5(){
    if(g5==1)
    {
        var d = new Date();
        h=d.getHours();
        m=d.getMinutes();
        s=d.getSeconds();
        var current = (h-d5.getHours())+((m-d5.getMinutes())/60)+((s-d5.getSeconds())/3600);
        current = current*costo;
        document.getElementById('total5').innerHTML = "Total: $"+ current.toFixed(3);
    }
}
function displayCost6(){
    if(g6==1)
    {
        var d = new Date();
        h=d.getHours();
        m=d.getMinutes();
        s=d.getSeconds();
        var current = (h-d6.getHours())+((m-d6.getMinutes())/60)+((s-d6.getSeconds())/3600);
        current = current*costo;
        document.getElementById('total6').innerHTML = "Total: $"+ current.toFixed(3);
    }
}