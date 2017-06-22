# var real=[];
var complex=[];
for(var i = 0; i < 1000; i++)
{
	real[i] = Math.sin(i*10);
	real[i] += Math.sin(i);
	complex[i] = 0;
}

function tf(inreal, inimag) 
{
	var outreal = [];
	var outimag = [];
	var outamp = [];
    var n = inreal.length;
    for (var k = 0; k < n; k++) 
	{
        var sumreal = 0;
        var sumimag = 0;
        for (var t = 0; t < n; t++)
		{
            var angle = 2 * Math.PI * t * k / n;
            sumreal +=  inreal[t] * Math.cos(angle) + inimag[t] * Math.sin(angle);
            sumimag += -inreal[t] * Math.sin(angle) + inimag[t] * Math.cos(angle);
        }
        outreal[k] = sumreal;
        outimag[k] = sumimag;
		outamp[k] = Math.sqrt(sumreal*sumreal+sumimag*sumimag);
    }
	//console.log(outreal);
	//console.log(outimag);
	console.log(outamp);
	return outamp;
}

document.body.innerHTML = "<canvas id='can' width='1000' height='1000'>"
var c = document.getElementById("can");
var ctx = c.getContext("2d");
var i;
function plot(arr)
{
for(i=0; i<1000; i+= 1){
 ctx.moveTo(i,1000);
    ctx.lineTo(i,1000-arr[i]);
}
ctx.stroke();
}
plot(tf(real,complex))
