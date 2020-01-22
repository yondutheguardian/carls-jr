$(document).ready(function() {
	var step = 1;
	// $('.mycube').addClass('step1');
	setInterval(function(){
		if (step == 5) {
			step = 1;
			// $('.mycube').removeClass('step4');
        }
        if(step==1){
            $('#t1').removeClass().addClass('step1');
            $('#t2').removeClass().addClass('step2');
            $('#t3').removeClass().addClass('step3');
            $('#t4').removeClass().addClass('step5');
        }
        if(step==2){
            $('#t1').removeClass().addClass('step2');
            $('#t2').removeClass().addClass('step3');
            $('#t3').removeClass().addClass('step5');
            $('#t4').removeClass().addClass('step6');
        }
        if(step==3){
            $('#t1').removeClass().addClass('step3');
            $('#t2').removeClass().addClass('step5');
            $('#t3').removeClass().addClass('step6');
            $('#t4').removeClass().addClass('step7');
        }
        if(step==4){
            $('#t1').removeClass().addClass('step4');
            $('#t2').removeClass().addClass('step1');
            $('#t3').removeClass().addClass('step2');
            $('#t4').removeClass().addClass('step3');
        }
		step++;
	}, 2000);
});